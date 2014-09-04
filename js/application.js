var numberSol = Math.floor((Math.random() * 100) + 1);
var userGuesses = [0];
var guessCount = 0;

function answerEntry(){
		var userAnswer = $('#entry').val();
		guessCount++;
		if (!isNaN(userAnswer) && userAnswer > 0 && userAnswer < 101) {
			if (userGuesses.indexOf(userAnswer) === -1) {
				userGuesses.push(userAnswer);
				$('#userinputs').append("<li>" + userAnswer + "</li>");
				// if (numberSol > userAnswer) {
				// 	if ((numberSol - userAnswer) >= (numberSol - +userGuesses[guessCount])) {
				// 		console.log(userAnswer + " Go Higher, you're cold" + " " + numberSol)
				// 	}
				// 	else {
				// 		console.log(userAnswer + " Go Higher, you're warm" + " " + numberSol)
				// 	}
				// }
				// else if (numberSol < userAnswer) {
				// 	if ((userAnswer - numberSol) >= +userGuesses[guessCount] - numberSol) {
				// 	console.log(userAnswer + " Go lower, you're cold" + " " + numberSol)
				// 	}
				// 	else {
				// 	console.log(userAnswer + " Go lower, you're warm" + " " + numberSol)
				// 	}
				// }
				else {
					console.log("You got it! " + numberSol);
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
		$('#userinputs').append("Okay, cheater! The number is " + numberSol);
	})
);

//game reset that re-runs the number selection

$(document).ready(
	$('#reset').on('click', function() {
		numberSol = Math.floor((Math.random() * 100) + 1);
	})
);

