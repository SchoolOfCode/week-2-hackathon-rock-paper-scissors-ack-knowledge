// User input stored as a perimeter of a variable✅

// Variable with static value for computer input ✅

/* MVP 1
If statement userinput + computerinput ===
R > S 
 player 1 wins
S > P 
 player 1 wins
P > R 
 player 1 wins
R < P 
 player 2 wins
S < R 
 player 2 wins
P < S 
 player 2 wins
When ===  
 draw
*/
//MVP 2

//Make an array with possible computer choices (rock, paper, scissors)✅
//Computer generates a random number from 0 to 2✅
//Use the generated number to select an object in an array✅
//Link generated number to computer input✅
//Then use the computer input in the function✅
//Game loop

// Encompass function in a while loop ✅
// While playAgain = true ✅
// Prompt user, play again? ✅
// If yes, continue looping the function ✅
// If no playAgain = false ✅
// Break loop ✅

// define the three values for the game
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

// array
let gameChoice = ["Rock", "Paper", "Scissors"];
let playAgain = false;

// ask if the user wants to play
let gameStart = prompt("Would you like to play? Please type Yes or No");
if (gameStart === "Yes") {
  playAgain = true;
}

// Declare function
function userSelection() {
  input = prompt("Please choose Rock, Paper or Scissors");
  let computerInput = gameChoice[Math.floor(Math.random() * 3)];

  let score = input + computerInput;

  if (score === "RockRock") {
    console.log("Draw");
    //  "Draw";
  } else if (score === "RockPaper") {
    console.log("Player 2 wins");
    //  "Player 2 wins";
  } else if (score === "RockScissors") {
    console.log("Player 1 wins");
    //  "Player 1 wins";
  } else if (score === "PaperPaper") {
    console.log("Draw");
    //  "Draw";
  } else if (score === "PaperScissors") {
    console.log("Player 2 wins");
    //  "Player 2 wins";
  } else if (score === "PaperRock") {
    console.log("Player 1 wins");
    //  "Player 1 wins";
  } else if (score === "ScissorsScissors") {
    console.log("Draw");
    //  "Draw";
  } else if (score === "ScissorsRock") {
    console.log("Player 2 wins");
    //  "Player 2 wins";
  } else if (score === "ScissorsPaper") {
    console.log("Player 1 wins");
    //  "Player 1 wins";
  }
}

// wrap function call in while loop
while (playAgain === true) {
  userSelection();
  let choice = prompt(
    "Would you like to play again? Please enter Yes or No"
  ).toLowerCase();
  if (choice === "no") {
    playAgain = false;
  }
}
