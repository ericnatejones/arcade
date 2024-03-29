import React from 'react'

export default function Clue(props) {
    const clues = props.clue.map((clue, i) => {
        if(clue === "no clue"){
            return <div key={i} className="option set"></div>
        }
        return <div key={i} className="option set clue" style={{backgroundColor: clue}}></div>
    })
    return (
        <div>
            {clues}
        </div>
    )
}
