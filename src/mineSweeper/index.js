import React, {useState, useCallback, useEffect} from 'react'
import { buildGrid, findEmpties, emptyGrid } from "../assets/grid"
import Cell from "./Cell"
import Options from "./Options"

const builtGrid = emptyGrid(15, 15, 20)

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
            handleReset()
            return true
        }
    }

    const handleReset = () => {
        setGameOver(false)
        setTotalRevealed(0)
        setGrid(builtGrid)
    }

    const handleClick = (x, y) => {
        if(totalRevealed === 0){
            buildGrid(options.cols, options.rows, options.numberOfMines, x, y, setGrid)
        } else {
            const gridCopy = [...grid.map(row => [...row])]
            console.log(gridCopy)
            findEmpties(x, y, gridCopy, setGrid)
            
        }
        if(!grid[x][y].isRevealed){         
            setTotalRevealed(preTotal => preTotal + 1)
        }
    }

    let totalCount = 0

    const mappedGrid = grid.map((col, x) => {
        return col.map((cell, y) => {
            let isRevealed = cell.isRevealed

            if(isRevealed){
                totalCount++
            }
            
            if(totalCount >= (options.cols * options.rows) - options.numberOfMines){
                if(!gameOver){
                    alert("wiiiiner")
                    setGameOver(true)
                }
            }

            if(gameOver) {
                isRevealed = true
            }

            return <Cell    howMany={cell.numberOfSurrounding} 
                            hasMine={cell.hasMine} 
                            isRevealed={isRevealed}
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
