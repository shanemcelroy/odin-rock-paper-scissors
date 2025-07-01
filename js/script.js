function getComputerChoice() {
  let randomNum = Math.floor(Math.random() * 3);

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const roundTotal = 5;

  for (let i = 0; i < roundTotal; i++) {
    playRound(getHumanChoice(), getComputerChoice());
  }

  console.log(declareWinner(humanScore, computerScore));

  function playRound(humanChoice, computerChoice) {
    // Checks for a tie
    if (humanChoice === computerChoice) {
      console.log(`Tie! You both chose ${humanChoice}.`);
      return;
    }

    // Human rock functionality
    if (humanChoice === "rock" && computerChoice === "scissors") {
      console.log("You win! Rock beats Scissors!");
      return humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lose! Paper beats Rock!");
      return computerScore++;
    }

    // Human paper functionality
    if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You win! Paper beats rock!");
      return humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
      console.log("You lose! Scissors beats Paper!");
      return computerScore++;
    }

    // Human scissors functionality
    if (humanChoice === "scissors" && computerChoice == "paper") {
      console.log("You win! Scissors beats Paper!");
      return humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
      console.log("You lose! Rock beats Scissors!");
      return computerScore++;
    }
  }

  function declareWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
      return `You win with a score of ${humanScore} to ${computerScore}`;
    } else if (humanScore < computerScore) {
      return `You lose with a score of ${humanScore} to ${computerScore}`;
    } else {
      return "You both tied!";
    }
  }
}

playGame();
