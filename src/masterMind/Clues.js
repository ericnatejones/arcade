import React from 'react'
import Clue from './Clue';

export default function Clues(props) {
    const clues = props.clues.map((clue, i) => <Clue key={i} clue={clue}/>)
    return (
        <div>
            {clues}
        </div>
    )
}
