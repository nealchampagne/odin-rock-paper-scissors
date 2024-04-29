/**Get computer choice*/
const getComputerChoice = () => {
  let choice = Math.random() * 3;
  if (0 <= choice && choice < 1) {
    return 'rock';
  } else if (1 <= choice && choice < 2) {
    return 'paper';
  } else {
    return 'scissors';
  };
};

/**Get human choice*/
const getHumanChoice = () => {
  let keepGoing = true;
  while (keepGoing) {
  let choice = prompt('Choose your weapon: Rock, Paper, or Scissors!');
  if (choice === null) {
    console.log(`That's right, run away, you coward!`);
    break;
  } else {choice = choice.toLowerCase()};

  if (choice === 'rock'){
    return choice;
    break;
  } else if (choice === 'paper'){
    return 'paper';
    break;
  } else if (choice === 'scissors'){
    return 'scissors';
    break;
  } else {
    console.log('Invalid Choice: Please choose a valid option.');
  }
}};

/**Track scores*/
let humanScore = 0;
let computerScore = 0;

/**Game loop*/
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    console.log(`You win! Rock crushes Scissors!`);
    humanScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    console.log(`You win! Paper covers Rock!`);
    humanScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    console.log(`You win! Scissors cuts Paper!`);
    humanScore++;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    console.log(`You lose! Rock crushes Scissors!`);
    computerScore++;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    console.log(`You lose! Paper covers Rock!`);
    computerScore++;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    console.log(`You lose! Scissors cuts Paper!`);
    computerScore++;
  } else {console.log(`It's a tie!`)};
};