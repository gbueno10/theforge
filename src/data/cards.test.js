import { CARDS, CARD_TYPES, TOPICS } from './cards';

describe('card library', () => {
  test('contains 90 uniquely identified cards', () => {
    expect(CARDS).toHaveLength(90);
    expect(new Set(CARDS.map((card) => card.id)).size).toBe(CARDS.length);
    expect(new Set(CARDS.map((card) => card.text)).size).toBe(CARDS.length);
  });

  test('balances every topic across all three intensities', () => {
    TOPICS.forEach((topic) => {
      const topicCards = CARDS.filter((card) => card.topic === topic.id);
      expect(topicCards).toHaveLength(15);
      ['light', 'personal', 'deep'].forEach((intensity) => {
        expect(topicCards.filter((card) => card.intensity === intensity)).toHaveLength(5);
      });
    });
  });

  test('uses only declared topics and card types', () => {
    const topicIds = new Set(TOPICS.map((topic) => topic.id));
    CARDS.forEach((card) => {
      expect(topicIds.has(card.topic)).toBe(true);
      expect(CARD_TYPES[card.type]).toBeDefined();
    });
  });
});
