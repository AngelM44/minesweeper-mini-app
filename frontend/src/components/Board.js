import React from 'react';
import {useEffect, useState} from 'react';
import createBoard from './CreateBoard';
//import Cell from './Cell'


const Board = () => {
  const [grid, setGrid] = useState([])

  useEffect(() => {
    function freshBoard(){
      const newBoard = createBoard(5,5,10);
      console.log(newBoard)
      setGrid(newBoard)
    }
    freshBoard();
  }, []);

  return grid.board.map((singleRow) => {
    return singleRow.map((singleBlock) => {
      return <div>{singleBlock.value}</div>
    })
  })
}
export default Board;

