function playerPlay(choice) {
  let decisionToSmallLetters = choice.toLowerCase();
  if (!decisionToSmallLetters) {
    alert("Error");
  } else if (
    decisionToSmallLetters != "rock" &&
    decisionToSmallLetters != "paper" &&
    decisionToSmallLetters != "scissors"
  ) {
    alert(`Must be a rock, paper or scissors`);
  }
  if (decisionToSmallLetters === "rock") {
    return "rock";
  } else if (decisionToSmallLetters === "paper") {
    return "paper";
  } else if (decisionToSmallLetters === "scissors") {
    return "scissors";
  }
}

function computerPlay() {
  let randomNumber = Math.floor(Math.random() * (4 - 1) + 1);
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
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
  let howManyRounds = +prompt("How many rounds do you want to play?");
  let roundsLeft;
  playerScore = 0;
  computerScore = 0;
  for (roundsLeft = howManyRounds; roundsLeft >= 0; roundsLeft--) {
    let choice = prompt("What you gonna play?");
    const playerSelection = playerPlay(choice);
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(
      `Player score: ${playerScore} || Computer score: ${computerScore}`
    );
    roundsPara.textContent = `Rounds left: ${roundsLeft}`;
  }
  console.log(`Total Player score: ${playerScore}
  Total Computer score: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("Congratulations! You've won!");
  } else if (playerScore < computerScore) {
    console.log("You've lost... Better luck next time!");
  } else {
    console.log("It's a tie! Wanna try again? ");
  }
}

const roundsPara = document.querySelector("p.rounds");
const startButton = document.querySelector("button.startGame");
const roundResults = document.querySelector("p.roundResult");

startButton.addEventListener("click", playGame);
