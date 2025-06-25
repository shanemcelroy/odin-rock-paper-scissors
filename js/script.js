// WRITE a function to get computer choice
// Create a random number for each choice of the game
// If number === 0, choose rock
// If number === 1, choose paper
// Else choose scissors

function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);
  console.log(randomNum);
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());
