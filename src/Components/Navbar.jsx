import React from 'react'
import {FaMoon } from 'react-icons/fa'
import '../index.css'


const Navbar = () => {
  return (
    <nav>
        <div className="navcontainer">
            <div className="logo">
                <h2>Trivia Question</h2>
            </div>
            <div className="darkmood">
                <FaMoon />
            </div>
        </div>
    </nav>
  )
}

export default Navbar