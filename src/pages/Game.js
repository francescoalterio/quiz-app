import React, { useState, useEffect } from 'react';
import he from 'he'
import Answer from '../components/Answer'
import './styles/Game.css';

const Game = ({ difficulty, category, setScreen, corrects, setCorrects }) => {
  const [questions, setQuestions] = useState();
  const [question, setQuestion] = useState();
  const [questionPosition, setQuestionPosition] = useState(0);
  const [response, setResponse] = useState('')

  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=20&category=${category}&difficulty=${difficulty}`;
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        const resultQuestions = result.results;
        console.log(resultQuestions);
        const mapedQuestions = resultQuestions.map((question) => {
          const newObject = {
            ...question,
            desordered: [
              ...question.incorrect_answers,
              question.correct_answer,
            ].sort(() => Math.random() - 0.5),
          };
          return { ...newObject };
        });

        setQuestions(mapedQuestions);
        setQuestion(mapedQuestions[0]);
      });
  }, []);

  useEffect(() => {
    if(questions) {
      questions[questionPosition] ? setQuestion(questions[questionPosition]) : setScreen('final')
    }
  }, [questionPosition, questions]);

  useEffect(() => {
    if(response) {
      const comparedResult = response === question.correct_answer
      if(comparedResult) setCorrects(corrects + 1)
      setTimeout(() => {
        setQuestionPosition(questionPosition + 1)
        setResponse('')
      }, 3000)
    }
  }, [response])

  const handleSelect = (answerSelected) => {
    setResponse(answerSelected)
  }


  return question ? (
    <div>
      <h1>Game</h1>
      <div className="game-box">
        <p className="question">{he.decode(question.question)}</p>
        <div className='answer-box'>
          {question.desordered.map((answer) => <Answer content={he.decode(answer)} correct={answer === question.correct_answer} handleSelect={handleSelect} response={response}/>)}
        </div>
      </div>
    </div>
  ) : undefined;
};

export default Game;
