

const GameBoard = ({ onSelectSquare, board, winner }) => {
  console.log("board", board)
  // const [gameBoard, setGameBoard] = useState(initialGameBoard);
  // const handleSelectSquare = (rowIndex, colIndex) => {
  //   setGameBoard((prevGameBoard) => {
  //     const updatedGameBoard = [
  //       ...prevGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedGameBoard[rowIndex][colIndex] = playerSymbol;
  //     return updatedGameBoard;
  //   });
  //   onSelectSquare()
  // };

  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button

                disabled={winner}
                  className={
                    board[rowIndex][colIndex] !== null
                      ? 'disabled' : null
                  }
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
