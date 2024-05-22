import React, { useEffect, useState } from 'react'
import '../index.css'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'
import AnswerQuestion from './AnswerQuestion'
import { useGlobal } from './Content'



const Question = () => {

   const {category, difficult} = useGlobal()
    const [score, setscore] = useState(0)
    const [currentindex, setcurrentindex] = useState(0)
    const Url =  'https://opentdb.com/api.php?amount=15'

    const {data, isLoading, error} = useQuery({
        queryKey : ['travia', category, difficult],
        queryFn : async () =>{
          const fetchdata = await axios.get(`${Url}&category=${category}&difficulty=${difficult}&type=multiple`)
          const response = fetchdata.data
          return response
        }
       })

   if (isLoading) {
    return (
        <div className='question'>
            <div className='loading'>
            </div>
        </div>
    )
   }
const currentquestion = data.results[currentindex]

 
  const handguessAnswer = (guess) =>{
    if (guess == currentquestion.correct_answer) {
        setscore(score + 1)
    }
    setcurrentindex(currentindex + 1)
  }
  const resetQuiz = () =>{
    setscore(0);
    setcurrentindex(0);
   
  }
  if (currentindex == data.results.length) {
    return(
        <div className='question'>
           <h1 className='score'>You score {score} out {data.results.length}</h1>
           <p className="play-again">Play the quiz game again !</p>
           <button className='btn-reset' onClick={resetQuiz}>Reset</button>
        </div>
    )
  }
  return (
    <div className='question'>
       <AnswerQuestion question={currentquestion} 
         index={currentindex} onGuessAnswer={handguessAnswer}
       />

    </div>
  )
  
}

export default Question