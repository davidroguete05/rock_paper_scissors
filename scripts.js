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
    return result = (humanChoice === computerChoice) ? "tie":
    (humanChoice === "rock" && computerChoice === "scissors") ? "win":
    (humanChoice === "paper" && computerChoice === "rock") ? "win":
    (humanChoice === "scissors" && computerChoice === "paper") ? "win":
    "lose";
}

//4. Write a function called playGame that execute, record scores and declare a winner
/*INIT function playGame 
Declare variable humanScore
Declare variable computerScore
Declare variable roundCounter
CALL playRound
Reduce roundCounter every round
IF (roundCounter less than or equal to 0)
  IF humanScore === computerScore
    Show in the screen IT was a draw game
  ELSE IF humanScore > computerScore
    Show in the screen YOU won the game!
  ELSE
    Showw in the screen you lose the game
ELSE
  IF playRound is equal to "tie"
    Do not update scores
    alert technical tie
    CALL playround
  ELSE IF playRound is equal to "win"
    Sum 1 point to humanScore
    alert you won this round
    CALL playRound
  ELSE
    Sum 1 point to computer score
    alert you lose this option wins that option
    CALL playRound
*/ 
