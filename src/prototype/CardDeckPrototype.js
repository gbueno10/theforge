// PROTOTYPE — throwaway UI exploration, not production implementation.
// Single full-screen deck selected from the earlier A/B/C exploration.
import React, { useRef, useState } from 'react';
import { CARDS, CARD_TYPES, TOPICS } from '../data/cards';
import './card-deck-prototype.css';

const DEFAULT_TOPICS = TOPICS.filter((topic) => !topic.optional).map((topic) => topic.id);

function shuffle(cards) {
  const shuffled = [...cards];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }
  return shuffled;
}

function buildDeck(activeTopicIds, previousCardId) {
  const eligibleCards = CARDS.filter((card) => activeTopicIds.includes(card.topic));
  const deck = shuffle(eligibleCards);
  if (deck.length > 1 && deck[0].id === previousCardId) {
    [deck[0], deck[1]] = [deck[1], deck[0]];
  }
  return deck;
}

function useDeckState() {
  const [activeThemes, setActiveThemes] = useState(DEFAULT_TOPICS);
  const [deck, setDeck] = useState(() => buildDeck(DEFAULT_TOPICS));
  const [flipped, setFlipped] = useState(
    () => new URLSearchParams(window.location.search).get('face') === 'up'
  );

  const card = deck[0] || CARDS[0];
  const theme = TOPICS.find((topic) => topic.id === card.topic) || TOPICS[0];

  const toggleTheme = (themeId) => {
    if (activeThemes.includes(themeId) && activeThemes.length === 1) return;
    const next = activeThemes.includes(themeId)
      ? activeThemes.filter((id) => id !== themeId)
      : [...activeThemes, themeId];
    setActiveThemes(next);
    setDeck(buildDeck(next));
    setFlipped(false);
  };

  const enableAllThemes = () => {
    const allTopics = TOPICS.map((topic) => topic.id);
    setActiveThemes(allTopics);
    setDeck(buildDeck(allTopics));
    setFlipped(false);
  };

  const discardCurrentCard = () => {
    setDeck((current) => {
      if (current.length > 1) return current.slice(1);
      return buildDeck(activeThemes, current[0]?.id);
    });
    setFlipped(false);
  };

  const sendCurrentCardToBack = () => {
    setDeck((current) => current.length > 1 ? [...current.slice(1), current[0]] : current);
    setFlipped(false);
  };

  return {
    activeThemes,
    toggleTheme,
    enableAllThemes,
    card,
    theme,
    cardsRemaining: deck.length,
    flipped,
    setFlipped,
    discardCurrentCard,
    sendCurrentCardToBack,
  };
}

function SwipeableCard({ children, action, onSwipe, onTap }) {
  const [offset, setOffset] = useState(0);
  const [exiting, setExiting] = useState(false);
  const startX = useRef(0);
  const moved = useRef(false);
  const suppressClickUntil = useRef(0);

  const handlePointerDown = (event) => {
    if (exiting) return;
    startX.current = event.clientX;
    moved.current = false;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) return;
    const nextOffset = event.clientX - startX.current;
    if (Math.abs(nextOffset) > 5) moved.current = true;
    setOffset(nextOffset);
  };

  const handlePointerUp = (event) => {
    const finalOffset = event.clientX - startX.current;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    if (Math.abs(finalOffset) >= 72) {
      suppressClickUntil.current = Date.now() + 260;
      setExiting(true);
      setOffset(finalOffset < 0 ? -window.innerWidth * 1.25 : window.innerWidth * 1.25);
      window.setTimeout(() => {
        onSwipe();
        setOffset(0);
        setExiting(false);
        moved.current = false;
      }, 190);
      return;
    }
    if (Math.abs(finalOffset) < 8 && onTap && !exiting) onTap();
    if (moved.current) suppressClickUntil.current = Date.now() + 60;
    setOffset(0);
    window.setTimeout(() => { moved.current = false; }, 0);
  };

  const handleClickCapture = (event) => {
    if (Date.now() < suppressClickUntil.current || exiting) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  const intensity = Math.min(Math.abs(offset) / 72, 1);
  return (
    <div className="swipe-card-shell">
      <span className={`swipe-action swipe-action--right ${offset < 0 ? 'is-visible' : ''}`} style={{ opacity: offset < 0 ? intensity : 0 }}>← {action}</span>
      <span className={`swipe-action swipe-action--left ${offset > 0 ? 'is-visible' : ''}`} style={{ opacity: offset > 0 ? intensity : 0 }}>{action} →</span>
      <div
        className={`swipe-card ${exiting ? 'is-exiting' : ''}`}
        style={{ transform: `translateX(${offset}px) rotate(${offset * 0.035}deg)` }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => setOffset(0)}
        onClickCapture={handleClickCapture}
      >
        {children}
      </div>
    </div>
  );
}

function CleanFaceDownCard({ card, theme, onFlip }) {
  return (
    <button type="button" className="clean-card clean-card--back" data-card-id={card.id} onClick={(event) => { if (event.detail === 0) onFlip(); }}>
      <span className="clean-card__corner">THE FORGE</span>
      <span className="clean-card__number">?</span>
      <div className="clean-card__subject">
        <PixelIcon theme={theme} />
        <span>TOPIC</span>
        <strong>{theme.name}</strong>
      </div>
      <span className="clean-card__hint">TAP TO REVEAL</span>
    </button>
  );
}

function CleanRevealedCard({ card, theme, onNext }) {
  const footerCopy = {
    question: 'take your time with it',
    choice: 'choose, then explain why',
    challenge: 'do it together',
  }[card.type];

  return (
    <article className="clean-card clean-card--front" data-card-id={card.id}>
      <header>
        <span><PixelIcon theme={theme} /> {theme.name}</span>
        <span>{CARD_TYPES[card.type]}</span>
      </header>
      <p>{card.text}</p>
      <footer>
        <span>{footerCopy}</span>
        <button type="button" onClick={onNext}>NEXT CARD →</button>
      </footer>
    </article>
  );
}

function PixelIcon({ theme, selected = true }) {
  return <span className={`pixel-icon ${selected ? '' : 'pixel-icon--off'}`}>{theme.icon}</span>;
}

function ThemeButtons({ activeThemes, toggleTheme }) {
  return (
    <div className="theme-buttons">
      {TOPICS.map((theme) => {
        const selected = activeThemes.includes(theme.id);
        return (
          <button
            type="button"
            className={`theme-toggle ${selected ? 'is-active' : ''}`}
            aria-pressed={selected}
            key={theme.id}
            onClick={() => toggleTheme(theme.id)}
          >
            <PixelIcon theme={theme} selected={selected} />
            <span>{theme.name}</span>
            {theme.optional && <small>18+</small>}
          </button>
        );
      })}
    </div>
  );
}

export default function CardDeckPrototype() {
  const deck = useDeckState();
  const [filtersOpen, setFiltersOpen] = useState(false);

  return (
    <main className="prototype variant-a">
      <header className="clean-header">
        <div>
          <span className="clean-header__mark">TF</span>
          <strong>THE FORGE</strong>
        </div>
        <button type="button" className="filter-button" onClick={() => setFiltersOpen(true)}>
          <span aria-hidden="true">☷</span> FILTERS <b>{deck.activeThemes.length}</b>
        </button>
      </header>

      <section className="clean-deck-stage">
        <div className="clean-deck">
          <div className="clean-card clean-card--stack clean-card--stack-three" />
          <div className="clean-card clean-card--stack clean-card--stack-two" />
          <div className="clean-card clean-card--stack clean-card--stack-one" />
          <SwipeableCard
            action={deck.flipped ? 'DISCARD' : 'SHUFFLE'}
            onSwipe={deck.flipped ? deck.discardCurrentCard : deck.sendCurrentCardToBack}
            onTap={deck.flipped ? undefined : () => deck.setFlipped(true)}
          >
            {deck.flipped ? (
              <CleanRevealedCard card={deck.card} theme={deck.theme} onNext={deck.discardCurrentCard} />
            ) : (
              <CleanFaceDownCard card={deck.card} theme={deck.theme} onFlip={() => deck.setFlipped(true)} />
            )}
          </SwipeableCard>
        </div>
        <p className="gesture-hint">
          <span>↔ SWIPE TO {deck.flipped ? 'DISCARD' : 'SHUFFLE'}</span>
          {!deck.flipped && <span>·</span>}
          {!deck.flipped && <span> TAP TO REVEAL</span>}
          <span>·</span>
          <span>{deck.cardsRemaining} LEFT</span>
        </p>
      </section>

      {filtersOpen && (
        <div className="filter-overlay" role="presentation" onClick={() => setFiltersOpen(false)}>
          <section className="filter-sheet" role="dialog" aria-modal="true" aria-label="Topic filters" onClick={(event) => event.stopPropagation()}>
            <div className="filter-sheet__handle" />
            <header>
              <div><small>WHAT CAN COME UP?</small><h2>Choose your topics</h2></div>
              <button type="button" aria-label="Close filters" onClick={() => setFiltersOpen(false)}>×</button>
            </header>
            <p>Cards stay random within your selection.</p>
            <ThemeButtons activeThemes={deck.activeThemes} toggleTheme={deck.toggleTheme} />
            <div className="filter-sheet__actions">
              <button type="button" onClick={deck.enableAllThemes}>SELECT ALL</button>
              <button type="button" className="primary" onClick={() => setFiltersOpen(false)}>DONE · {deck.activeThemes.length} ACTIVE</button>
            </div>
          </section>
        </div>
      )}
    </main>
  );
}
