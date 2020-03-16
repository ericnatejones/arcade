import React, {useState} from 'react'
import {createSolution} from "../assets/masterMind"
import Guesses from './Guesses'
import Clues from './Clues'
import ColorSelector from './ColorSelector'

export default function MasterMind() {
    const [solution, setSolution] = useState(createSolution())
    const [guesses, setGuesses] = useState([])
    const [clues, setClues] = useState([])

    return (
        <>
        <div className="master-mind-board">
            <Guesses/>
            <Clues/>
        </div>
        <ColorSelector/>
        </>
    )
}
