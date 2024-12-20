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

/*
MVP 2
Make an array with possible computer choices (rock, paper, scissors)✅
Computer generates a random number from 0 to 2✅
Use the generated number to select an object in an array✅
Link generated number to computer input✅
Then use the computer input in the function✅
*/

/*
Game loop
Encompass function in a while loop ✅
While playAgain = true ✅
Prompt user, play again? ✅
If yes, continue looping the function ✅
If no playAgain = false ✅
Break loop ✅
*/

// define the three values for the game
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

/* mvp 4
Create array containing wins, losses and draws ✅
Use this to calculate games played ✅
Print updated array after each round ✅
Present to user as Games played:   W: L: D: ✅
*/

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

//prompt user for name ✅
//store name as variable ✅
//use name in game result (Player 1) ✅
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
