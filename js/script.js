let humanScore = 0;
let computerScore = 0;

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

function getHumanChoice() {
  let choice = prompt("Rock, paper, or scissors?: ");
  return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  // Checks for a tie
  if (humanChoice === computerChoice) {
    console.log(`Tie! You both chose ${humanChoice}.`);
    return;
  }

  // Human rock functionality
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors!");
    humanScore++;
    return;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock!");
    computerScore++;
    return;
  }

  // Human paper functionality
  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock!");
    humanScore++;
    return;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper!");
    computerScore++;
    return;
  }

  // Human scissors functionality
  if (humanChoice === "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats Paper!");
    humanScore++;
    return;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors!");
    computerScore++;
    return;
  }
}
