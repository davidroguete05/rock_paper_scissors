// Algorithm rock paper scissors

//Declare variables for both human and computer scores

let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

//1. Write a function to allow the pc to choose a random number between 1 and 3
function getComputerChoice(max=3, min=1){
  //Use math.random method to get a random number
  choice = Math.floor(Math.random() * (max - min + 1) + min);
  if (choice === 1){
    return "rock";
  } else if (choice === 2){
    return "paper";
  } else if (choice === 3){
    return "scissors";
  }
}

//2. Write a function to allow the user to choose among the three options rock paper or scissors
function getHumanChoice(){
  let humanChoice = prompt("rock, paper or scissors? ").toLowerCase(); //Make user input case-insensitive
  return humanChoice;
}

//3.Write the logic for a single round
//SET function playRound with two parameters humanChoice and computerChoice
function playRound(humanChoice, computerChoice){
  if(humanChoice === computerChoice){
    console.log("It's a tie!");
  } else if(humanChoice === "rock" && computerChoice === "scissors"){
    console.log(`You won ${humanChoice} beats ${computerChoice}!`);
  } else if(humanChoice === "paper" && computerChoice === "rock"){
    console.log(`You won ${humanChoice} beats ${computerChoice}!`);
  } else if(humanChoice === "scissors" && computerChoice === "paper"){
    console.log(`You won ${humanChoice} beats ${computerChoice}!`);
  } else {
    console.log(`You lose ${computerChoice} beats ${humanChoice}!`);
  }
}
playRound(humanSelection, computerSelection);
//playRound function will console.log a string representing the winner
//Increment the humanScore or computerScore variable based on the round winner