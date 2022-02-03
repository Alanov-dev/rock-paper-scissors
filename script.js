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

    const drawP = document.createElement("p");
    const winP = document.createElement("p");
    const loseP = document.createElement("p");

    if(playerSelection === computerSelection) {
        drawP.textContent = "Draw! " + playerSelection + " and " + computerSelection + " is draw.";
        container.appendChild(drawP);
        return "draw";
    } else if(playerSelection === "ROCK" && computerSelection === "SCISSORS") {
        winP.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        container.appendChild(winP);
        return "player";
    } else if(playerSelection === "PAPER" && computerSelection === "ROCK") {
        winP.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        container.appendChild(winP);
        return "player";
    } else if(playerSelection === "SCISSORS" && computerSelection === "PAPER") {
        winP.textContent = "You win! " + playerSelection + " beats " + computerSelection;
        container.appendChild(winP);
        return "player";
    } else {
        loseP.textContent = "You lose! " + computerSelection + " beats " + playerSelection;
        container.appendChild(loseP);
        return "computer";
    }
}
function game() {    
    let playerTotal = 0;
    let computerTotal = 0;
    let round = "";

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
        round = playRound(playerSelection = "ROCK");

        if(round === "player") {
            playerTotal++;
        } else if(round === "computer"){
            computerTotal++
        }

        if(playerTotal > computerTotal && playerTotal === 5) {
            console.log("Player has " + playerTotal + " points, Player won!");
        } else if(computerTotal > playerTotal && computerTotal === 5) {
            console.log("Computer has " + computerTotal + " points, Computer won!");
        } /*else {
            console.log("Player has " + playerTotal + " points and Computer has " + 
                computerTotal + " points, it's a draw!");
        }*/
    });
    
    paperButton.addEventListener("click", () => {
        round = playRound(playerSelection = "PAPER");

        if(round === "player") {
            playerTotal++;
        } else if(round === "computer"){
            computerTotal++
        }

        if(playerTotal > computerTotal && playerTotal === 5) {
            console.log("Player has " + playerTotal + " points, Player won!");
        } else if(computerTotal > playerTotal && computerTotal === 5) {
            console.log("Computer has " + computerTotal + " points, Computer won!");
        }
    });
    
    scissorsButton.addEventListener("click", () => {
        round = playRound(playerSelection = "SCISSORS");

        if(round === "player") {
            playerTotal++;
        } else if(round === "computer"){
            computerTotal++
        }

        if(playerTotal > computerTotal && playerTotal === 5) {
            console.log("Player has " + playerTotal + " points, Player won!");
        } else if(computerTotal > playerTotal && computerTotal === 5) {
            console.log("Computer has " + computerTotal + " points, Computer won!");
        }
    });
    
    const resultDivs = document.createElement("div");
    
    container.appendChild(resultDivs);
}
game();