import React from 'react'

export default function Snake(props) {
    const snake = props.cells.map(cell => {
        const style = {
            top: props.x * 10,
            left: props.y * 10
        }
        return <div key={cell.y + " " + cell.x} style={style} className="cell"></div>
    })
    return (
        <>
            {snake}
        </>
    )
}
