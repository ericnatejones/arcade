import React from 'react'

export default function Food(props) {
    const style = {
        top: props.food.x * 10,
        left: props.food.y * 10,
        zIndex: "-1",
        backgroundColor: "red"
    }
    return (
        <div style={style} className="cell">
            
        </div>
    )
}
