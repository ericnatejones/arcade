import React, {useState} from 'react'
import { useEffect } from 'react';

export default function Options({handleOptionsChange}) {
    const [cols, setCols] = useState(15)
    const [rows, setRows] = useState(15)
    const [numberOfMines, setNumberOfMines] = useState(20)
    const [isHidden, setIsHidden] = useState(true)

    useEffect(()=>{
        console.log("child")
        handleOptionsChange({cols, rows, numberOfMines})
    }, [cols, rows, numberOfMines, handleOptionsChange])

    const handleColsChange = (e) => {
        const value = Number(e.target.value)
        setCols(value)
        setNumberOfMines(prevMines => {
            if(prevMines >= value * rows){
                return value * (rows - 1)
            } else {
                return prevMines
            }
        })
    }

    const handleRowsChange = (e) => {
        const value = Number(e.target.value)
        setRows(value)
        setNumberOfMines(prevMines => {
            if(prevMines >= value * cols){
                return value * (cols - 1)
            } else {
                return prevMines
            }
        })    
    }

    const handleNumberOfMinesChange = (e) => {
        setNumberOfMines(Number(e.target.value))
    }
    return (
        <>
            {isHidden ? 
            <button onClick={()=>setIsHidden(false)}>show options</button> :
            <>
            <div>
                <label>
                    <div>Columns: {cols}</div>
                    4
                    <input value={cols} type="range" min="4"
                        onChange={handleColsChange}/>
                    100
                </label>
                
            </div>
            <div>
                <label>
                <div>Rows: {rows}</div>
                    4
                    <input value={rows} type="range" min="4"
                        onChange={handleRowsChange}/>
                    100
                </label>
            </div> 
            <div>  
                <label>
                <div>Number of Mines: {numberOfMines}</div>
                    1
                    <input max={((cols -1) * (rows -1)) + 5} min="1"
                    value={numberOfMines} type="range" 
                    onChange={handleNumberOfMinesChange}/>
                    {((cols -1) * (rows - 1)) + 5}
                </label>
            </div>     
            <button onClick={()=>setIsHidden(true)}>Hide Options</button>
            </>}
        </>
    )
}
