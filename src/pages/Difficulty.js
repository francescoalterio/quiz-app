import React from 'react';
import './styles/Difficulty.css'

const Difficulty = ({selectDifficulty}) => {
  return (
    <>
      <h1>SELECT A DIFFICULTY</h1>
      <div className='button-difficulty-box'>
        <button onClick={(e) => selectDifficulty(e.target.innerHTML.toLowerCase())} className='difficulty-btn'>EASY</button>
        <button onClick={(e) => selectDifficulty(e.target.innerHTML.toLowerCase())} className='difficulty-btn'>MEDIUM</button>
        <button onClick={(e) => selectDifficulty(e.target.innerHTML.toLowerCase())} className='difficulty-btn'>HARD</button>
      </div>
    </>
  );
};

export default Difficulty;
