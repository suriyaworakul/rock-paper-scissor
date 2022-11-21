console.log("Hello World!");

function getComputerChoice() {
	let hands = ['rock', 'paper', 'scissors'];
	let randomNum = Math.random() * hands.length;
	let roundRandomNum = Math.floor(randomNum);
	return hands[roundRandomNum];

}
//console.log(getComputerChoice());

function userHandSelection() { 
	let userHand = prompt("Which one do you choose: Rock, Paper or Scissors");
	return userHand.toLowerCase();
}

function playRound(computerSelection,playerSelection) {
	let bothHands = computerSelection.concat('v', playerSelection);

	let vRock = {'rock': 'Tie',
		'paper': 'You win!',
		'scissors': 'You lose..'
	}
	let vPaper = {'rock': 'You lose..',
		'paper': 'Tie',
		'scissors': 'You win!'
	}
	let vScissors = {'rock': 'You win!',
		'paper': 'You lose..',
		'scissors': 'Tie'
	}
	let dictAnnounceResult = {
		'rock': vRock,
		'paper': vPaper,
		'scissors': vScissors
	}

	return dictAnnounceResult[computerSelection][playerSelection]; 
}

function game() {	
	let comScore = 0;
	let playerScore = 0;
	for (let round=1; round<=5; round++) {
		let computerSelection = getComputerChoice();
		let playerSelection = userHandSelection();
		let result = playRound(computerSelection, playerSelection);
		switch (result) {
			case 'You win!':
				playerScore += 1;
				break;
			case 'You lose..':
				comScore += 1;
				break;
		}
		console.log(result);
	}
	let finalResult;
	if (comScore > playerScore) {
		finalResult = 'Computer comes out triumphant! You lose.';
	}
	else if (comScore < playerScore) {
		finalResult = 'You come out triumphant! Congratulations.';
	}
	else if (comScore == playerScore) {
		finalResult = 'Stalemate for eternity!';
	}
	
	return finalResult;
}
