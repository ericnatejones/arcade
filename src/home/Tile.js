import React from 'react'

export default function Tile({image, game, notes}) {
    return (
        <div>
            <img src={image} alt={game}/>
            <h3>{game}</h3>
            <div>{notes}</div>
        </div>
    )
}
