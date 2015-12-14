$(document).ready(function() {
	var buttonChoices = ["rock", "paper", "scissors"];
	var computerScore = "0";
	var userScore = "0";
	var roundCount = "0";

	// After user click, comuputer choice will be randomized //
	
	$(".btn-default").on("click", function() {
		var computerChoice = Math.floor(Math.random() * 3);
		console.log(buttonChoices[computerChoice]) 
		if (computerChoice === 0) {
		computerChoice = "rock";
		} else if(computerChoice === 1) {
		computerChoice = "paper";
		} else {
		computerChoice = "scissors";
		}; 

		var userChoice = $(this).data("choice")
		console.log(userChoice)
		compareChoice(userChoice, computerChoice);

	});

	var compareChoice = function(userChoice, computerChoice) {
		if (userChoice === computerChoice) {
			tie();
		} else if (userChoice === "rock") {
			if (computerChoice === "scissors") {
			userWin();
			roundUp();
		} else {
			computerWin();
			roundUp();
		};
		} else if (userChoice === "paper") {
			if (computerChoice === "rock") {
				userWin();
				roundUp();
		} else {
			computerWin();
			roundUp();
		};
		} else if (userChoice === "scissors") {
			if (computerChoice === "paper") {
				userWin();
				roundUp();
		} else {
			computerWin();
			roundUp();
		};
	};
};
	

	function tie() {
		$("#game-screen").html("DRAW!");
	};

	function userWin() {
		userScore++;
		console.log(userScore);
		$("#userScore").html(userScore);
		$("#game-screen").html("USER WIN!");
	};

	function computerWin() {
		computerScore++;
		console.log(computerScore);
		$("#computerScore").html(computerScore);
		$("#game-screen").html("COMPUTER WIN!");
	};

	function roundUp() {
		roundCount++;
		console.log(roundCount);
		$("#roundCount").html(roundCount);
	};



});