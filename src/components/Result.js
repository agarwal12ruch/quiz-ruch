import React, { useContext } from "react";
import  QuizContext  from "../context/quizcontext";

const Result = () => {
  const { startagain,score,showresult } = useContext(QuizContext);
  return (
    <section style={{ display: `${showresult ? 'block' : 'none'}` }}>
    <div className="container">
      <h3> Result</h3>
      <h2> Your score is {score} out of 5</h2>
      <button onClick={startagain} className="btn py-2 px-4 btn-light fw-bold d-inline"> Play Again</button>
    </div>
    </section>
  )
}
export default Result;
