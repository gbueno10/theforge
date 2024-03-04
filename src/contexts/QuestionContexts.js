// QuestionContext.jsx
import React, { createContext, useContext, useState } from 'react';
import _ from 'lodash';  // Import the entire lodash library

const QuestionContext = createContext();

export const useQuestionContext = () => {
  return useContext(QuestionContext);
};

export const QuestionProvider = ({ children }) => {
  const initialQuestions = [
    [
      
    {
        "question": "If you could choose anyone in the world, who would you want as a guest for dinner?",
        "level": 1
    },
    {
        "question": "Would you like to be famous? How?",
        "level": 1
    },
    {
        "question": "Before making a phone call, do you usually rehearse what you're going to say? Why?",
        "level": 1
    },
    {
        "question": "What makes a 'perfect' day for you?",
        "level": 2
    },
    {
        "question": "When was the last time you sang alone? And to someone else?",
        "level": 1
    },
    {
        "question": "If you were to live to 90 years old and could choose between keeping your body or mind at 30 for the last 60 years of your life, which would you choose?",
        "level": 2
    },
    {
        "question": "Do you have any premonition about how you will die?",
        "level": 3
    },
    {
        "question": "Name three things you and your partner seem to have in common.",
        "level": 1
    },
    {
        "question": "What are you most grateful for in your life?",
        "level": 2
    },
    {
        "question": "If you could change something about the way you were raised, what would it be?",
        "level": 2
    },
    {
        "question": "Tell your partner, in four minutes, the story of your life in as much detail as possible.",
        "level": 3
    },
    {
        "question": "If you could wake up tomorrow with a new quality or skill, what would it be?",
        "level": 2
    },
    {
        "question": "If a crystal ball could reveal the truth about yourself, your life, your future, or anything else, what would you want to know?",
        "level": 3
    },
    {
        "question": "Is there something you've been dreaming of doing for a long time? Why haven't you done it yet?",
        "level": 2
    },
    {
        "question": "What is the greatest accomplishment of your life?",
        "level": 2
    },
    {
        "question": "What do you value most in a friendship?",
        "level": 2
    },
    {
        "question": "What is your most precious memory?",
        "level": 2
    },
    {
        "question": "What is your most terrible memory?",
        "level": 3
    },
    {
        "question": "If you knew you would die suddenly in a year, would you change anything about how you're living now? Why?",
        "level": 3
    },
    {
        "question": "What does friendship mean to you?",
        "level": 1
    },
    {
        "question": "Alternating answers, name five positive qualities of your partner. Mention a total of five characteristics.",
        "level": 1
    },
    {
        "question": "How do you feel about your relationship with your mother?",
        "level": 2
    },
    {
        "question": "Complete the sentence: 'I wish I had someone with whom I could share...'",
        "level": 2
    },
    {
        "question": "If you were to become close friends with your partner, share what would be important for him or her to know.",
        "level": 1
    },
    {
        "question": "Tell your partner what you like about them; be very honest this time, saying things you wouldn't say to someone you just met.",
        "level": 1
    },
    {
        "question": "Share with your partner an embarrassing moment from your life.",
        "level": 3
    },
    {
        "question": "When was the last time you cried in front of another person? And alone?",
        "level": 2
    },
    {
        "question": "Tell your partner something you already like about them.",
        "level": 1
    },
    {
        "question": "If you were to die tonight without the opportunity to communicate with anyone, what would you regret not having said? Why haven't you said this to that person yet?",
        "level": 3
    },
    {
        "question": "Your house, with everything you own, catches fire. After saving all people and animals, you have time for one final, safe round to save any other object. What would it be? Why?",
        "level": 1
    },
    {
        "question": "Of all the people in your family, whose death would you consider most devastating?",
        "level": 3
    }
]
,
  ];

  const [questions, setQuestions] = useState(initialQuestions);

  const getRandomQuestion = (level) => {
    const filteredQuestions = questions[0].filter((question) => question.level === level);
    return _.sample(filteredQuestions) || {};  
  };

  return (
    <QuestionContext.Provider value={{ questions, setQuestions, getRandomQuestion }}>
      {children}
    </QuestionContext.Provider>
  );
};
