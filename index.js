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
  let choice = prompt(`Choose your weapon: Rock, Paper, or Scissors! (best 3 out of 5)`);
  if (choice === null) {
    console.log(`Make a choice, you coward!`);
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

/**Play Round*/
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    console.log(`You win! Rock crushes Scissors! Player: ${humanScore}, Computer: ${computerScore}`);
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    console.log(`You win! Paper covers Rock! Player: ${humanScore}, Computer: ${computerScore}`);
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    console.log(`You win! Scissors cuts Paper! Player: ${humanScore}, Computer: ${computerScore}`);
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    console.log(`You lose! Rock crushes Scissors! Player: ${humanScore}, Computer: ${computerScore}`);
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    console.log(`You lose! Paper covers Rock! Player: ${humanScore}, Computer: ${computerScore}`);
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    console.log(`You lose! Scissors cuts Paper! Player: ${humanScore}, Computer: ${computerScore}`);
  } else if (humanChoice === computerChoice) {
    console.log(`It's a tie! Player: ${humanScore}, Computer: ${computerScore}`)
  } else {console.log(`Player: ${humanScore}, Computer: ${computerScore}`)};
};

/**Game loop*/
while(humanScore < 3 && computerScore < 3) {
  playRound(getHumanChoice(), getComputerChoice());
};

/**Announce winner */
if (humanScore === 3) {
  console.log(`Congratulations, you win! ${humanScore} to ${computerScore}`);
} else {
  console.log(`Too bad. Computer wins ${computerScore} to ${humanScore}`);
};

console.log(`Refresh the page to play again!`);