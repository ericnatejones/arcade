import React, {useState} from 'react'
import Guess from './Guess'
import { useEffect } from 'react';

const colors = ['red', 'purple', 'blue', 'green', 'yellow', 'orange', 'black']
console.log(colors[Math.floor(Math.random() * colors.length)])
export default function OpeningAnimaton() {
    const [guesses, setGuesses] = useState(getNew())
    const [veilHeight, setVeilHeight] = useState('5px')

    useEffect(() => {
        setTimeout(()=>{
            setGuesses(getNew())
            setVeilHeight('10px')
        }, 500)
        setTimeout(()=>{
            setGuesses(getNew())
            setVeilHeight('20px')
        }, 1000)
        setTimeout(()=>{
            setGuesses(getNew())
            setVeilHeight('30px')
        }, 1500)
        setTimeout(()=>{
            setVeilHeight('40px')
        }, 1500)
    }, [])

    function getNew() {
        return [',', ',', ',', ','].map(()=>colors[Math.floor(Math.random() * colors.length)])
    }

    const veilStyle = {
        backgroundColor: 'grey',
        height: veilHeight,
        position: "absolute",
        zIndex: 1,
        width: "100%"
    }

    return (
        <div className='master-mind-board' style={{position: "relative"}}>
            <div style={{pointerEvents: 'none'}}>
                <div style={veilStyle}></div>
                <Guess onChange={getNew} guess='0' color={guesses[0]}/>
                <Guess onChange={getNew} guess='1' color={guesses[1]}/>
                <Guess onChange={getNew} guess='2' color={guesses[2]}/>
                <Guess onChange={getNew} guess='3' color={guesses[3]}/>
            </div>
        </div>
    )
}
