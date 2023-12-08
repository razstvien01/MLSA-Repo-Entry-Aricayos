const cells = document.querySelectorAll(".cell");
let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];

const playerTurnLabel = document.getElementById('player-turn');

cells.forEach((cell, index) => {
  cell.addEventListener("click", () => {
    if (!cell.textContent) {
      cell.textContent = currentPlayer;
      gameBoard[index] = currentPlayer;
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      checkForWin();
      updatePlayerTurnLabel();
    }
  });
});

function checkForWin() {
  const winCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], //* Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], //* Columns
    [0, 4, 8],
    [2, 4, 6], //* Diagonals
  ];

  for (const combination of winCombinations) {
    const [a, b, c] = combination;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      alert(`Player ${gameBoard[a]} wins!`);
      resetGame();
      return;
    }
  }

  // Check for a draw (if all cells are filled)
  if (!gameBoard.includes("")) {
    alert("It's a draw!");
    resetGame();
  }
}

function resetGame() {
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  gameBoard = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  updatePlayerTurnLabel();
}

function updatePlayerTurnLabel() {
  playerTurnLabel.textContent = `Player's Turn: ${currentPlayer}`;
}

updatePlayerTurnLabel();
