import React from 'react'

const GameOver = ({ winner, isBoardFull, onRestart }) => {

  return (
    <div  id='game-over'>
      <h2> {isBoardFull ? "It's a draw" : "Game over dawg"} </h2>
      <p>{!isBoardFull && `${winner} won!`}</p>
      <button onClick={onRestart}>Rematch</button>
    </div>
  );
};

export default GameOver
