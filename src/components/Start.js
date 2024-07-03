import React from 'react'
import { useContext } from 'react';
import QuizContext from '../context/quizcontext'
const Start = () => {
  const { startquiz,
    showStart,
    showquiz,
   } = useContext(QuizContext);

  return (
    <section style={{ display: `${showStart ? 'block' : 'none'}` }}>
    <div className='container'>
      <h4 className='starta'>Test Your Knowledge</h4>
      <button  className='primarya' onClick={startquiz}>Start Quiz</button>
    </div>
    </section>
  )
}
export default Start