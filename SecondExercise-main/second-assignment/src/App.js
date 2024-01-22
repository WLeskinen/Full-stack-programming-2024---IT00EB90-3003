import { useState } from "react";


// Clickable square button which displays the result of our given value (X or O)
function Square({ value, onSquareClick }) {
  return <button className="square" onClick={onSquareClick}>{value}</button> 
}

// Board component for the game. T
function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {                      // Handles a click when you click on a square
    if (calculateWinner(squares) || squares[i]) {     // This function checks if there's a winner or if the square has already been fillled
      return;
    }
    const nextSquares = squares.slice(); // fetches a copy of our array.
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {                  // This function sets the square to either 'X' or 'O' depending on whose turn it is.
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  // Function that sets the status of the game based on if there's a winner or it's someone's turn.
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;   // Displays the winner status
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O'); // Displays the turn of the next player
  }

  // Renders our game board with status and individual squares.
  return (
  <>
    <div className="status">{status}</div>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
      <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
      <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
    </div>
    <div className="board-row">
    <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
    <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
    <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
    </div> 
    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
    </div> 
  </>
  );
}

export default function Game() {
  // State variables for managing the game's current move and it's  history
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0; // Determine if it's X player's turn by checking if currentMove is an even number
  const currentSquares = history[currentMove];

  // Function which updates the game state with the latest move which includes the game's history and current move index.
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]; // Creates a new array which shows the updated history.
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1); // Update the current move index to the most recent move in the updated history.
  }

  // This function allows to check previous moves within the game
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  // Generates a list of buttons representing moves within the game's history.
  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {                                 
      description = 'Go to game start';     // Create a description based on the move number.
    }

    // Return a list item with a button to jump to desired move.
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });


  // Renders the main game component, in other words the game board and it's history.
  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
}


function calculateWinner(squares) {
  const lines = [               
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],                   // Using an array, we define possible winning combinations on the game board.
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  // Iterate through each line and check if the squares match.
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];                                                  
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {   // If the squares at the positions a, b, and c are equal, a winner is found.
      return squares[a]; // Returns the symbol of the winner ("X" or "O")
    }
  }
  return null;   // If no winner is found, then return null.
}
