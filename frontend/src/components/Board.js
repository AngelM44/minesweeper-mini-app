import React from "react";
import { useEffect, useState } from "react";
import createBoard from "./CreateBoard";
import Cell from './Cell';

const Board = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    function freshBoard() {
      const newBoard = createBoard(5, 5, 10);
      console.log(newBoard);
      setGrid(newBoard);
    }
    freshBoard();
  }, []);

  const updateFlag = () => {
    console.log('right click')
  }

  if (!grid.board) {
    return <div>Loading</div>;
  }

  return grid.board.map((singleRow) => {
    return (
      <div style={{ display: "flex" }}>
        {singleRow.map((singleBlock) => {
          return (
            <div>
              <Cell details={singleBlock} updateFlag={updateFlag}/>
            </div>
          )
        })}
      </div>
    );
  });
};

export default Board;
