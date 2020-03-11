import React from 'react'

export default function Food(props) {
    const style = {
        top: props.x * 10,
        left: props.y * 10
    }
    return (
        <div style={style} className="cell">
            
        </div>
    )
}
