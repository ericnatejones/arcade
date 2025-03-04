import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function Tile({image, game, notes, path, icon}) {
    // Audio reference
    const hoverSound = useRef(null);
    
    useEffect(() => {
        // Preload the hover sound
        hoverSound.current = new Audio('/sounds/hover.mp3');
        hoverSound.current.volume = 0.2;
        
        // Cleanup function
        return () => {
            if (hoverSound.current) hoverSound.current.pause();
        };
    }, []);
    
    // Sound effect function for hover
    const handleHover = () => {
        try {
            if (hoverSound.current) {
                hoverSound.current.currentTime = 0;
                const promise = hoverSound.current.play();
                
                if (promise !== undefined) {
                    promise.catch(error => {
                        console.log('Audio play failed:', error);
                    });
                }
            }
        } catch (error) {
            console.log('Audio play failed:', error);
        }
    };

    return (
        <div 
            className={`game-card ${game.toLowerCase()}-card`}
            onMouseEnter={handleHover}
        >
            {icon && <div className="game-icon">{icon}</div>}
            {image && <img src={image} alt={game} className="game-image"/>}
            <h3>{game}</h3>
            <p>{notes}</p>
            <Link to={path} className="play-btn">PLAY</Link>
        </div>
    )
}
