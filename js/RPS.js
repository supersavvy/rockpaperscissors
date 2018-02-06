var playerW = 0;
var compW = 0;
var ties = 0;
var pChoice;
var message;
var scoreboard;

$('.rock').click(function() {
	pChoice = 1;
	var comp = Math.floor(Math.random() * 3 + 1);

	if (comp == pChoice) {
		message.html('').append("Tie! Computer chose rock.");
		ties++;
		$('#ties').html('').append(ties);
	});
	else if (comp == 2) {
		message.html('').append("You Lost! Computer chose paper.");
		compW++;
		$('#losses').html('').append(compW);
	});
	else {
		message.html('').append("You Won! Computer chose scissors.");
		playerW++;
		$('#wins').html('').append(playerW);
	});
});

$('.paper').click(function() {
	pChoice = 2;
	var comp = Math.floor(Math.random() * 3 + 1);

	if (comp == pChoice) {
		message.html('').append("Tie! Computer chose paper.");
		ties++;
		$('#ties').html('').append(ties);
	});
	else if (comp == 3) {
		message.html('').append("You Lost! Computer chose scissors.");
		compW++;
		$('#losses').html('').append(compW);
	});
	else {
		message.html('').append("You Won! Computer chose rock.");
		playerW++;
		$('#wins').html('').append(playerW);
	});
});

$('.scissors').click(function() {
	pChoice = 3;
	var comp = Math.floor(Math.random() * 3 + 1);

	if (comp == pChoice) {
		message.html('').append("Tie! Computer chose scissors.");
		ties++;
		$('#ties').html('').append(ties);
	});
	else if (comp == 1) {
		message.html('').append("You Lost! Computer chose rock.");
		compW++;
		$('#losses').html('').append(compW);
	});
	else {
		message.html('').append("You Won! Computer chose paper.");
		playerW++;
		$('#wins').html('').append(playerW);
	});
});



$('#reset').click(function() {
  playerW = 0;
  $('#wins').html(playerW);
  ties = 0;
  $('#ties').html(ties);
  compW = 0;
  $('#losses').html(compW);
});
