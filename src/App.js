import React from 'react'
import Quiz from './components/Quiz'
import Start from './components/Start'
import Result from './components/Result'
import './App.css'
import { QuizProvider } from './context/quizcontext'
export default function App() {
  
  return (
    <div className="container">
      <QuizProvider>
      <Start/>
      <Quiz/>
      <Result/>
      </QuizProvider>
    </div>
  )
}
