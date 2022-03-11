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
        console.log("It's a tie!");
        return 2;
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            console.log("You Lose! Paper beats Rock");
            return 0;
        } else {
            console.log("You Win! Rock beats Scissors");
            return 1;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            console.log("You Lose! Scissors beat Paper");
            return 0;
        } else {
            console.log("You Win! Paper beats Rock");
            return 1;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            console.log("You Lose! Rock beats scissors");
            return 0;
        } else {
            console.log("You Win! Scissors beat Rock");
            return 1;
        }
    }
}

function game() {
    //basic game logic
    let playerScore = 0;
    let computerScore = 0;
    //repeat while there isn't a winner
    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = prompt("What do you choose?", "rock");
        let result = playRound(playerSelection, computerPlay());
        //result being 2 means a tie, thus it avoids adding a score
        if (result !== 2 && result) {
            playerScore++;
        } else if (result !== 2) computerScore++;
        console.log(playerScore + " to " + computerScore);
    }
    //determine winner
    if (playerScore > computerScore) {
        console.log("The Player wins!");
        return 1;
    } else {
        console.log("The Computer wins!");
        return 0;
    }
}

game();
