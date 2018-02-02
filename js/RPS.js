var player = prompt("Choose one!");
var comp = Math.random();
if (comp < 0.34) {
	comp = "rock";
} else if (comp < 0.67) {
	comp = "paper";
} else {
	comp = "scissors";
}
document.write("Computer: " + comp);
var result = play(player, computer);
document.write("Results: " + result);

var play = function(player, computer) {
	print(comp);
	if (player == "gun") {
		return "Incredible! you win!"
	}
	if (player == computer) {
		return "Tie!";
	}
	if (player == "rock") {
		if (computer == "paper") {
			return "you lose!";
		}
		if (computer == "scissors") {
			return "you win!";
		}
	}
	if (player == "paper") {
		if (computer == "scissors") {
			return "you lose!";
		}
		if (computer == "rock") {
			return "you win!";
		}
	}
	if (player == "scissors") {
		if (computer == "paper") {
			return "you win!";
		}
		if (computer == "rock") {
			return "you lose!";
		}
	}
}

