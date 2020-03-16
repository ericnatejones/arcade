import React, { useState, useEffect, useCallback } from 'react'
import {useInterval} from "../hooks/useInterval"
import Food from './Food'
import Snake from './Snake'
import Options from './Options'
import Grid from './Grid'

export default function SnakeContainer(props) {
    const [head, setHead] = useState({x:0, y:3})
    const [food, setFood] = useState({x:4, y:2})
    const [tail, setTail] = useState([{x:0, y:2}, {x:0, y:1}, {x:0, y:0}])
    const [direction, setDirection] = useState("right")
    const [isHorizontal, setIsHorizontal] = useState(true)
    const [cols, setCols] = useState(50)
    const [rows, setRows] = useState(50)
    const [speed, setSpeed] = useState(2)


    useInterval(() => {
        tick()
    }, speed^2)

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

    const reset = () => {
        setHead({x:0, y:3})
        setFood({x:5, y:5})
        setTail([{x:0, y:3}, {x:0, y:2}, {x:0, y:1  }])
        setDirection("right")
        setIsHorizontal(true)
    }

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
           reset()
           return
        }
        const hasHitTail = tail.some(({x, y}, i)=> {
            if(i === 0) return false
            return x === head.x && y === head.y
        })
        if(hasHitTail){
            reset()
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

    return (
        <>
        <Options setCols={setCols} setRows={setRows} setSpeed={setSpeed} speed={speed}/>
        <div className="flex-container">
            <div style={{position: "relative"}}>
                <Grid cols={cols} rows={rows}/>
                <Snake cells={[head, ...tail]}/>
                <Food food={food}/>
            </div>
        </div>
        </>
    )
}
