import React from 'react'
import './styles/Answer.css'

const Answer = ({content, correct, handleSelect, response}) => {

  if(!response) {
    return <button className='answer-btn' onClick={() => handleSelect(content)}>{content}</button>
  } else {
    return correct 
    ? <button disabled className='answer-btn correct' onClick={() => handleSelect(content)}>{content}</button>
    :<button disabled className='answer-btn incorrect' onClick={() => handleSelect(content)}>{content}</button>
  }
  
  
}

export default Answer