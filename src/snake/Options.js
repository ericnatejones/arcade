import React from 'react'

export default function Options(props) {
    const speedRt = Math.floor(Math.sqrt(props.speed))
    console.log(speedRt)
    return (
        <div>
            <div>
                Speed:
                <input type="range" min="3" max="100"
                className="reversedRange" value={props.speed}
                onChange={(e)=>props.setSpeed(e.target.value)}/>
            </div>
            <div>
                5 : <input type="range" min="5" value={props.cols}
                onChange={(e)=>props.setCols(e.target.value)}/>
                : 100
            </div>
            <div>
                5 : <input type="range" min="5" value={props.rows}
                onChange={(e)=>props.setRows(e.target.value)}/> 
                : 100
            </div>
        </div>
    )
}



