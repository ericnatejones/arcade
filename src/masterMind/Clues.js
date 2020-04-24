import React from 'react'
import Clue from './Clue';

export default function Clues(props) {
    const clues = props.clues.map(clue => <Clue clue={clue}/>)
    return (
        <div>
            {clues}
        </div>
    )
}
