const choices = document.querySelector(".choices");
const content = document.querySelector(".content");
const humanScoreText = document.querySelector(".human-score");
const computerScoreText = document.querySelector(".computer-score");

const msgDiv = document.createElement("div");
const message = document.createElement("p");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

choices.addEventListener("click", (e) => {
  const humanChoice = e.target.textContent.toLowerCase();
  if (!gameOver) {
    playRound(humanChoice, computerChoice());
    isGameOver();
  }
});

let computerChoice = function () {
  let randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    message.textContent = `Tie! You both chose ${humanChoice}.`;
    displayRoundMessage(message);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice == "paper")
  ) {
    message.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    displayRoundMessage(message);
    humanScore++;
    humanScoreText.textContent = humanScore;
  } else {
    message.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    displayRoundMessage(message);
    computerScore++;
    computerScoreText.textContent = computerScore;
  }
}

function isGameOver() {
  gameOver = humanScore === 5 || computerScore === 5 ? true : false;

  if (gameOver) {
    displayGameOverMessage(message, humanScore, computerScore);
  }
  return;
}

function displayRoundMessage(msg) {
  msg.setAttribute("style", "text-align: center;");
  msgDiv.appendChild(msg);
  content.insertBefore(msgDiv, choices);
}

function displayGameOverMessage(msg, humanScore, computerScore) {
  let outcome = humanScore > computerScore ? "win" : "lose";

  if (outcome === "win") {
    humanScoreText.setAttribute("style", "color: green");
    computerScoreText.setAttribute("style", "color: red");
  } else {
    humanScoreText.setAttribute("style", "color: red");
    computerScoreText.setAttribute("style", "color: green");
  }

  msg.textContent = `You ${outcome} with a score of ${humanScore} to ${computerScore}.`;
  displayRoundMessage(message);
}
