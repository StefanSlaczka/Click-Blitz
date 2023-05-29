import React, { useState, useEffect } from "react";
import "./RBG-game.css"

// My first try was 68

const RandomButton = () => {
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(60);
  const [gameOver, setGameOver] = useState(false);

  // setting the default timer
  useEffect(() => {
    const counter = timer > 0 && setInterval(() => setTimer(timer - 1), 1000);
    if (timer === 0) {
      setGameOver(true);
      clearInterval(counter);
    }
    return () => clearInterval(counter);
  }, [timer]);

  const [buttonPosition, setButtonPosition] = useState({
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
  });

  // Making the button in a random space
  const moveButton = () => {
    if (!gameOver) {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const buttonWidth = 100;
      const buttonHeight = 50;

      const randomX = Math.floor(Math.random() * (viewportWidth - buttonWidth));
      const randomY = Math.floor(Math.random() * (viewportHeight - buttonHeight));

      setButtonPosition({ x: randomX, y: randomY });
      setScore(score + 1);
    }
  };

  const restartGame = () => {
    setScore(0);
    setTimer(60);
    setGameOver(false);
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <div className='gameData'>
        <span className='navbarText'>User {}  </span>
        <span className='navbarText'>score: {score}</span>
        <span className='navbarText'>Time: {timer}</span>
      </div>
      {!gameOver ? (
        <button
          className='startButton'
          style={{
            position: "absolute",
            top: buttonPosition.y,
            left: buttonPosition.x,
          }}
          onClick={moveButton}
        >
          Click
        </button>
      ) : (
        <div className='gameOver'>
          Game Over!
          <button onClick={restartGame}>Restart</button>
        </div>
      )}
    </div>
  );
};

export default RandomButton;
