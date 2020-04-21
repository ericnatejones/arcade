import React, {useState} from 'react'

export default function Guess(props) {
    const [isDroppedDown, setIsDroppedDown] =  useState(false)

    const colors = ["red", "purple", "blue", "green", "yellow", "orange", "black"]

    const options = colors.map(color => {
        return <div 
                onClick={()=>props.onChange(color, props.guess)} 
                style={{backgroundColor: color}} className="option">
            </div>
    })

    const handleClick = () => {
        setIsDroppedDown(prev => !prev)
    }

    const style = {
        backgroundColor: props.color,
    }

    const optionsContainerStyle = {
        display: isDroppedDown ? "block" : "none"

    }

    return (
        <div className="select" name="0" 
            onClick={handleClick}
            style={style}>
            <div style={optionsContainerStyle}>{options}</div>
        </div>
    )
}
