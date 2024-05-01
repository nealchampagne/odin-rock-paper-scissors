/** Display results */
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const results = document.createElement('div');
const finalScore = document.createElement('div');

document.body.appendChild(results);

/** Track scores */
let humanScore = 0;
let computerScore = 0;
results.textContent = `Player: ${humanScore}, Computer: ${computerScore}`

/** Get computer choice */
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

/** Play Round */
const playRound = (humanChoice, computerChoice) => {
  if (humanChoice === 'rock' && computerChoice === 'scissors') {
    humanScore++;
    results.textContent = `You win! Rock crushes Scissors! Player: ${humanScore}, Computer: ${computerScore}`;
  } else if (humanChoice === 'paper' && computerChoice === 'rock') {
    humanScore++;
    results.textContent = `You win! Paper covers Rock! Player: ${humanScore}, Computer: ${computerScore}`;
  } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
    humanScore++;
    results.textContent = `You win! Scissors cuts Paper! Player: ${humanScore}, Computer: ${computerScore}`;
  } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    results.textContent = `You lose! Rock crushes Scissors! Player: ${humanScore}, Computer: ${computerScore}`;
  } else if (humanChoice === 'rock' && computerChoice === 'paper') {
    computerScore++;
    results.textContent = `You lose! Paper covers Rock! Player: ${humanScore}, Computer: ${computerScore}`;
  } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    results.textContent = `You lose! Scissors cuts Paper! Player: ${humanScore}, Computer: ${computerScore}`;
  } else if (humanChoice === computerChoice) {
    results.textContent = `It's a tie! Player: ${humanScore}, Computer: ${computerScore}`
  };

  /** Display final score once one side reaches 5 points */
  if (humanScore === 5) {
    finalScore.textContent = `Congratulations, you win! Final Score: ${humanScore} to ${computerScore}. Refresh the page to play again!`;
    document.body.appendChild(finalScore);
    results.remove();
  } else if (computerScore === 5) {
    finalScore.textContent = `Too bad, Computer wins. Final Score: ${computerScore} to ${humanScore}. Refresh the page to play again!`;
    document.body.appendChild(finalScore);
    results.remove();
  };

};

/** Game events, fire while both scores are less than 5*/
rockButton.addEventListener('click', () => {
  if (humanScore < 5 && computerScore < 5) {playRound('rock', getComputerChoice())
}});
paperButton.addEventListener('click', () => {
  if (humanScore < 5 && computerScore < 5) {playRound('paper', getComputerChoice())
}});
scissorsButton.addEventListener('click', () => {
  if (humanScore < 5 && computerScore < 5) {playRound('scissors', getComputerChoice())
}});