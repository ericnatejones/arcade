import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  // References for interactive elements
  const coinSlotRef = useRef(null);
  
  // Audio references
  const buttonClickSound = useRef(null);
  const coinInsertSound = useRef(null);
  const hoverSound = useRef(null);
  
  useEffect(() => {
    console.log('Home component mounted');
    console.log('Coin slot ref:', coinSlotRef.current);
    
    // Preload audio files
    buttonClickSound.current = new Audio('/sounds/mixkit-cartoon-toy-whistle-616.wav');
    coinInsertSound.current = new Audio('/sounds/mixkit-hard-pop-click-2364 (1).wav');
    hoverSound.current = new Audio('/sounds/mixkit-long-pop-2358.wav');
    
    // Set volume levels
    buttonClickSound.current.volume = 0.5;
    coinInsertSound.current.volume = 0.7;
    hoverSound.current.volume = 0.2;
    
    // Check if styles are applied
    const arcadeContainer = document.querySelector('.arcade-container');
    if (arcadeContainer) {
      console.log('Arcade container found and styles:', 
        window.getComputedStyle(arcadeContainer).backgroundColor);
    } else {
      console.error('Arcade container not found in DOM!');
    }
    
    // Cleanup function
    return () => {
      // Stop any playing sounds when component unmounts
      if (buttonClickSound.current) buttonClickSound.current.pause();
      if (coinInsertSound.current) coinInsertSound.current.pause();
      if (hoverSound.current) hoverSound.current.pause();
    };
  }, []);
  
  // Sound effect function
  const playSound = (soundType) => {
    try {
      let audio;
      
      // Select the appropriate sound based on the interaction
      switch(soundType) {
        case 'button':
          audio = buttonClickSound.current;
          break;
        case 'coin':
          audio = coinInsertSound.current;
          break;
        case 'hover':
          audio = hoverSound.current;
          break;
        default:
          audio = buttonClickSound.current;
      }
      
      // Reset the audio to the beginning (in case it's already playing)
      if (audio) {
        audio.currentTime = 0;
        
        // Try to play the sound
        const promise = audio.play();
        
        if (promise !== undefined) {
          promise.catch(error => {
            console.log('Audio play failed:', error);
          });
        }
      }
    } catch (error) {
      console.log('Audio playback failed:', error);
    }
  };

  // Button click handler
  const handleButtonClick = () => {
    console.log('Button clicked');
    playSound('button');
  };

  // Coin slot click handler
  const handleCoinSlotClick = () => {
    console.log('Coin slot clicked');
    playSound('coin');
    
    if (coinSlotRef.current) {
      coinSlotRef.current.classList.add('inserted');
      setTimeout(() => {
        if (coinSlotRef.current) {
          coinSlotRef.current.classList.remove('inserted');
        }
      }, 500);
    }
  };

  // Card hover sound effect
  const handleCardHover = () => {
    console.log('Card hovered');
    playSound('hover');
  };

  console.log("Home component is rendering"); // Debug log

  return (
    <div className="home-component">
      <div className="arcade-container">
        <div className="arcade-cabinet">
          <div className="screen">
            <div className="screen-content">
              <h1 className="neon-text">React Arcade</h1>
              
              <div className="game-list">
                <div className="game-card snake-card" onMouseEnter={handleCardHover}>
                  <div className="game-icon">
                    <span role="img" aria-label="Snake">🐍</span>
                  </div>
                  <h3>Snake</h3>
                  <p>Classic gameplay with React power!</p>
                  <Link to="/snake" className="play-btn">PLAY</Link>
                </div>
                
                <div className="game-card frogger-card" onMouseEnter={handleCardHover}>
                  <div className="game-icon">
                    <span role="img" aria-label="Frog">🐸</span>
                  </div>
                  <h3>Frogger</h3>
                  <p>Cross the road if you dare!</p>
                  <Link to="/frogger" className="play-btn">PLAY</Link>
                </div>
                
                <div className="game-card minesweeper-card" onMouseEnter={handleCardHover}>
                  <div className="game-icon">
                    <span role="img" aria-label="Bomb">💣</span>
                  </div>
                  <h3>Minesweeper</h3>
                  <p>Carefully clear the minefield!</p>
                  <Link to="/mine-sweeper" className="play-btn">PLAY</Link>
                </div>
                
                <div className="game-card mastermind-card" onMouseEnter={handleCardHover}>
                  <div className="game-icon">
                    <span role="img" aria-label="Brain">🧠</span>
                  </div>
                  <h3>Master Mind</h3>
                  <p>Test your code-breaking skills!</p>
                  <Link to="/master-mind" className="play-btn">PLAY</Link>
                </div>
              </div>
              
              <div className="welcome-message">
                <h2>Welcome to the Arcade!</h2>
                <p>Step into a world of React-powered gaming classics! This collection showcases my ability to recreate timeless arcade experiences using modern web technologies.</p>
                <p><strong>Note for players:</strong> Each game offers its own unique challenge. Part of the fun is figuring out the controls - consider it an extra game mechanic!</p>
                <p><strong>Minesweeper tip:</strong> Hit start before your first game for the best experience.</p>
              </div>
              
              <div className="for-devs">
                <h3>For Fellow Developers</h3>
                <p>If you're part of Code Pals and exploring this portfolio, consider building your own version of <a href="https://react-mancala.netlify.app/" rel="noopener noreferrer" target="_blank" className="arcade-link">Mancala</a> to add to your collection!</p>
                <p>This page is continuously evolving. Check back for updates as I respond to feedback and add new features.</p>
              </div>
            </div>
          </div>
          
          <div className="cabinet-details">
            <div className="joystick"></div>
            <div className="buttons">
              <div className="button" onClick={handleButtonClick}></div>
              <div className="button" onClick={handleButtonClick}></div>
              <div className="button" onClick={handleButtonClick}></div>
            </div>
            <div className="coin-slot" ref={coinSlotRef} onClick={handleCoinSlotClick}>
              <span>INSERT COIN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
