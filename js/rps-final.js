var userChoice;
// Math.floor = removing decimals - Math.random will generate random digits - * 3 = 3 digits ( 0, 1, 2)
var computerChoice = Math.floor(Math.random() * 3);
console.log(computerChoice);


if (computerChoice === 0) {
	computerChoice = "rock";
} else if(computerChoice === 1) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
} 
console.log("Computers choice is " + computerChoice);


// $ = calling jquery  || this = is referencing the event that called the function
$(".btn-info").click(function() {
console.log($(this).attr("id"));
userChoice = $(this).attr("id");
	});

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

