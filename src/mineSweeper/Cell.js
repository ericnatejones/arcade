import React, {useState, useEffect} from 'react'

export default function Cell(props) {
    const [status, setStatus] = useState("")

    useEffect(()=>{
        setStatus("")
    }, [props.gameOver])
    
    const handleRightClick = (e) => {
        e.preventDefault()
        setStatus(prevStatus => {
            if(prevStatus === ""){
                return "!"
            } else if(prevStatus === "!"){
                return "?"
            } else {
                return ""
            }
        })
    }

    const handleClick = () => {
        if(props.hasMine){
            const isFirst = props.handleMineClick(props.x, props.y)
            if(isFirst){
                props.handleClick(props.x, props.y)
            }
        } else {
            props.handleClick(props.x, props.y)
        }
    }

    const hasMine = props.hasMine ? "X" : false

    return (
        <div onClick={handleClick}>
            {
                props.isRevealed ? 
                <span>
                    {props.hasMine && hasMine}
                    {!props.hasMine && props.howMany}
                </span> : 
                <button onContextMenu={handleRightClick}>{status}</button>
            }
        </div>
    )
}
