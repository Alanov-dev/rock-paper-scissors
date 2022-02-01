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
//let playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
//let computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));
function playRound(playerSelection, computerSelection, playerPoints, computerPoints) {
    //let playerPoints;
    //let computerPoints;
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
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
function game() {    
    for(i = 0; i < 5; i++) {
        playRound();
    }
}
game();