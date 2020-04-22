import React, {useState, useEffect} from 'react'
import {createSolution} from "../assets/masterMind"
import Guesses from './Guesses'
import Clues from './Clues'

export default function MasterMind() {
    const [solution, setSolution] = useState(createSolution())
    const [guesses, setGuesses] = useState([])
    const [clues, setClues] = useState([])

    useEffect(()=>{
        setSolution(createSolution)
    }, [])

    const handleSubmit = (guess) => {
        console.log(guess)
        const newClues = []
       
        for(let i = 0; i < guess.length; i++){
           
            if(guess[i] === solution[i]){
                newClues.push("black")
                
            } else if(solution.includes(guess[i]) && guess[i] !== solution[i]){
                newClues.push("white")
            }
           
            console.log(newClues)

        }
        clues.sort()
        setClues(prevClues => [...prevClues, newClues])
        setGuesses(prevGuesses => [...prevGuesses, guess])
    }

    return (
        <>
        <div className="master-mind-board">
            <Guesses submitGuess={handleSubmit} guesses={guesses}/>
            <Clues/>
        </div>
        </>
    )
}
