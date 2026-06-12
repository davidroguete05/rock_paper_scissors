// Game rock paper scissors

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
    if (humanChoice === computerChoice){
      console.log("It's a tie!");
      return "tie";
    } else if(humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You win ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
        return "win";
      } else{
        console.log(`You lose ${computerChoice} beats ${humanChoice}!`)
          computerScore++;
          return "lose";
        }
}

//4.Write the logic to play the game including playRound within it
function playGame(){
  function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
      console.log("It's a tie!");
      return "tie";
    } else if(humanChoice === "rock" && computerChoice === "scissors" ||
      humanChoice === "paper" && computerChoice === "rock" ||
      humanChoice === "scissors" && computerChoice === "paper"){
        console.log(`You win ${humanChoice} beats ${computerChoice}!`);
        humanScore++;
        return "win";
      } else{
        console.log(`You lose ${computerChoice} beats ${humanChoice}!`)
          computerScore++;
          return "lose";
        }
}
  let humanScore = 0;
  let computerScore = 0;
  playRound(getHumanChoice(),getComputerChoice())
  playRound(getHumanChoice(),getComputerChoice())
  playRound(getHumanChoice(),getComputerChoice())
  playRound(getHumanChoice(),getComputerChoice())
  playRound(getHumanChoice(),getComputerChoice())
  if (humanScore === computerScore){
    console.log("There was no winner...Its a tie!")
  } else if (humanScore > computerScore){
    console.log(`You won by "skills" ${humanScore} to ${computerScore}`)
  } else{
    console.log(`You were fool by randomness ${computerScore} to ${humanScore}`)
  }
}
playGame()