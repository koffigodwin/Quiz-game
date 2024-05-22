import React from 'react'
import '../index.css'

const AnswerQuestion = ({question , onGuessAnswer, index}) => {
    const correct = question.correct_answer
   
    const allAnswers = [correct,...question.incorrect_answers].sort((a,b) => a>b?-1:1)
  return (
    <div className='eachquestion'>
        <p> Q{index + 1} : {question.question}</p>
        <ul>
        {
           allAnswers.map(answer => <li  key={answer} >
            <button onClick={() => onGuessAnswer(answer)}>{answer}</button></li>)
        }
        </ul>
    </div>
  )
}

export default AnswerQuestion