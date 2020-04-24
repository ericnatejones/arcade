import React from 'react'

export default function Clue(props) {
    const clues = props.clue.map(clue => {
        if(clue === "no clue"){
            return <div className="option set"></div>
        }
        return <div className="option set clue" style={{backgroundColor: clue}}></div>
    })
    return (
        <div>
            {clues}
        </div>
    )
}
