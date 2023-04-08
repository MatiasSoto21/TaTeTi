import React, { useState } from "react";
import Board from "./Board";
import { winner } from "@/utils/helpers";

const Game = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = useState(true);
  const ganador = winner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (ganador || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const jumpTo = () => {};

  const renderMoves = () => {
    return (
      <div className="bg-cyan-500">
        <button
          onClick={() => {
            setBoard(Array(9).fill(null));
            setXisNext(true);
          }}
        >
          Restart Game
        </button>
      </div>
    );
  };

  return (
    <>
      <Board squares={board} onClick={handleClick} />
      <div className="flex flex-col justify-center items-center">
        <p>
          {ganador
            ? "Winner: " + ganador
            : "Next Player: " + (xIsNext ? "X" : "O")}
        </p>
        {renderMoves()}
      </div>
    </>
  );
};

export default Game;
