import React, {useState, useCallback} from 'react'
import {buildGrid, findEmpties} from "../assets/grid"
import Cell from "./Cell"
import Options from "./Options"

const builtGrid = buildGrid(15, 15, 20)

export default function MineSweeper() {
    const [grid, setGrid] = useState(builtGrid)
    const [gameOver, setGameOver] = useState(false)
    const [options, setOptions] = useState({cols: 15, rows: 15, numberOfMines: 20})
    const [totalRevealed, setTotalRevealed] = useState(0)

    const handleOptionsChange = useCallback((options) => {
        setOptions(options)
        setGameOver(true)
    }, [])

    const handleMineClick = (x, y) => {
        if(totalRevealed > 0){
            alert("loooooooser")
            setGameOver(true)
            return false
        } else {
            handleReset(x, y)
            return true
        }
    }

    const handleReset = (x, y) => {
        setTotalRevealed(0)
        setGameOver(false)
        setGrid(buildGrid(options.cols, options.rows, options.numberOfMines, x, y))
    }

    const handleClick = (x, y) => {
        const gridCopy = [...grid.map(row => [...row])]
        setTotalRevealed(preTotal => preTotal + 1)
        console.log(gridCopy)
        findEmpties(x, y, gridCopy, setGrid)
        if(totalRevealed >= (options.cols * options.rows) - options.numberOfMines){
            if(!gameOver){
                alert("wiiiiner")
                setGameOver(true)
            }
        }
    }

    const mappedGrid = grid.map((col, x) => {
        return col.map((cell, y) => {
            if(gameOver) cell.isRevealed = true
            return <Cell    howMany={cell.numberOfSurrounding} 
                            hasMine={cell.hasMine} 
                            isRevealed={cell.isRevealed}
                            x={x} y={y}
                            handleClick={handleClick}
                            handleMineClick={handleMineClick}
                            gameOver={gameOver}
                            key={"x"+x+":y"+y}/>
        })
    })

    

    return (
        <div className="mine-container">
            <Options handleOptionsChange={handleOptionsChange}/> 
            <div className="mine-grid" 
                style={{gridTemplateColumns:`repeat(${options.cols}, 30px)`}}>
                {mappedGrid}
            </div>
            {gameOver && <button onClick={handleReset}>reset</button>}
        </div>
    )
}
