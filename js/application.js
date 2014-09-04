var numberSol = Math.floor((Math.random() * 100) + 1);
var userGuesses = [0];
var guessCount = 0;

function answerEntry(){
		var userAnswer = $('#entry').val();
		guessCount++;
		if (!isNaN(userAnswer) && userAnswer > 0 && userAnswer < 101) {
			if (userGuesses.indexOf(userAnswer) === -1) {
				userGuesses.push(userAnswer);
				if (numberSol > userAnswer) {
					if ((numberSol - userAnswer) >= (numberSol - +userGuesses[guessCount-1])) {
						$("#user-data").append(userAnswer + ": You're cold, go higher" + "<br>")
					}
					else {
						$("#user-data").append(userAnswer + ": You're warm, go higher" + "<br>")
					}
				}
				else if (numberSol < userAnswer) {
					if (Math.abs(userAnswer - numberSol) >= Math.abs(+userGuesses[guessCount-1] - numberSol)) {
					$("#user-data").append(userAnswer + ": You're cold, go lower" + "<br>")
					}
					else {
					$("#user-data").append(userAnswer + ": You're warm, go lower" + "<br>")
					}
				}
				else {
					$("#user-data").append("<h3>You got it! The answer is " + numberSol + "!</h3> <br>");
					$('#success').fadeIn();
				}
			}
			else {alert("You guessed that already!")}
		}
		else {alert("Not a valid number, boss!")}
	};

//if button is clicked, submit virtual form and run answer function

$(document).ready(
	$('#submit-answer').on('click', answerEntry)
);

//if enter is hit within the entry box, simulate a form submit, run answer function

$(document).ready(
	$('#entry').keydown(
		function(x){
			if (x.keyCode === 13) {
				answerEntry();
			};
		})
);

$(document).ready(
	$('#help').on('click', function() {
		$('#user-data').append("Okay, cheater! The number is " + numberSol);
	})
);

//game reset that re-runs the number selection

$(document).ready(
	$('#reset').on('click', function() {
		numberSol = Math.floor((Math.random() * 100) + 1);
		userGuesses = [0];
		$('#user-data').empty();
	})
);

