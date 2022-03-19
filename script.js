function computerPlay() {
  //randomly return rock paper or scissors
  let choice = Math.floor(Math.random() * 3) + 1;
  let play = "";
  switch (choice) {
    case 1:
      play = "rock";
      break;
    case 2:
      play = "paper";
      break;
    case 3:
      play = "scissors";
      break;
  }
  return play;
}

function playRound(playerSelection) {
  //basic game logic
  let result = "";
  //get computer choice
  let computerSelection = computerPlay();
  //compare the user input against the computer input and determine the winner
  if (playerSelection === computerSelection) {
    result = "tie";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      result = "loss";
    } else {
      result = "win";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      result = "loss";
    } else {
      result = "win";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "loss";
    } else {
      result = "win";
    }
  }
  setScore(result);
}

function setScore(result) {
  //basic score logic
  if (result !== "tie") {
    if (result === "win") {
      playerScore++;
      matchResultsText.textContent = "The player WINS!";
    } else {
      computerScore++;
      matchResultsText.textContent = "The computer WINS!";
    }
  } else {
    matchResultsText.textContent = "It's a TIE!";
  }

  scoreText.textContent =
    "Scores: Player: " + playerScore + " - Computer: " + computerScore;

  //determine winner
  if (playerScore > 4) {
    winnerText.textContent = "The player wins!!";
    endGame();
  } else if (computerScore > 4) {
    winnerText.textContent = "The computer wins!!";
    endGame();
  }
}

function endGame() {
  document.querySelector("#scores").appendChild(winnerText);
  buttonRock.disabled = true;
  buttonPaper.disabled = true;
  buttonScissors.disabled = true;
  document.body.appendChild(buttonRestart);
}

function restartGame() {
  document.body.removeChild(buttonRestart);
  buttonRock.disabled = false;
  buttonPaper.disabled = false;
  buttonScissors.disabled = false;
  playerScore = 0;
  computerScore = 0;
  scoreText.textContent = "Scores: Player: 0 - Computer: 0";
  winnerText.textContent = "";
  matchResultsText.textContent = "";
}

let playerScore = 0;
let computerScore = 0;

let scoreText = document.querySelector("#score-counter");
let matchResultsText = document.querySelector("#match-results");
let winnerText = document.createElement("p");

let buttonRock = document.querySelector("#button-rock");
buttonRock.addEventListener("click", function () {
  playRound("rock");
});

let buttonPaper = document.querySelector("#button-paper");
buttonPaper.addEventListener("click", function () {
  playRound("paper");
});

let buttonScissors = document.querySelector("#button-scissors");
buttonScissors.addEventListener("click", function () {
  playRound("scissors");
});

let buttonRestart = document.createElement("button");
buttonRestart.textContent = "Restart";
buttonRestart.addEventListener("click", function () {
  restartGame();
});
