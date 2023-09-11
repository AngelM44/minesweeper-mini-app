import logo from './logo.svg';
import './App.css';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import * as React from 'react';
import Board from "./components/Board"

function App() {
  return (
    <div className='App'>
      <h1>MineSweeper</h1>
      <Board></Board>
    </div>
  );
}

export default App;
