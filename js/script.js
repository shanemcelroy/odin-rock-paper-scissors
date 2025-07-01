const choices = document.querySelector(".choices");
const content = document.querySelector(".content");
const humanScoreText = document.querySelector(".human-score");
const computerScoreText = document.querySelector(".computer-score");

const msgDiv = document.createElement("div");
const message = document.createElement("p");
const reset = document.createElement("button");

let humanScore = 0;
let computerScore = 0;
let gameOver = false;

choices.addEventListener("click", (e) => {
  if (e.target.matches(".reset")) {
    resetGame();
  } else {
    const humanChoice = e.target.textContent.toLowerCase();
    if (!gameOver) {
      playRound(humanChoice, computerChoice());
      isGameOver();
    }
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

    reset.textContent = "RESET";
    reset.setAttribute("style", "background-color: lightskyblue;");
    reset.setAttribute("class", "reset");
    choices.appendChild(reset);
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
    humanScoreText.setAttribute("style", "color: palegreen");
    computerScoreText.setAttribute("style", "color: palevioletred");
  } else {
    humanScoreText.setAttribute("style", "color: palevioletred");
    computerScoreText.setAttribute("style", "color: palegreen");
  }

  msg.textContent = `You ${outcome} with a score of ${humanScore} to ${computerScore}.`;
  displayRoundMessage(message);
}

function resetGame() {
  gameOver = false;
  humanScore = 0;
  computerScore = 0;

  humanScoreText.textContent = 0;
  humanScoreText.setAttribute("style", "color: black");
  computerScoreText.textContent = 0;
  computerScoreText.setAttribute("style", "color: black");

  msgDiv.remove();
  reset.remove();
}
