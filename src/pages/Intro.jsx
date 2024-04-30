import React from "react"
import { useNavigate } from 'react-router-dom'
import viteLogo from '/vite.svg'

export default function Intro(){
    const navigate = useNavigate()

    function startGame(){
        navigate("./questions")
       } 

    return(
    <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <h1>Quizzler</h1>
        <h3>Your movie trivia app</h3>
    
        <div className="card">
            <button id="start-btn" onClick={startGame}>
            Start Game
            </button>
        </div>
    </div>
    )
}