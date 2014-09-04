var numberSol = Math.floor((Math.random() * 100) + 1);
var userGuesses = [0];
var guessCount = 0;

function answerEntry(){
		var userAnswer = $('#entry').val();
		guessCount++;
		if (!isNaN(userAnswer) && userAnswer > 0 && userAnswer < 101) {
			if (userGuesses.indexOf(userAnswer) === -1) {
				userGuesses.push(userAnswer);
				if (guessCount < 5 && numberSol > userAnswer) {
					if ((numberSol - userAnswer) >= (numberSol - +userGuesses[guessCount-1])) {
						$("#user-data").append(userAnswer + "<br>You're cold, go higher... only " + (5 - guessCount) + " guess(es) left!" + "<br><br>")
					}
					else {
						$("#user-data").append(userAnswer + "<br><br>You're warm, go higher... only " + (5 - guessCount) + " guess(es) left!" + "<br><br>")
					}
				}
				else if (guessCount < 5 && numberSol < userAnswer) {
					if (Math.abs(userAnswer - numberSol) >= Math.abs(+userGuesses[guessCount-1] - numberSol)) {
					$("#user-data").append(userAnswer + "<br><br>You're cold, go lower... only " + (5 - guessCount) + " guess(es) left!" +  "<br><br>")
					}
					else {
					$("#user-data").append(userAnswer + "<br><br>You're warm, go lower... only " + (5 - guessCount) + " guess(es) left!" +  "<br><br>")
					}
				}
				else if (guessCount <= 5 && numberSol == userAnswer) {
					$("#user-data").append("<h3>You got it! The answer is " + numberSol + "!</h3> <br>");
					$('#success').fadeIn();
				}
				else {
					$('#user-data').append("<h3>Sorry. <br>You didn't get it within 5 guesses. <br>Better luck next time!</h3> <br>The answer was " + numberSol + ".");
					$('#entry-box').fadeOut();
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

//user asks for hint, let's chide them but let them keep playing, regardless

$(document).ready(
	$('#help').on('click', function() {
		$('#user-data').append("Okay, cheater! The number is " + numberSol + ".<br> Try and get it yourself next time! :p <br><br>");
	})
);

//game reset that re-runs the number selection

$(document).ready(
	$('#reset').on('click', function() {
		numberSol = Math.floor((Math.random() * 100) + 1);
		userGuesses = [0];
		$('#user-data').empty();
		$('#entry-box').fadeIn();
	})
);

