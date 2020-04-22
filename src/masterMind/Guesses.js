import React, {useState} from 'react'
import Guess from './Guess';

export default function Guesses(props) {
    const [guesses, setGuesses] = useState(["red", "red", "red", "red"])

    const handleSubmit = () => {
        props.submitGuess(guesses)
    }

    const handleChange = (color, guess) => {
        setGuesses(prevGuesses => {
            return [
                ...prevGuesses.slice(0, parseInt(guess)), 
                color, 
                ...prevGuesses.slice(parseInt(guess) + 1, prevGuesses.length)
            ]
        })
    }

    const lockedInGuesses = props.guesses.map(guess => {
        return <div>{guess.map(color => <div 
            style={{backgroundColor: color}} className="option set">
        </div>)}</div>
    })

    return (
        <div>
            {lockedInGuesses}
            <Guess onChange={handleChange} guess="0" color={guesses[0]}/>
            <Guess onChange={handleChange} guess="1" color={guesses[1]}/>
            <Guess onChange={handleChange} guess="2" color={guesses[2]}/>
            <Guess onChange={handleChange} guess="3" color={guesses[3]}/>
            <button onClick={handleSubmit}>guess</button>
        </div>
    )
}
