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
function playerSelection() {
    const getString = window.prompt("Select: Rock, Paper or Scissors?");   
    const playerChoice = getString.toUpperCase();
    
    return playerChoice;
} 
