import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-3 border-purple-800 border-4 w-[700px] h-[700px]">
        {squares.map((square, i) => 
          <Square value={square} onClick={() => onClick(i)} key={i} />
        )}
      </div>
    </div>
  );
};

export default Board;
