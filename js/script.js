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

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    message.textContent = `Tie! You both chose ${humanChoice}.`;
    message.setAttribute("style", "text-align: center;");
    msgDiv.appendChild(message);
    content.insertBefore(msgDiv, choices);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice == "paper")
  ) {
    message.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
    message.setAttribute("style", "text-align: center;");
    msgDiv.appendChild(message);
    content.insertBefore(msgDiv, choices);
    humanScore++;
    humanScoreText.textContent = humanScore;
  } else {
    message.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
    message.setAttribute("style", "text-align: center;");
    msgDiv.appendChild(message);
    content.insertBefore(msgDiv, choices);
    computerScore++;
    computerScoreText.textContent = computerScore;
  }
}

function isGameOver() {
  if (humanScore === 5) {
    humanScoreText.setAttribute("style", "color: green");
    computerScoreText.setAttribute("style", "color: red");
    message.textContent = `You win with a score of ${humanScore} to ${computerScore}.`;
    message.setAttribute("style", "text-align: center;");
    msgDiv.appendChild(message);
    content.insertBefore(msgDiv, choices);
    gameOver = true;
    return;
  } else if (computerScore === 5) {
    computerScoreText.setAttribute("style", "color: green");
    humanScoreText.setAttribute("style", "color: red");
    message.textContent = `You lose with a score of ${humanScore} to ${computerScore}.`;
    message.setAttribute("style", "text-align: center;");
    msgDiv.appendChild(message);
    content.insertBefore(msgDiv, choices);
    gameOver = true;
    return;
  } else {
    gameOver = false;
    return;
  }
}
