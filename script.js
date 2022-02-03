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
    computerSelection = computerPlay();
    //playerSelection = prompt("Rock, Paper or Scissors?").toUpperCase();
    if(playerSelection === computerSelection) {
        console.log("Draw! " + playerSelection + " and " + computerSelection + " is draw.");
        return "draw";
    } else if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        return "player";
    } else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        return "player";
    } else if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        console.log("You win! " + playerSelection + " beats " + computerSelection);
        return "player";
    } else {
        console.log("You lose! " + computerSelection + " beats " + playerSelection);
        return "computer";
    }
}
const container = document.querySelector("#container");

const rockButton = document.createElement("button");
rockButton.classList.add('selectionButton');
rockButton.textContent = "ROCK";

const paperButton = document.createElement("button");
paperButton.classList.add("selectionButton")
paperButton.textContent = "PAPER";

const scissorsButton = document.createElement("button");
scissorsButton.classList.add("selectionButton");
scissorsButton.textContent = "SCISSORS";

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

rockButton.addEventListener("click", () => {
    playRound(playerSelection = "ROCK");
});

paperButton.addEventListener("click", () => {
    playRound(playerSelection = "PAPER");
});

scissorsButton.addEventListener("click", () => {
    playRound(playerSelection = "SCISSORS");
});

function game() {    
    let points = "";
    let playerTotal = 0;
    let computerTotal = 0;
    /*for(i = 0; i < 5; i++) {
        points = playRound();
        if(points === "player") {
            playerTotal++;
            console.log("Player points: " + playerTotal);
        }
        else if(points === "computer") {
            computerTotal++;
            console.log("Computer points: " + computerTotal);
        }        
    }*/
    if(playerTotal > computerTotal) {
        console.log("Player has " + playerTotal + " points, Player won!");
    } else if(computerTotal > playerTotal) {
        console.log("Computer has " + computerTotal + " points, Computer won!");
    } else {
        console.log("Player has " + playerTotal + " points and Computer has " + 
            computerTotal + " points, it's a draw!");
    }
}
game();