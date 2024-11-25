import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import Player from "./Components/Player";
import Log from "./Components/Log";
import winning_combinations from "../src/winning-combinations.js";
import GameOver from "./Components/GameOver.jsx";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = "X";
  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
};
const deriveGameTurns = (gameTurns) => {
   let gameBoard = [...initialGameBoard.map((array) => [...array])];
   for (const turn of gameTurns) {
     const { square, player } = turn;
     const { row, col } = square;
     gameBoard[row][col] = player;
   }
   return gameBoard
}

const deriveWinner = (gameBoard, players) => {
    let winner;
    for (let i = 0; i <= winning_combinations.length - 1; i++) {
      const combination = winning_combinations[i];
      const firstSquareSymbol =
        gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].column];

      if (
        firstSquareSymbol &&
        firstSquareSymbol === secondSquareSymbol &&
        firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = players[firstSquareSymbol]; //Per the first number in row col or diagonal tha you won
        console.log("yay");
      }
    }
    return winner
}
function App() {
  const [players, setPlayers] = useState({
    X: "Player 1",
    Y: "Player 2",
  });
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
 const gameBoard = deriveGameTurns(gameTurns)
const winner = deriveWinner(gameBoard, players)
  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevTurn) => {
      const currentPlayer = deriveActivePlayer(prevTurn);
      const updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];
      return updatedTurn;
    });
  };
  const isBoardFull = gameBoard.every((row) =>
    row.every((cell) => cell !== null)
  );
  const handleRestart = () => {
    setGameTurns([])
  }

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers(prevPlayers => ({
      ...prevPlayers, 
      [symbol]: newName
    }))
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerSymbol={activePlayer} name="Player 1" symbol="X"  onChangeName={handlePlayerNameChange}/>
          <Player playerSymbol={activePlayer} name="Player 2" symbol="O"  onChangeName={handlePlayerNameChange}/>
        </ol>
        {(winner || isBoardFull) && (
          <GameOver
            winner={winner}
            isBoardFull={isBoardFull}
            onRestart={handleRestart}
          />
        )}

        <GameBoard
          winner={winner}
          board={gameBoard}
          onSelectSquare={handleSelectSquare}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
