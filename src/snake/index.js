import React, { useState, useEffect, useCallback } from 'react'
import {useInterval} from "../hooks/useInterval"
import Cell from './Cell'

export default function Snake() {
    const [head, setHead] = useState({x:0, y:3})
    const [food, setFood] = useState({x:4, y:2})
    const [tail, setTail] = useState([{x:0, y:2}, {x:0, y:1}, {x:0, y:0}])
    const [direction, setDirection] = useState("right")
    const [isHorizontal, setIsHorizontal] = useState(true)
    const [cols] = useState(70)
    const [rows] = useState(70)

    useInterval(() => {
        tick()
    }, 10)

    useEffect(() => {
        setTail(prevTail => [head, ...prevTail.slice(0, prevTail.length - 1)])
    }, [head])

    const handleKeyPress = useCallback(e => {
        console.log(direction)
        if(isHorizontal){
            if(e.keyCode === 37){
                setDirection("left")
            } else if(e.keyCode === 39){
                setDirection("right")
            } 
        } else {
            if(e.keyCode === 38){
                setDirection("up")
            } else if(e.keyCode === 40){
                setDirection("down")
            }
        }
    }, [direction, isHorizontal])

    useEffect(() => {   
        console.log("once")     
        window.addEventListener("keydown", handleKeyPress)
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [handleKeyPress])

    const tick = () => {
        console.log("tick")
        if(head.x === food.x && head.y === food.y){
            setTail(prevTail => [...prevTail, prevTail[prevTail.length - 1]])
            const tryFoodSet = {
                x: Math.floor(Math.random() * (cols - 1)),
                y: Math.floor(Math.random() * (rows - 1))
            }
            while(tail.some(({x, y}) => tryFoodSet.x === x && tryFoodSet.y === y)){
                tryFoodSet.x = Math.floor(Math.random() * (cols - 1))
                tryFoodSet.y = Math.floor(Math.random() * (rows - 1))
            }
            setFood(tryFoodSet)
        }
        if(head.x >= cols || head.x < 0 || head.y >= rows || head.y < 0){
            setHead({x:0, y:3})
            setFood({x:5, y:5})
            setTail([{x:0, y:3}, {x:0, y:2}, {x:0, y:1  }])
            setDirection("right")
            setIsHorizontal(true)
            return
        }
        switch(direction){
            case "down":
                setHead(({x, y}) => ({x:x+1, y}))
                setIsHorizontal(true)
                break
            case "up":
                setHead(({x, y}) => ({x:x-1, y}))
                setIsHorizontal(true)
                break
            case "right":
                setHead(({x, y}) => ({x, y: y + 1}))
                setIsHorizontal(false)
                break
            case "left":
                setHead(({x, y}) => ({x, y: y - 1}))
                setIsHorizontal(false)
                break
            default:
                console.log("y")
                break
        }
        
    }

    const grid = []

    for(let i = 0; i < cols; i++){
        const newColumn = []
        for(let j  = 0; j < rows; j++){
            let cellType = "blank"
            const isTail = tail.some(({x, y}) => x === i && y === j)
            if(head.x === i && head.y === j){
                cellType = "head"
            } else if (food.x === i && food.y === j){
                cellType = "food"
            } else if (isTail){
                cellType = "tail"
            }   
            
            newColumn.push(<Cell key={i+j} cellType={cellType}/>)
        }
        grid.push(newColumn)
    }

    const style = {
        gridTemplateColumns: `repeat(${cols}, 10px)`,
        gridTemplateRows: `repeat(${rows}, 10px)`
    }

    return (
        <div className="flex-container">
            <div className="snake-board" style={style}>
                {grid}
            </div>
        </div>
    )
}


