//Initial Setup
const getUserChoice = userInput => {
  userInput = prompt("Paper, Rock, or Scissors? ");
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' ||
    userInput === 'paper' ||
    userInput === 'scissors' ||
    userInput === 'bomb') {
    return userInput;
  } else {
    console.log('ERROR!');
  }
}

//Build Computer RNG responses
function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
  }
}

//Building Winner Determination Function
function determineWinner(userChoice, computerChoice) {
  if (userChoice === 'bomb') {
    return 'You win!';
  }
  if (userChoice === computerChoice) {
    return 'Its a tie!';
  }
  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
  if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer won';
    } else {
      return 'You won!'
    }
  }
  if (userChoice === 'scissors') {
    if (computerChoice === 'rock') {
      return 'The computer won!';
    } else {
      return 'You won!';
    }
  }
}

//Preparing to play the game
const playGame = () => {
  prompt('Paper, Rock, or Scissors?  ');

  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  alert('You threw: ' + userChoice);
  alert('The computer threw: ' + computerChoice);
  alert(determineWinner(userChoice, computerChoice));
}

//Play the game
playGame();
