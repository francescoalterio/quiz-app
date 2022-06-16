import React from 'react';
import './styles/Final.css';

const Final = ({ corrects, handleAgain }) => {
  return (
    <div>
      <h1>Final</h1>
      <div className='box-final'>
        <p className="corrects">{corrects} corrects</p>
        <button className='again-btn' onClick={handleAgain}>Play again</button>
      </div>
    </div>
  );
};

export default Final;
