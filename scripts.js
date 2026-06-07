// Algorithm rock paper scissors
		//1. Write a function to allow the pc to choose a random number between 1 and 3
		function getComputerChoice(max=3, min=1){
			//Use math.random method to get a random number
			choice = Math.floor(Math.random() * (max - min + 1) + min);
			if (choice === 1){
				return "rock" 
			} else if (choice === 2){
        return "paper"
			} else if (choice === 3){
				return "scissors"
			}
		}
		console.log(getComputerChoice());