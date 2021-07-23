import React, {useState, useEffect} from 'react'
import {createSolution} from "../assets/masterMind"
import Guesses from './Guesses'
import Clues from './Clues'
import OpeningAnimation from './OpeningAnimation'

export default function MasterMind() {
    const [solution, setSolution] = useState(createSolution())
    const [guesses, setGuesses] = useState([])
    const [clues, setClues] = useState([])
    const [turns, setTurns] = useState(0)
    const [hasWon, setHasWon] = useState(false)

    useEffect(()=>{
        if(hasWon){
            alert("you won in " + turns + " turns")
            setSolution(createSolution())
            setClues([])
            setGuesses([])
            setTurns(0)
            setSolution(createSolution())
            setHasWon(false)
        }
    }, [hasWon, turns])

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
            const index = solutionCopy.indexOf(guessCopy[i])
            if(solutionCopy.includes(guessCopy[i]) && solutionCopy[index] !== "counted"){
                newClues.push("white")
                guessCopy[i] = "counted"
                solutionCopy[index] = "counted"
            }
            console.log(solutionCopy)
            console.log(guessCopy)
            console.log(newClues)
        }
        if(newClues.length === 0){
            newClues.push("no clue")
        }
        if(blacksNeededToWin === 0){
            setHasWon(true)
        }

        setClues(prevClues => [...prevClues, newClues])
        setGuesses(prevGuesses => [...prevGuesses, guess])
        setTurns(prevTurns => prevTurns + 1)
    }

    return (
        <>
            <OpeningAnimation/>
            <div className="master-mind-board">
                <Guesses submitGuess={handleSubmit} guesses={guesses}/>
                <Clues clues={clues}/>
            </div>
        </>
    )
}