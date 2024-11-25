import React from "react";

const Log = ({ turns }) => {
  const {square, player} = turns
  console.log(square)
  for (const turn of turns ){
    console.log("turn", turn)

  }
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li key={`${turn.square.row}${turn.square.col}`}>
          {turn.player} selected {turn.square.row}, {turn.square.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
