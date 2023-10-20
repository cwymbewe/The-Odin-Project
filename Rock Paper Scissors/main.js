console.log("Hello Charles!");

//FUNCTION TO GET RANDOM COMPUTER SELECTIONS
function getComputerChoice(){
  let randomOutput = Math.floor(Math.random()*3);
  return randomOutput === 1 ? "Rock" :
        randomOutput === 2 ? "Paper" : "Scissors"
//returns a number between zero and two (inclusive)
}

//BUTTONS THAT CALL THE PLAYROUND FUNCTION
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

//PLAY ROUND FUNCTION

let playerCount = 0;
let computerCount = 0;
let drawCount = 0;

function playRound(playerSelection, computerSelection) {

let result;
  console.log(`Player => ${playerSelection} \nComputer => ${computerSelection}`)
    
  if((playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Rock" && computerSelection == "Scissors")){
      result = `You Wins! ${playerSelection} beats ${computerSelection}`;
      playerCount += 1;

  } else if(playerSelection === computerSelection){
      result = `Tie!`;
      drawCount += 1;
  } else {
      result = `You Lose! ${computerSelection} beats ${playerSelection}`;
      computerCount += 1;
  }
  console.log(result);
  console.log(drawCount + ":" + playerCount + ":" + computerCount );
}

//CREATE DIV ELEMENT

const div = document.createElement("div");
div.innerHTML = `<h2>Charles' Score: ${playerCount}</h2>
                <h2>Computer's Score: ${computerCount}</h2>
                <h2>Draw Count: ${drawCount}</h2>`;
document.body.appendChild(div);

/*
function finalResult(){
  if((playerCount > computerCount) && (playerCount + drawCount + computerCount == 5)){
    alert(`Congratulations! You won the game with a score of ${playerCount}.`);
  } else {
    alert(`Sorry you lost the game with a score of ${computerCount}.`);
  }
  return true;

}

finalResult();

*/
