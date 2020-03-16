import React from 'react'

export default function Snake(props) {
    const snake = props.cells.map((cell, i) => {
        const style = {
            top:  cell.x * 10,
            left: cell.y * 10
        }
        return <div key={i} style={style} className="cell"></div>
    })
    return (
        <>
            {snake}
        </>
    )
}
