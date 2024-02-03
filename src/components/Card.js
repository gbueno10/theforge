// Card.jsx
import React, { useState, useEffect } from 'react';
import { useQuestionContext } from '../contexts/QuestionContexts';
import LevelIndicator from './LevelIndicator';

const Card = () => {
  const { getRandomQuestion } = useQuestionContext();
  const [selectedLevel, setSelectedLevel] = useState(1);
  const [randomQuestion, setRandomQuestion] = useState({});

  const handleLevelChange = (newLevel) => {
    setSelectedLevel(newLevel);
  };

  const handleRandomQuestion = () => {
    console.log("Clicou")
    const newRandomQuestion = getRandomQuestion(selectedLevel);
    setRandomQuestion(newRandomQuestion);
  };

  useEffect(() => {
    // Atualiza a pergunta ao mudar o nível selecionado
    handleRandomQuestion();
  }, [selectedLevel]);

  const getBackgroundColor = () => {
    switch (selectedLevel) {
      case 1:
        return 'bg-green-500';
      case 2:
        return 'bg-yellow-500';
      case 3:
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <div className={`flex flex-col h-screen ${getBackgroundColor()}`}>
      {/* Topo do Card com LevelIndicator e botão para sortear nova pergunta */}
      <div className="text-white p-4 flex items-center justify-between">
        <p className="text-2xl font-bold text-center">theForge</p>
        <div className="flex items-center">
          <LevelIndicator onLevelChange={handleLevelChange} />
          <button className="ml-4 bg-gray-800 text-white px-4 py-2 rounded" onClick={handleRandomQuestion}>
            Sortear Nova Pergunta
          </button>
        </div>
      </div>

      {/* Meio do Card */}
      <div className="flex-1 bg-white rounded-t-lg p-6 shadow-md flex items-center justify-center">
        <div className="text-center">
          <p>{randomQuestion.question}</p>
        </div>
      </div>

      {/* Rodapé do Card */}
      <div className="text-white p-4">
        {/* Adicione o conteúdo do rodapé aqui se necessário */}
      </div>
    </div>
  );
};

export default Card;
