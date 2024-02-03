// LevelIndicator.jsx
import React, { useState } from 'react';

const LevelIndicator = ({ onLevelChange }) => {
  const [isSliderVisible, setSliderVisibility] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState(1);

  const handleToggleSlider = () => {
    setSliderVisibility(!isSliderVisible);
  };

  const handleLevelChange = (newLevel) => {
    setSelectedLevel(newLevel);
    onLevelChange(newLevel); // Chama o callback para informar o nível selecionado ao componente pai
  };

  return (
    <div className="level-indicator-container">
      <div
        className={`level-indicator-circle ${isSliderVisible ? 'slider-active' : ''}`}
        onClick={handleToggleSlider}
      >
        {isSliderVisible ? (
          <input
            type="range"
            min="1"
            max="3"  // Assumindo que você tem 3 níveis
            value={selectedLevel}
            onChange={(e) => handleLevelChange(parseInt(e.target.value, 10))}
          />
        ) : (
          <span>{selectedLevel}</span>
        )}
      </div>
    </div>
  );
};

export default LevelIndicator;
