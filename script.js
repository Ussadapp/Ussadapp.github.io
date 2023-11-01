const playerAButton = document.getElementById('playerA');
const playerBButton = document.getElementById('playerB');
const scoreAElement = document.getElementById('scoreA');
const scoreBElement = document.getElementById('scoreB');
const winnerElement = document.getElementById('winner');
const resetButton = document.getElementById('reset');

let scoreA = 0;
let scoreB = 0;

playerAButton.addEventListener('click', () => {
  increaseScore('A');
});

playerBButton.addEventListener('click', () => {
  increaseScore('B');
});

resetButton.addEventListener('click', resetGame);

function increaseScore(player) {
  if (!winnerElement.textContent) {
    if (player === 'A') {
      scoreA++;
    } else if (player === 'B') {
      scoreB++;
    }
    updateScores();
  }

  checkWinner();
}

function checkWinner() {
  if (scoreA >= 20 && scoreB >= 20) {
    // Deuce rule: When both players have 20 or more points
    if (Math.abs(scoreA - scoreB) >= 2) {
      if (scoreA > scoreB) {
        setWinner('A');
      } else {
        setWinner('B');
      }
    }
  } else if ((scoreA >= 21 || scoreB >= 21) && Math.abs(scoreA - scoreB) >= 2) {
    if (scoreA > scoreB) {
      setWinner('A');
    } else {
      setWinner('B');
    }
  }
}

function setWinner(player) {
  winnerElement.textContent = `Player ${player} wins!`;
}

function updateScores() {
  scoreAElement.textContent = scoreA;
  scoreBElement.textContent = scoreB;
}

function resetGame() {
  scoreA = 0;
  scoreB = 0;
  updateScores();
  winnerElement.textContent = '';
}
