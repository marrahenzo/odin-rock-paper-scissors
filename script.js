function computerPlay() {
    //randomly return rock paper or scissors
    let play = Math.floor(Math.random() * 3) + 1;
    switch (play) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    //turn the user input into lowercase
    playerSelection = playerSelection.toLowerCase();
    //compare the user input against the computer input and determine the winner
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beat Paper";
        } else {
            return "You Win! Paper beats Rock";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats scissors";
        } else {
            return "You Win! Scissors beat Rock";
        }
    }
}

let playerSelection = prompt("What do you choose?");
playRound(playerSelection, computerPlay());
