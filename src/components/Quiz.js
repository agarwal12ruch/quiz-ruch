import React, { useContext } from 'react'
import QuizContext from '../context/quizcontext'
const Quiz = () => {
  const {  showquiz, question, quiz, checkAnswer, corranswer, marked, quesindex, nextQuestion, showtheresult, score } = useContext(QuizContext);
  return (
    <section style={{ display: `${showquiz ? 'block' : 'none'}` }}>
      <div className="container1">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className='card p-4' style={{backgroundColor:"rgba(214, 45, 45, 0.1)",backdropFilter:"blur(10px)",boxShadow:" 2px 10px 30px rgba(0, 0, 0, 0.5);",border:" 2px solid rgba(255, 255, 255, 0.3)"}}>
              <div>
                <h5>{question?.question}</h5>
                <h5>{quiz.indexOf(question) + 1}/{quiz?.length}</h5>
                {/* indexOf finds the index of the question */}
              </div>
              <div>
                {/* use map */}

                {/* ? is very useful to avoid undefined errors */}
                {question?.options?.map((item,index)=>(
                  // a new button is created everytime for each option, item is the text of the option
                  <button key={index}    className={`option rounded btn ${corranswer === item && 'bg-success'}`} style={{margin:"7px",padding:"10px", backgroundColor:"purple",color:"white", fontFamily:"sans-serif",textAlign:"left"}} onClick={(event)=> checkAnswer(event,item)}>{item}</button>
                ))}
              </div>
              {
                (quesindex+1)!==quiz.length?
                <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={nextQuestion} disabled={!marked}>Next</button>:
                <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={showtheresult}  >Result</button>

              }

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Quiz;