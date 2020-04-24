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
        console.log(solution)
        let blacksNeededToWin = 4
        const newClues = []
        const solutionCopy = [...solution]
        const guessCopy = [...guess]
        for(let i = 0; i < guess.length; i++){
            if(guessCopy[i] === solutionCopy[i]){
                newClues.push("black")
                solutionCopy[i] = "counted"
                guessCopy[i] = "counted"
                blacksNeededToWin--  
            } 
        }
        for(let i = 0; i < guessCopy.length; i++){
           if(solutionCopy.includes(guessCopy[i]) && solutionCopy[i] !== "counted"){
                newClues.push("white")
                guessCopy[i] = "counted"
                const index = solutionCopy.indexOf(guessCopy[i])
                solutionCopy[index] = "counted"
            }
            console.log(solutionCopy)
            console.log(guessCopy)
            console.log(newClues)
        }
        if(newClues.length === 0){
            newClues.push("no clue")
        }
        setClues(prevClues => [...prevClues, newClues])
        setGuesses(prevGuesses => [...prevGuesses, guess])
    }

    return (
        <>
        <div className="master-mind-board">
            <Guesses submitGuess={handleSubmit} guesses={guesses}/>
            <Clues clues={clues}/>
        </div>
        </>
    )
}
