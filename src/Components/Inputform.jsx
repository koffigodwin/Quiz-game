import React from 'react'
import '../index.css'
import { useGlobal } from './Content'


const Inputform = () => {
  const {setcategory, setdifficult} = useGlobal()

  const getcategory = (e) =>{
   e.preventDefault()
   const  valuess = e.target.value
    setcategory(Number(valuess))
  }
  const getdificulty = (e) =>{
    e.preventDefault()
   const   valuess = e.target.value
    setdifficult(valuess)
  }
  return (
    <form >
        <div className="first">
        <label htmlFor="name">select the question category :</label>
        <select onClick={getcategory}>
            <option value="9">general knowledge</option>
            <option value="18">computer</option>
            <option value="21">sports</option>
            <option value="12">music</option>
            <option value="11">films</option>
            <option value="24">politics</option>
            <option value="27">animals</option>
            <option value="10">Books</option>
            <option value="22">geography</option>
            <option value="23">history</option>
         </select>
        </div>

        <div className="second">
        <label htmlFor="level"> select the level of choice :</label>
         <select onClick={getdificulty}>
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
         </select>
        </div>
    </form>
  )
}

export default Inputform