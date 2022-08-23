function randomNumber () {
    const max = 3;
    const min = 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {    
    const computerResult = randomNumber();
    if(computerResult === 1) {
        return "ROCK";
    } else if(computerResult === 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}
function playerSelect() {
    const getString = window.prompt("Select: Rock, Paper or Scissors?");   
    const playerChoice = getString.toUpperCase();
    
    return playerChoice;
} 
function playRound(computerSelection, playerSelection) {
    computerSelection = getComputerChoice();
    playerSelection = playerSelect();

    console.log(`computer selection: ${computerSelection}`);
    console.log(`player selection: ${playerSelection}`);
    if(computerSelection === playerSelection) {
        return "It's a Draw!";
    } else if(computerSelection === "PAPER" && playerSelection === "ROCK") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if(computerSelection === "ROCK" && playerSelection === "SCISSORS") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
        return `You lose! ${computerSelection} beats ${playerSelection}!`;
    } else if (computerSelection === "PAPER" && playerSelection === "SCISSORS") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    }
}
