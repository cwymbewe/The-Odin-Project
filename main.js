console.log("Hello Charles!");

function getComputerChoice(){
  let randomOutput = Math.floor(Math.random()*3);
  return randomOutput === 1 ? "Rock" :
        randomOutput === 2 ? "Paper" : "Scissors;"
//returns a number between zero and two (inclusive)
}
// console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
  return (playerSelection == "Rock" && computerSelection == "Paper") || 
        (playerSelection == "Paper" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Rock") ? 
          `You Lose! ${computerSelection} beats ${playerSelection}`:
        (playerSelection === computerSelection) ? "Tie" : 
          `You Win! ${playerSelection} beats ${computerSelection}`;
          
}
const playerChoice = prompt("Enter playerOutput");
const playerSelection = playerChoice[0].toUpperCase().concat(playerChoice.slice(1).toLowerCase());
const computerSelection = getComputerChoice();
console.log(`${playerSelection} and ${computerSelection}`);
alert(`Player chose ${playerSelection}, Computer chose ${computerSelection}.\n${playRound(playerSelection, computerSelection)}`);
console.log(playRound(playerSelection, computerSelection));
