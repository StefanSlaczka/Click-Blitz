import RandomButton from "./component/RandomButtonGame";
import SignInComponent from "./component/SignInComponent";
import React, { useState } from "react";

import "./App.css";

export default function App() {
  const [isGameStarted, setGameStarted] = useState(false);

  // Function top start game
  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <React.Fragment>
      <div className='game'>
        {!isGameStarted && (
          <React.Fragment>
            <SignInComponent />
            <h1 className='title'>Click Blitz</h1>
            <button className='startButton' onClick={startGame}>
              Start
            </button>
          </React.Fragment>
        )}
        {isGameStarted && <RandomButton />}
      </div>
    </React.Fragment>
  );
}
