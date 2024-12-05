
// User input stored as a perimeter of a variable✅


// Variable with static value for computer input ✅

//MVP 1
// If statement userinput + computerinput ===
// R > S return player 1 wins
// S > P return player 1 wins
// P > R return player 1 wins
// R < P return player 2 wins
// S < R return player 2 wins
// P < S return player 2 wins
// When ===  return draw

//MVP 2

//Make an array with possible computer choices (rock, paper, scissors)✅
//Computer generates a random number from 0 to 2✅
//Use the generated number to select an object in an array✅
//Link generated number to computer input✅
//Then use the computer input in the function✅
//Game loop


// defines the three values for the game 
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

//array
let gameChoice = ["Rock", "Paper", "Scissors"];


// user input and game logic for rock, paper, scissors
function userSelection(input) {


    let computerInput = gameChoice[Math.floor(Math.random() * 3)];
    let score = input + computerInput;

    

    if (score === "RockRock") {
        return "Draw"
    } else if (score === "RockPaper") {
        return "Player 2 wins"
    } else if (score === "RockScissors") {
        return "Player 1 wins"
    } else if (score === "PaperPaper") {
        return "Draw"
    } else if (score === "PaperScissors") {
        return "Player 2 wins"
    } else if (score === "PaperRock") {
        return "Player 1 wins"
    } else if (score === "ScissorsScissors") {
        return "Draw"
    } else if (score === "ScissorsRock") {
        return "Player 2 wins"
    } else if (score === "ScissorsPaper") {
        return "Player 1 wins"
    }
};
























