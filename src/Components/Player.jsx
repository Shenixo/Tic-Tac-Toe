import React, { useState } from "react";

const Player = ({ symbol, name, playerSymbol, onChangeName }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [playerName, setPlayerName] = useState(name)
    const handleEditing = () => {
        setIsEditing(prev => !prev)
        if (isEditing){
          onChangeName(symbol, playerName);
        }
    } 
    const handleInputChange = (e) => {
        setPlayerName(e.target.value)
    }
    console.log(playerName);
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        setIsEditing(false);
        if (isEditing) {
          onChangeName(symbol, playerName);
        }
      }
    };
  return (
    <li
      className={
        // symbol === "X" && playerSymbol === "X"
        //   ? "active"
        //   : symbol === "O" && playerSymbol === "O" ? 'active' : null
        symbol === playerSymbol ? 'active' : null
      }
    >
      <span className="player">
        <span className="player-name">
          {!isEditing ? (
            playerName
          ) : (
            <input
              type="text"
              name="playerName"
              //   value={playerName}
              onChange={handleInputChange}
              onKeyDown={handleKeyPress}
            />
          )}
        </span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditing}>
        {!isEditing ? <p>Edit</p> : <p>Save</p>}
      </button>
    </li>
  );
};

export default Player;
