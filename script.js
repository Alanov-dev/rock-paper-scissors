function computerPlay() {
    function random(max) {
        return Math.floor(Math.random() * max);
    } 
    let computerResult = random(3);
    if(computerResult === 0) {
        return "ROCK";
    } else if(computerResult === 1) {
        return "PAPER"
    } else {
        return "SCISSORS";
    }
}
function playRound(playerSelection, computerSelection) {
    if(playerSelection === computerSelection) {
        return "Draw! " + playerSelection + " and " + computerSelection + " is draw.";
    } else if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        return "You win! " + playerSelection + " beats " + computerSelection;
    } else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}
const playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));