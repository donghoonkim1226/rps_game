$(document).ready(function() {
	var buttonChoices = ["Rock", "Paper", "Scissors"];

	function randomButton() {
		var randomSign = Math.floor(Math.random() * buttonChoices.length);
		$(".btn-info").html(buttonChoices[randomSign]).attr("data-selection", randomSign);
	}

	$(".btn-info").on("click", function() {
		alert ("this is working")
		var computerChoice = Math.floor(Math.random() * buttonChoices.length);
		var userChoice = parseInt($(this).attr("data-selection"));

		if(computerChoice === userChoice) {
			$(".modal-body").html("Draw! No one wins!");
		} else if(computerChoice === 0 && userChoice === 1) {
			$(".modal-body").html("Computer Wins! You lose!");
		} else {
			$(".modal-body").html("You win!");
		}	
		});

		randomButton();
	});

	randomButton();
});