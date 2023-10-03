console.log("Hello Charles!");

let rounds;
function getComputerChoice(){
  let randomOutput = Math.floor(Math.random()*3);
  return randomOutput === 1 ? "Rock" :
        randomOutput === 2 ? "Paper" : "Scissors;"
//returns a number between zero and two (inclusive)
}
console.log(getComputerChoice());


