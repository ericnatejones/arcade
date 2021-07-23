import React, {useState} from 'react'

export default function Guess(props) {
    const [isDroppedDown, setIsDroppedDown] =  useState(false)

    const colors = ["red", "purple", "blue", "green", "yellow", "orange", "black"]

    const options = colors.map((color, i) => {
        return <div 
                key={i}
                onClick={()=>props.onChange(color, props.guess)} 
                style={{backgroundColor: color}} className="option">
            </div>
    })

    const handleClick = () => {
        setIsDroppedDown(prev => !prev)
    }

    const style = {
        backgroundColor: props.color,
        borderShadow: "5%",
        boxShadow: "2px 5px 5px black"
    }

    const optionsContainerStyle = {
        display: isDroppedDown ? "block" : "none"

    }

    return (
        <div className="select spacer" name="0" 
            onClick={handleClick}
            style={style}>
            <div style={optionsContainerStyle}>{options}</div>
        </div>
    )
}
