function playerPlay(choice) {
  let choiceFormat = choice.toLowerCase();
  if (!choiceFormat) {
    alert("Error");
  } else if (
    choiceFormat != "rock" &&
    choiceFormat != "paper" &&
    choiceFormat != "scissors"
  ) {
    alert(`Must be a rock, paper or scissors`);
  }
  if (choiceFormat === "rock") {
    return "rock";
  } else if (choiceFormat === "paper") {
    return "paper";
  } else if (choiceFormat === "scissors") {
    return "scissors";
  }
}

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

function playRound(playerSelection, computerSelection) {
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
}

function playGame() {
  let howManyRounds;
  do {
    howManyRounds = +prompt("How many rounds do you want to play?");
  } while (isNaN(howManyRounds));
  let roundsLeft;
  playerScore = 0;
  computerScore = 0;
  for (roundsLeft = howManyRounds - 1; roundsLeft >= 0; roundsLeft--) {
    let choice = prompt("What you gonna play?");
    const playerSelection = playerPlay(choice);
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    roundResult.textContent = `Player score: ${playerScore} || Computer score: ${computerScore}`;
    roundsPara.textContent = `Rounds left: ${roundsLeft}`;
  }
  roundResult.textContent = `Total Player score: ${playerScore}
  Total Computer score: ${computerScore}`;
  if (playerScore > computerScore) {
    gameResult.textContent = "Congratulations! You've won!";
  } else if (playerScore < computerScore) {
    gameResult.textContent = "You've lost... Better luck next time!";
  } else {
    gameResult.textContent = "It's a tie! Wanna try again? ";
  }
}

const roundsPara = document.querySelector("p.rounds");
const startButton = document.querySelector("button.startGame");
const roundResult = document.querySelector("p.roundResult");
const gameResult = document.querySelector("p.gameResult");
startButton.addEventListener("click", playGame);
