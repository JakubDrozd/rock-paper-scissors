const rock = document.querySelector("button.rock");
rock.addEventListener("click", playRound);

const paper = document.querySelector("button.paper");
paper.addEventListener("click", playRound);

const scissors = document.querySelector("button.scissors");
scissors.addEventListener("click", playRound);

const result = document.querySelector(".result");

function computerPlay() {
  let computerChoice = Math.floor(Math.random() * (4 - 1) + 1);
  if (computerChoice === 1) {
    return "rock";
  } else if (computerChoice === 2) {
    return "paper";
  } else if (computerChoice === 3) {
    return "scissors";
  }
}

computerScore = 0;
playerScore = 0;
function playRound(e, computerSelection) {
  playerSelection = e.target.className;
  computerSelection = computerPlay();
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log("You win! Rock beats scissors");
    playerScore++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("You win! Paper beats rock");
    playerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log("You win! Scissors beats paper");
    playerScore++;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("You lose! Paper beats rock");
    computerScore++;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    console.log("You lose! Scissors beats paper");
    computerScore++;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    console.log("You lose! Rock beats scissors");
    computerScore++;
  }
  result.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
  if (playerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    result.textContent = "Congratulations! You've won!";
  } else if (computerScore >= 5) {
    playerScore = 0;
    computerScore = 0;
    result.textContent = "You've lost... Better luck next time!";
  }
}
