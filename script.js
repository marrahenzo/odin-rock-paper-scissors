function computerPlay() {
  //randomly return rock paper or scissors
  //get a random number between 1 and 3
  let play = Math.floor(Math.random() * 3) + 1;
  //if number is 1, return rock, if 2, paper, if 3, scissors
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

console.log(computerPlay());
