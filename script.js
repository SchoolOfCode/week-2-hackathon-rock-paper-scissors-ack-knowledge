// rock, Paper, Scissors web console app 
// By: Team Ack-nowledge
// Adam Hemmings
// Charlotte Bell
// Kim Lida

// define the three values for the game
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

//scoreboard array (wins, losses, draws)
let scoreBoard = [0, 0, 0];

// array game logic
let gameChoice = ["Rock", "Paper", "Scissors"];

//while loop condition
let playAgain = false;

// Declare function
function userSelection() {
  input = prompt("Please choose Rock, Paper or Scissors");
  let computerInput = gameChoice[Math.floor(Math.random() * 3)];

  let score = input + computerInput;

  if (
    score === "RockRock" ||
    score === "ScissorsScissors" ||
    score === "PaperPaper"
  ) {
    console.log("Draw");
    scoreBoard[2]++;
    //  "Draw";
  } else if (
    score === "RockPaper" ||
    score === "PaperScissors" ||
    score === "ScissorsRock"
  ) {
    console.log("Computer wins");
    scoreBoard[1]++;
    //  "Player 2 wins";
  } else if (
    score === "RockScissors" ||
    score === "PaperRock" ||
    score === "ScissorsPaper"
  ) {
    console.log(`${userName} wins`);
    scoreBoard[0]++;
    //  "Player 1 wins";
  }
}

// ask if the user wants to play
let gameStart = prompt("Would you like to play? Please type Yes or No");
if (gameStart === "Yes") {
  playAgain = true;
}

//prompt user for name 

let userName = prompt("Please enter your name: ");

// wrap function call in while loop
while (playAgain) {
  userSelection();
  console.log(
    `Wins: ${scoreBoard[0]} Losses: ${scoreBoard[1]} Draws: ${
      scoreBoard[2]
    } Games played: ${scoreBoard[0] + scoreBoard[1] + scoreBoard[2]}`
  );
  let choice = prompt(
    "Would you like to play again? Please enter Yes or No"
  ).toLowerCase();
  if (choice === "no") {
    playAgain = false;
  }
}
