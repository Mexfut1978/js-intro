const rps = (choice) => {
	// Generates a random number between 0 - 2
	// 0 === rock , 1 === paper , 2 === scissors
	let computerChoice = Math.floor(Math.random() * 3);
	// playerChoiceString is used to display the player's choice in string form not integer
	let playerChoiceString = choice.toLowerCase();
	let playerChoice = choice.toLowerCase();

	if (playerChoice === 'rock') {
		playerChoice = 0;
	} else if (playerChoice === 'paper') {
		playerChoice = 1;
	} else if (playerChoice === 'scissors') {
		playerChoice = 2;
	} else {
		return 'Please enter rock, paper, or scissors!';
	}

	let result;

	if (playerChoice === 0 && computerChoice === 0) {
		// Rock vs Rock
		result = 'Draw!';
	} else if (playerChoice === 0 && computerChoice === 1) {
		// Rock vs Paper
		result = 'Computer Wins!';
	} else if (playerChoice === 0 && computerChoice === 2) {
		// Rock vs Scissors
		result = 'You win!';
	} else if (playerChoice === 1 && computerChoice === 0) {
		// Paper vs Rock
		result = 'You win!';
	} else if (playerChoice === 1 && computerChoice === 1) {
		// Paper vs Paper
		result = 'Draw!';
	} else if (playerChoice === 1 && computerChoice === 2) {
		// Paper vs Scissors
		result = 'Computer Wins!';
	} else if (playerChoice === 2 && computerChoice === 0) {
		// Scissors vs Rock
		result = 'Computer wins!';
	} else if (playerChoice === 2 && computerChoice === 1) {
		// Scissors vs Paper
		result = 'You win!';
	} else {
		// Scissors vs Scissors
		result = 'Draw!';
	}

	// Int to string for computer's choice
	if (computerChoice === 0) {
		computerChoice = 'rock';
	} else if (computerChoice === 1) {
		computerChoice = 'paper';
	} else if (computerChoice === 2) {
		computerChoice = 'scissors';
	}

	return `
    Your Choice: ${playerChoiceString}
    Computer's Choice: ${computerChoice}
    ******* ${result} ********
    `;
};

console.log(rps('Rock'));