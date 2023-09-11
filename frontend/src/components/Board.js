import React from 'react';

const Board = () => {
  const [grid, setGrid] = useState([])

  useEffect(() => {
    function freshBoard(){
      const newBoard = creatBoard();
      console.log(newBoard)
    }
  }, [])
  return <h1>Board</h1>
}

export default Board;