console.log("Hello Charles!");

function getComputerChoice(){
  let randomOutput = Math.floor(Math.random()*3);
  return randomOutput === 1 ? "Rock" :
        randomOutput === 2 ? "Paper" : "Scissors;"
//returns a number between zero and two (inclusive)
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection){
  return (playerChoice == "Rock" && computerSelection == "Paper") ? "You Lose! Paper beats Rock" :
          (playerChoice == "Paper" && computerSelection == "Scissors") ? "You Lose! Scissors beats Paper" :
          (playerChoice == computerSelection) ? "Tie!" :
          "You Win! "+computerSelection+" beats "+playerSelection;
}
const playerSelection = prompt("Enter playerOutput");
const playerChoice = playerSelection[0].toUpperCase().concat(playerSelection.slice(1).toLowerCase());
const computerSelection = getComputerChoice();
console.log(playRound());
// console.log(playerChoice);