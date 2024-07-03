import React from 'react';
import {  useState, useEffect, createContext } from 'react';
const QuizContext = createContext({}); // created a context
// used to provide states and functions to components in application
export const QuizProvider = ({ children }) => {
  // quizProvider is my context provider.
  const [quiz, setQuiz] = useState([]) // array of quiz question
  const [question, setQuestion] = useState({}) //current question been displayed
  const [quesindex, setQuesindex] = useState(0);
  const [corranswer, setCorranswer] = useState('');
  const [marked, setMarked] = useState('');
  const [score, setScore] = useState(0);

  // display controllers
  const [showStart, setShowStart] = useState(true);
  const [showquiz, setShowquiz] = useState(false);
  const [showresult, setShowresult] = useState(false);

  useEffect(() => {
    fetch('ques.json')
      .then(res => res.json())
      .then(data => setQuiz(data));
  }, []);
  useEffect(() => {
    if (quesindex < quiz.length) {
      setQuestion(quiz[quesindex]);
    }
  }, [quiz, quesindex]);

  const startquiz = () => {
    setShowStart(false);
    setShowquiz(true);
  };

  const checkAnswer = (event, selected) => {
    if (!marked) { // if the option is selected then 
      setCorranswer(question.answer);
      setMarked(selected)
    }
    if (selected === question.answer) {
      event.target.classList.add("bg-success");
      setScore(score + 1);
    }
    else {
      event.target.classList.add("bg-danger");
    }
  }
  const nextQuestion = () => {
    setCorranswer('');
    setMarked('')
    const wrong = document.querySelector("button.bg-danger");
    wrong?.classList.remove("bg-danger") // ? throws an error is wrong is null or undefined
    const right = document.querySelector("button.bg-success")
    right?.classList.remove("bg-success");
    setQuesindex(quesindex + 1);
  }
  const showtheresult = () => {
    setShowresult(true);
    setShowquiz(false);

  }
  const startagain = () => {
    setShowStart(false);
    setShowresult(false)
    setShowquiz(true);
    setCorranswer('');
    setMarked('')
    setQuesindex(0);
    setScore(0);
  }
  return (
    <QuizContext.Provider value={{
      startquiz,
      showStart,
      showquiz,
      question,
      quiz,
      checkAnswer,
      corranswer,
      marked,
      quesindex,
      nextQuestion,
      startagain,
      showtheresult,
      score,
      showresult
    }}>
    
    {children}

    </QuizContext.Provider>
  )
  // Wraps the children components and provides the quiz state and functions via context.


}


export default QuizContext;


