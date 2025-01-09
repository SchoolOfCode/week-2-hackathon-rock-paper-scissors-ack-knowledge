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

// //while loop condition
// let playAgain = false;

document.getElementById('start-button').addEventListener('click', startGame);
document.getElementById('best-of-3-button').addEventListener('click', () => selectGameMode(3));
document.getElementById('best-of-5-button').addEventListener('click', () => selectGameMode(5));
document.getElementById('play-again-button').addEventListener('click', resetGame);
document.getElementById('end-game-button').addEventListener('click', endGame);

let userName;
let gameMode;
let playerWins = 0;
let npcWins = 0;
let roundsPlayed = 0;

function startGame() {
    userName = document.getElementById('user-name-input').value;
    if (userName.trim() === '') {
        alert('Please enter your name');
        return;
    }

    document.getElementById('user-name-display').textContent = `Player: ${userName}`;
    document.getElementById('start-menu').style.display = 'none';
    document.getElementById('game-mode-menu').style.display = 'block';
}

function selectGameMode(mode) {
    gameMode = mode;
    document.getElementById('game-mode-menu').style.display = 'none';
    document.getElementById('game-container').style.display = 'block';
}

function makeChoice(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const npcChoice = choices[Math.floor(Math.random() * choices.length)];

    updateChoiceImages(playerChoice, npcChoice);

    let result;
    if (playerChoice === npcChoice) {
        result = 'Draw';
    } else if (
        (playerChoice === 'rock' && npcChoice === 'scissors') ||
        (playerChoice === 'paper' && npcChoice === 'rock') ||
        (playerChoice === 'scissors' && npcChoice === 'paper')
    ) {
        result = 'Player wins';
        playerWins++;
    } else {
        result = 'NPC wins';
        npcWins++;
    }

    roundsPlayed++;
    document.getElementById('result-display').textContent = result;

    if (playerWins === Math.ceil(gameMode / 2) || npcWins === Math.ceil(gameMode / 2) || roundsPlayed === gameMode) {
        endGame();
    }
}

function updateChoiceImages(playerChoice, npcChoice) {
    const playerImg = document.getElementById('player-img');
    const npcImg = document.getElementById('npc-img');

    const choices = {
        rock: 'rock.png',
        paper: 'paper.png',
        scissors: 'scissors.jpg'
    };

    playerImg.src = choices[playerChoice];
    npcImg.src = choices[npcChoice];
}

function endGame() {
    document.getElementById('game-container').style.display = 'none';
    document.getElementById('post-game-menu').style.display = 'block';

    let finalResult;
    if (playerWins > npcWins) {
        finalResult = `${userName} wins the game!`;
    } else if (npcWins > playerWins) {
        finalResult = 'NPC wins the game!';
    } else {
        finalResult = 'The game is a draw!';
    }

    document.getElementById('final-result').textContent = finalResult;
}

function resetGame() {
    playerWins = 0;
    npcWins = 0;
    roundsPlayed = 0;
    document.getElementById('post-game-menu').style.display = 'none';
    document.getElementById('start-menu').style.display = 'block';
}
