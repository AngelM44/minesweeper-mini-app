import logo from './logo.svg';
import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import * as React from 'react';
import Board from "./components/Board"

function App() {
  let minesweeper = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  return (
    <div className='App'>
      <h1>MineSweeper</h1>
      <Board></Board>
    </div>
  );
}

export default App;
