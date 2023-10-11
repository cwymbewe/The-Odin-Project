console.log("Hello Charles!");

function getComputerChoice(){
  let randomOutput = Math.floor(Math.random()*3);
  return randomOutput === 1 ? "Rock" :
        randomOutput === 2 ? "Paper" : "Scissors"
//returns a number between zero and two (inclusive)
}
// console.log(getComputerChoice());

let result;
let winCount = 0;
let loseCount = 0;
let drawCount = 0;
function playRound(){
  
  let playerChoice = prompt("Enter playerOutput");
  let playerSelection = playerChoice[0].toUpperCase().concat(playerChoice.slice(1).toLowerCase());
  let computerSelection = getComputerChoice();

  console.log(`Player => ${playerSelection} \nComputer => ${computerSelection}`)

  if((playerSelection == "Paper" && computerSelection == "Rock") ||
    (playerSelection == "Scissors" && computerSelection == "Paper") ||
    (playerSelection == "Rock" && computerSelection == "Scissors")){
      result = `You Wins! ${playerSelection} beats ${computerSelection}`;
      winCount += 1;
  } else if(playerSelection === computerSelection){
      result = `Tie!`;
      drawCount += 1;
  } else {
      result = `You Lose! ${computerSelection} beats ${playerSelection}`;
      loseCount += 1;
  }
  console.log(result);
}

function game(rounds){
  
  for(i=1 ; i<= rounds ; ++i ){
    playRound()
  }
  console.log(`Wins: ${winCount}\nDraws:${drawCount}\nLosses: ${loseCount}`);
  
  if(`${winCount}` > `${loseCount}`) {
    alert('Congrats, you won the Game!');
  } else if(`${winCount}` < `${loseCount}`) {
    alert('Sorry You lost the Game');
  } else {
    alert('It was a tie!');
  }
  // alert(`Wins: ${winCount}\nDraws:${drawCount}\nLosses: ${loseCount}`);
}

game(5);
