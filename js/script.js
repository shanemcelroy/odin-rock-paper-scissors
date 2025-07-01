const choices = document.querySelector(".choices");
const humanScoreText = document.querySelector(".human-score");
const computerScoreText = document.querySelector(".computer-score");

let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
let gameOver = false;

choices.addEventListener("click", (e) => {
  const humanChoice = e.target.textContent.toLowerCase();
  // console.log(humanChoice, computerChoice());
  if (!gameOver) {
    playRound(humanChoice, computerChoice());
    isGameOver();
  }
});

let computerChoice = function () {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

function playRound(humanChoice, computerChoice) {
  // Checks for a tie
  if (humanChoice === computerChoice) {
    return console.log(`Tie! You both chose ${humanChoice}.`);
  }

  // Rock
  if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You win! Rock beats Scissors!");
    humanScore++;
    humanScoreText.textContent = humanScore;
    return;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lose! Paper beats Rock!");
    computerScore++;
    computerScoreText.textContent = computerScore;
    return;
  }

  // Paper
  if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You win! Paper beats rock!");
    humanScore++;
    humanScoreText.textContent = humanScore;
    return;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lose! Scissors beats Paper!");
    computerScore++;
    computerScoreText.textContent = computerScore;
    return;
  }

  // Scissors
  if (humanChoice === "scissors" && computerChoice == "paper") {
    console.log("You win! Scissors beats Paper!");
    humanScore++;
    humanScoreText.textContent = humanScore;
    return;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lose! Rock beats Scissors!");
    computerScore++;
    computerScoreText.textContent = computerScore;
    return;
  }
}

function isGameOver() {
  if (humanScore === 5) {
    humanScoreText.setAttribute("style", "color: green");
    computerScoreText.setAttribute("style", "color: red");
    console.log(`You win with a score of ${humanScore} to ${computerScore}`);
    gameOver = true;
    return;
  } else if (computerScore === 5) {
    computerScoreText.setAttribute("style", "color: green");
    humanScoreText.setAttribute("style", "color: red");
    console.log(`You lose with a score of ${humanScore} to ${computerScore}`);
    gameOver = true;
    return;
  } else {
    gameOver = false;
    return;
  }
}
