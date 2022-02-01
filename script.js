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
function playRound(playerSelection, computerSelection, playerPoints, computerPoints) {
    //let playerPoints;
    //let computerPoints;
    if(playerSelection === computerSelection) {
        console.log("Draw! " + playerSelection + " and " + computerSelection + " is draw.");
        return 0;
    } else if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        playerPoints++;
        return playerPoints;
    } else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        playerPoints++;
        return playerPoints;
    } else if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        playerPoints++;
        return playerPoints;
    } else {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        computerPoints++;
        return computerPoints;
    }
}
const playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

function game() {
    console.log(playRound(playerSelection, computerSelection));
}
game();