//global variables 

var playerScore = 0;
var compScore = 0;


document.getElementById('rock').onclick=pRock;
document.getElementById('paper').onclick=pPaper;
document.getElementById('scissors').onclick=pScissors;
document.getElementById('reset').onclick=reset;
// var ties = 0;
// var pChoice;
// var message;
// var scoreboard;
function pRock() {
  game('rock');
}

function pPaper() {
  game('paper');
}

function pScissors() {
  game('scissors');
}

function compPlay() {
	var compChoice;
	var comp = Math.floor(Math.random() * 3 + 1);
	if (comp == 1) {
		compChoice == 'rock';
	}
	else if (comp == 2) {
		compChoice == 'paper';
	}
	else {
		compChoice == 'scissors';
	}
	return compChoice;
}

function game(playerChoice) {
	var compChoice = compPlay();
  //Outputs the user and comp choices after user selects a move
  document.getElementById('pResult').innerHTML = 'You: ' + playerChoice;
  document.getElementById('cResult').innerHTML = 'Computer: ' +  compChoice;
   
  //Three sets of nested if-else statements for when user picks rock, paper, or scissors
  if (playerChoice == 'rock') {
    if (compChoice == 'rock') {
    document.getElementById('winner').innerHTML = "It's a tie!"; 
    }
    
    else if (compChoice == 'paper') {
      document.getElementById('winner').innerHTML = "Computer wins!"; 
      compScore++;
    }
    
    else if (compChoice == 'scissors') {
      document.getElementById('winner').innerHTML = "You win!"; 
      playerScore++;
    }
    
  }
  
  else if (playerChoice == 'paper') {
    if (compChoice == 'paper') {
    document.getElementById('winner').innerHTML = "It's a tie!";   
    }
    
    else if (compChoice == 'rock') {
      document.getElementById('winner').innerHTML = "You win!"; 
      playerScore++;
    }
    
    else if (compChoice == 'scissors') {
      document.getElementById('winner').innerHTML = "Computer wins!"; 
      compScore++;
    }
  }
  
  else if (playerChoice == 'scissors') {
    if (compChoice == 'scissors') { 
    document.getElementById('winner').innerHTML = "It's a tie!"; 
    }
    
    else if (compChoice == 'rock') {
      document.getElementById('winner').innerHTML = "Computer wins!"; 
      compScore++;
    }
    
    else if (compChoice == 'paper') {
      document.getElementById('winner').innerHTML = "You win!"; 
      playerScore++;
    }
  }  
  
//Links the user and comp points in the HTML table to the global variables. This comes after the if-else statements, because we want the score to update only after the moves have been selected. 
 document.getElementById('playerScore').innerHTML = playerScore;
 document.getElementById('compScore').innerHTML = compScore;  
  
};

function reset() {
 playerScore = 0;
 compScore = 0;
 document.getElementById('playerScore').innerHTML = playerScore;
 document.getElementById('compScore').innerHTML = compScore;  
};
