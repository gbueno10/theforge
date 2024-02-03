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
      { question: "Se você pudesse escolher qualquer pessoa do mundo, quem você iria querer como convidado para um jantar?", level: 1 },
      { question: "Você gostaria de ser famoso? De que forma?", level: 1 },
      { question: "Antes de fazer um telefonema, você costuma ensaiar o que vai dizer? Por quê?", level: 1 },
      { question: "O que constitui um dia “perfeito” para você?", level: 2 },
      { question: "Quando foi a última vez que você cantou sozinho? E para outra pessoa?", level: 1 },
      { question: "Se você viver até os 90 anos e se pudesse escolher entre manter o corpo ou a mente dos seus 30 pelos últimos 60 anos de sua vida, qual você escolheria?", level: 2 },
      { question: "Você tem algum pressentimento sobre como você vai morrer?", level: 3 },
      { question: "Cite três coisas que você e seu (sua) parceiro(a) parecem ter em comum.", level: 1 },
      { question: "Pelo que você se sente mais grato em sua vida?", level: 2 },
      { question: "Se você pudesse mudar algo sobre a forma de como foi criado, o que seria?", level: 2 },
      { question: "Conte a seu (sua) parceiro(a), em quatro minutos, a história de sua vida da maneira mais detalhada possível.", level: 3 },
      { question: "Se você pudesse acordar amanhã com uma qualidade ou habilidade nova, qual seria?", level: 2 },
    
      { question: "Se uma bola de cristal pudesse revelar a verdade sobre você mesmo, sua vida, seu futuro ou qualquer outra coisa, o que você gostaria de saber?", level: 3 },
      { question: "Há algo que você sonha em fazer há muito tempo? Por que ainda não o fez?", level: 2 },
      { question: "Qual é a maior realização da sua vida?", level: 2 },
      { question: "O que você mais valoriza em uma amizade?", level: 2 },
      { question: "Qual é a sua lembrança mais preciosa?", level: 2 },
      { question: "Qual é a sua lembrança mais terrível?", level: 3 },
      { question: "Se você soubesse que em um ano você irá morrer subitamente, você mudaria alguma coisa sobre a forma de como está vivendo agora? Por quê?", level: 3 },
      { question: "O que a amizade significa para você?", level: 1 },
      { question: "Alternando as respostas, diga cinco coisas que você considera características positivas do seu (sua) parceiro(a). Mencione um total de cinco características.", level: 1 },
      { question: "Como você se sente sobre o relacionamento com a sua mãe?", level: 2 },
    
      { question: "Complete a frase: 'Eu gostaria de ter alguém com quem eu pudesse dividir...'", level: 2 },
      { question: "Se você fosse se tornar um amigo próximo de seu (sua) parceiro(a), compartilhe o que seria importante que ele ou ela soubesse.", level: 1 },
      { question: "Diga a seu (sua) parceiro(a) o que você gosta nele; seja bem honesto desta vez, dizendo coisas que você não diria a alguém que tivesse acabado de conhecer.", level: 1 },
      { question: "Compartilhe com seu (sua) parceiro(a) um momento embaraçoso de sua vida.", level: 3 },
      { question: "Quando foi a última vez que você chorou na frente de outra pessoa? E sozinho?", level: 2 },
      { question: "Diga a seu (sua) parceiro(a) algo que você já gosta nele(a).", level: 1 },
      { question: "Se você fosse morrer esta noite sem ter a oportunidade de se comunicar com ninguém, do que você se arrependeria de não ter dito? Por que você ainda não disse isso a essa pessoa?", level: 3 },
      { question: "Sua casa, com tudo o que você possui, pega fogo. Depois de salvar todas as pessoas e animais, você tem tempo para uma volta final, com segurança, para salvar qualquer outro objeto. O que seria? Por quê?", level: 1 },
      { question: "De todas as pessoas de sua família, a morte de quem você consideraria mais arrasadora?", level: 3 },


    ],
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
