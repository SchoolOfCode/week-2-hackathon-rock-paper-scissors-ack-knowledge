
// User input stored as a perimeter of a variable✅


// Variable with static value for computer input ✅


// If statement userinput + computerinput ===
// R > S return player 1 wins
// S > P return player 1 wins
// P > R return player 1 wins
// R < P return player 2 wins
// S < R return player 2 wins
// P < S return player 2 wins
// When ===  return draw

// defines the three values for the game 
let rock = "Rock";
let paper = "Paper";
let scissors = "Scissors";

// user input and game logic for rock, paper, scissors
function userSelection(input) {


    let computerInput = "Rock";
    let score = input + computerInput;


    if (score === "RockRock") {
        return "Draw"
    } else if (score === "Rockpaper") {
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
























