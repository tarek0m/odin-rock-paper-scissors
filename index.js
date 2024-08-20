let numOfRounds = 5;
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

const choicesDiv = document.querySelector("#choices");
const scoreDiv = document.querySelector("#score");

choicesDiv.addEventListener("click", playGame);

function getComputerChoice() {
	// 0 rock
	// 1 paper
	// 2 scissors
	choice = Math.floor(Math.random() * 3);
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
	let numericHumanChoice;
	switch (humanChoice) {
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
			break;
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
	let roundScore = `
  You: "${humanChoice}",
  Computer: "${strComputerChoice(computerChoice)}",
  ${
			winner == "numericHumanChoice"
				? "Winner is You"
				: winner == "computerChoice"
				? "Winner is Computer"
				: "It's a tie"
		}`;
	return { winner, roundScore };
}

function playGame(e) {
	switch (e.target.id) {
		case "rock":
			humanChoice = "rock";
			break;
		case "paper":
			humanChoice = "paper";
			break;
		case "scissors":
			humanChoice = "scissors";
			break;
		default:
			break;
	}
	let { winner, roundScore } = playRound(humanChoice, getComputerChoice());
	scoreDiv.innerHTML = roundScore;

	if (winner == "numericHumanChoice") {
		humanScore += 1;
	} else if (winner == "computerChoice") {
		computerScore += 1;
	}
	numOfRounds--;

	// end game
	if (numOfRounds <= 0) {
		let finalScore = `You ${humanScore} : ${computerScore} Computer,
  ${
			humanScore > computerScore
				? "You won!"
				: computerScore > humanScore
				? "Computer won!"
				: "It's a tie!"
		}`;
		choicesDiv.classList.toggle("hidden");
		scoreDiv.innerHTML = finalScore;
	}
}
