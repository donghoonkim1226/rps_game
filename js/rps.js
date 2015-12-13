$(document).ready(function() {
	var buttonChoices = ["rock", "paper", "scissors"];
	var computerScore = "0";
	var userScore = "0";
	var gameTies = "0";
	var roundCount = "0";

	// After user click, comuputer choice will be randomized //
	
	$(".btn-info").on("click", function() {
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
		$("#userChoice").html(userChoice);
		$("#computerChoice").html(computerChoice);
		roundCount++;
		$("#roundCount").html(roundCount);
	});

	var compareChoice = function(userChoice, computerChoice) {
		if (userChoice === computerChoice) {
		alert ("Tie!");
		} else if (userChoice === "rock") {
		if (computerChoice === "scissors") {
		alert ("You win!");
		} else {
		alert ("You lose.");
		};
		} else if (userChoice === "paper") {
		if (computerChoice === "rock") {
		alert ("You win!");
		} else {
		alert ("You lose.");
		};
		} else if (userChoice === "scissors") {
		if (computerChoice === "paper") {
		alert ("You win!");
		} else {
		alert ("You lose");
		};
	};
};

});