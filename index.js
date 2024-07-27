let humanScore = 0;
let computerScore = 0;

playGame();

function getComputerChoice() {
  // 0 rock
  // 1 paper
  // 2 scissors
  choice = Math.floor(Math.random() * 3);
  return choice;
}

function getHumanChoice() {
  choice = prompt("Choose rock, paper, or scissors.");
  return choice;
}

function playRound(humanChoice, computerChoice) {
  let strComputerChoice = computerChoice =>
    computerChoice == 0
      ? "rock"
      : computerChoice == 1
      ? "paper"
      : computerChoice == 2
      ? "scissors"
      : "Invalid choice";
  let caseInsensitiveChoice = humanChoice.toLowerCase().trim()
  let numericHumanChoice;
  switch (caseInsensitiveChoice) {
    case "rock": // 0
      numericHumanChoice = 0;
      break;
    case "paper": // 1
      numericHumanChoice = 1;
      break;
    case "scissors": // 2
      numericHumanChoice = 2;
      break;
    default:
      alert("wrong choice");
  }

  absDifference = Math.abs(numericHumanChoice - computerChoice);
  let winner;
  let choices = { numericHumanChoice, computerChoice };
  if (absDifference == 1) {
    winner = Object.keys(choices).reduce((maxVar, curVar) =>
      choices[maxVar] > choices[curVar] ? maxVar : curVar
    );
  } else if (absDifference == 2) {
    winner = Object.keys(choices).reduce((zeroVar, curVar) =>
      choices[zeroVar] < choices[curVar] ? zeroVar : curVar
    );
  } else {
    winner = "Tie";
  }
  alert(`
  You: "${caseInsensitiveChoice}"
  Computer: "${strComputerChoice(computerChoice)}"
  ${
    winner == "numericHumanChoice"
      ? "Winner is You"
      : winner == "computerChoice"
      ? "Winner is Computer"
      : "It's a tie"
  }`);
  return winner;
}

function playGame(numOfRounds = 3) {
  for (let i = 0; i < numOfRounds; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    let winner = playRound(humanSelection, computerSelection);

    if (winner == "numericHumanChoice") {
      humanScore += 1;
    } else if (winner == "computerChoice") {
      computerScore += 1;
    }
  }
  alert(`You ${humanScore} : ${computerScore} Computer
  ${
    humanScore > computerScore
      ? "You won!"
      : computerScore > humanScore
      ? "Computer won!"
      : "It's a tie!"
  }`);
}
