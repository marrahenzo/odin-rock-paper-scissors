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

function createRegistryText() {
  registryText = document.createElement("p");
  registryText.style.textAlign = "center";
  registryText.style.fontSize = "20px";
  registryText.style.fontFamily = "verdana";
}

function playRound(playerSelection) {
  //create text for score registry
  createRegistryText();
  //basic game logic
  let result = "";
  //get computer choice
  let computerSelection = computerPlay();
  //compare the user input against the computer input and determine round winner
  if (playerSelection === computerSelection) {
    result = "tie";
    switch (playerSelection) {
      case "rock":
        registryText.textContent = "Tie (✊)";
        break;
      case "paper":
        registryText.textContent = "Tie (✋)";
        break;
      case "scissors":
        registryText.textContent = "Tie (✌️)";
    }
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      result = "loss";
      registryText.textContent = "Computer (✋) beats Player (✊)";
    } else {
      result = "win";
      registryText.textContent = "Player (✊) beats Computer (✌️)";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      result = "loss";
      registryText.textContent = "Computer (✌️) beats Player (✋)";
    } else {
      result = "win";
      registryText.textContent = "Player (✋) beats Computer (✊)";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      result = "loss";
      registryText.textContent = "Computer (✊) beats Player (✌️)";
    } else {
      result = "win";
      registryText.textContent = "Player (✌️) beats Computer (✋)";
    }
  }
  setScore(result);
}

function setScore(result) {
  //basic score logic
  if (result !== "tie") {
    if (result === "win") {
      playerScore++;
    } else {
      computerScore++;
    }
  }

  //Update match registry and score counter
  registry.prepend(registryText);
  scoreText.textContent =
    "You: " + playerScore + " - Computer: " + computerScore;

  //determine match winner
  if (playerScore > 4) {
    winnerText.textContent = "The player wins";
    endGame();
  } else if (computerScore > 4) {
    winnerText.textContent = "The computer wins";
    endGame();
  }
}

function endGame() {
  //Prevent the player from playing further
  registry.prepend(winnerText);
  buttonRock.disabled = true;
  buttonPaper.disabled = true;
  buttonScissors.disabled = true;
  restart.appendChild(buttonRestart);
}

function restartGame() {
  //Clean up UI to match initially loaded page
  restart.removeChild(buttonRestart);
  buttonRock.disabled = false;
  buttonPaper.disabled = false;
  buttonScissors.disabled = false;
  playerScore = 0;
  computerScore = 0;
  scoreText.textContent = "You: 0 - Computer: 0";
  winnerText.textContent = "";
  matchResultsText.textContent = "";
  registry.textContent = "";
}

//General logic variables and DOM elements

let playerScore = 0;
let computerScore = 0;
let scoreText = document.querySelector("#score-counter");
let matchResultsText = document.querySelector("#match-results");
let winnerText = document.createElement("p");
winnerText.style.textAlign = "center";
winnerText.style.fontSize = "25px";
winnerText.style.margin = "50px";
winnerText.style.fontFamily = "verdana";
let registry = document.querySelector("#registry");
let registryText;
let restart = document.querySelector("#restart");

//Create UI buttons and add behaviors

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
buttonRestart.style.backgroundColor = "rgb(0, 88, 189)";
buttonRestart.style.border = "0";
buttonRestart.style.borderRadius = "10px";
buttonRestart.style.boxShadow = "4px 4px #0400ff";
buttonRestart.style.marginTop = "50px";
buttonRestart.style.color = "white";
buttonRestart.style.fontSize = "35px";
buttonRestart.style.fontFamily = "verdana";
buttonRestart.style.padding = "10px";
buttonRestart.addEventListener("click", function () {
  restartGame();
});
