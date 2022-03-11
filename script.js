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

console.log(computerPlay());
