var loses = 0;
var wins = 0;
			
var play = function(userChoice) {
					
					document.getElementById("player").innerHTML="";
					document.getElementById("opponent").innerHTML="";
					document.getElementById("results").innerHTML="";
				
					
					if (userChoice == "rock" || userChoice == "paper" || userChoice == "scissors") {
						document.getElementById("player").innerHTML='You chose' + ' ' + userChoice + '.';
					} else if (userChoice == "rope") {
						document.getElementById("player").innerHTML='You chose' + ' ' + userChoice + '. <br />Well aren\'t you a smarty pants.';
					} else {
						document.getElementById("player").innerHTML="That is not a valid choice, try again.";
						
						return false;
					}
				
					var computerChoice = Math.random();
					if (computerChoice < 0.34) {
						computerChoice = "rock";
					} else if(computerChoice <= 0.67) {
						computerChoice = "paper";
					} else {
						computerChoice = "scissors";
					}
				 
				 	document.getElementById("opponent").innerHTML='// Your opponent chose' + ' ' + computerChoice + '.';
				 
					 var compare = function (choice1,choice2) {
						if (choice1 == choice2) {
							return "The result is a tie!";
						} else if (choice1 == "rock"){
							if (choice2 =="scissors") {
								wins++;
								return "rock wins. rock on.";
							} else {
								loses++;
								return "sorry. paper wins.";
							}
						} else if (choice1 == "paper") {
							if (choice2 == "rock") {
								wins++;
								return "paper wins";
							} else {
								loses++;
								return "sorry. scissors win.";
							}
						} else if (choice1 == "scissors") {
							if (choice2 == "rock") {
								loses++;
								return "sorry. rock wins";
							} else {
								wins++;
								return "scissors win";
							}
						} else if (choice1 == "rope") {
							wins++;
							return "rope FTW";
						} else {
							return "error. bummer dude. game over. no dice.";
						}
					};

					var winner = compare(userChoice,computerChoice);
					document.getElementById("results").innerHTML=winner;
					document.getElementById("wins").innerHTML=wins;
					document.getElementById("loses").innerHTML=loses;
					
					if (wins > 99 || loses > 99) {
						document.getElementById("wins").style.fontSize="44";
						document.getElementById("loses").style.fontSize="44";
					}
					if (wins > 999) {
						alert("You reached the max score of 999. <br />Congratulations, you have no life.");
					}
					if (loses > 999) {
						alert("Your opponent reached the max score of 999. <br />We're sorry, you have no life.");
					}
			};

var reset = function() {
	loses = 0;
	wins = 0;
	document.getElementById("wins").innerHTML=wins;
	document.getElementById("loses").innerHTML=loses;
};




var playerW = 0;
var compW = 0;
var ties = 0;
var pChoice;
var message;
var scoreboard;

function rock() {
	pChoice = 1;
	var comp = Math.floor(Math.random() * 3 + 1);

	if (comp == pChoice) {
		message.html('').append("Tie! Computer chose rock.");
		ties++;
		$('#ties').html('').append(ties);
	}
	else if (comp == 2) {
		message.html('').append("You Lost! Computer chose paper.");
		compW++;
		$('#losses').html('').append(compW);
	}
	else {
		message.html('').append("You Won! Computer chose scissors.");
		playerW++;
		$('#wins').html('').append(playerW);
	}
}

function paper() {
	pChoice = 2;
	var comp = Math.floor(Math.random() * 3 + 1);

	if (comp == pChoice) {
		message.html('').append("Tie! Computer chose paper.");
		ties++;
		$('#ties').html('').append(ties);
	}
	else if (comp == 3) {
		message.html('').append("You Lost! Computer chose scissors.");
		compW++;
		$('#losses').html('').append(compW);
	}
	else {
		message.html('').append("You Won! Computer chose rock.");
		playerW++;
		$('#wins').html('').append(playerW);
	}
}

function scissors() {
	pChoice = 3;
	var comp = Math.floor(Math.random() * 3 + 1);

	if (comp == pChoice) {
		message.html('').append("Tie! Computer chose scissors.");
		ties++;
		$('#ties').html('').append(ties);
	}
	else if (comp == 1) {
		message.html('').append("You Lost! Computer chose rock.");
		compW++;
		$('#losses').html('').append(compW);
	}
	else {
		message.html('').append("You Won! Computer chose paper.");
		playerW++;
		$('#wins').html('').append(playerW);
	}
}


function reset() {
  playerW = 0;
  $('#wins').html(playerW);
  ties = 0;
  $('#ties').html(ties);
  compW = 0;
  $('#losses').html(compW);
}
