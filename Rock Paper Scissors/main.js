console.log("Hello Charles!");

function getComputerChoice(){
  let randomOutput = Math.floor(Math.random()*3);
  return randomOutput === 1 ? "Rock" :
        randomOutput === 2 ? "Paper" : "Scissors"
//returns a number between zero and two (inclusive)
}

let playerSelection;
let computerSelection;

const rockBtn = document.createElement("button");
rockBtn.textContent = "ROCK";
document.body.appendChild(rockBtn);
rockBtn.addEventListener("click", () => {
  playerSelection = "rock";
  computerSelection = getComputerChoice();
  playRound('Rock', computerSelection);
});


const paperBtn = document.createElement("button");
paperBtn.textContent = "PAPER";
document.body.appendChild(paperBtn);
paperBtn.addEventListener("click", () => {
  playerSelection = "Paper";
  computerSelection = getComputerChoice();
  playRound('Paper', computerSelection);
});

const scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "SCISSORS";
document.body.appendChild(scissorsBtn);
scissorsBtn.addEventListener("click", () => {
  playerSelection = "Scissors";
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  
});




function playRound(playerSelection, computerSelection) {
  
  console.log(`Player => ${playerSelection} \nComputer => ${computerSelection}`)
  let result;
  
  if((playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Rock" && computerSelection == "Scissors")){
      result = `You Wins! ${playerSelection} beats ${computerSelection}`;
      
  } else if(playerSelection === computerSelection){
      result = `Tie!`;
      
  } else {
      result = `You Lose! ${computerSelection} beats ${playerSelection}`;
      
  }
  console.log(result);
}