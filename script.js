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
        const roundP = document.createElement("p");

        if(round === "player") {
            playerTotal++;
            roundP.textContent = "Player won! Player has: " + playerTotal;
            container.appendChild(roundP);
        } else if(round === "computer"){
            computerTotal++;
            roundP.textContent = "Computer won! Computer has: " + computerTotal;
            container.appendChild(roundP);
        }

        if(playerTotal > computerTotal && playerTotal === 5) {
            roundP.textContent = "Victory for the Player! Player accumulated 5 points!";
        } else if(computerTotal > playerTotal && computerTotal === 5) {
            roundP.textContent = "Victory for the Computer! Computer accumulated 5 points!";
        }
    });
    
    paperButton.addEventListener("click", () => {
        round = playRound(playerSelection = "PAPER");
        const roundP = document.createElement("p");

        if(round === "player") {
            playerTotal++;
            roundP.textContent = "Player won! Player has: " + playerTotal;
            container.appendChild(roundP);
        } else if(round === "computer"){
            computerTotal++;
            roundP.textContent = "Computer won! Computer has: " + computerTotal;
            container.appendChild(roundP);
        }

        if(playerTotal > computerTotal && playerTotal === 5) {
            roundP.textContent = "Victory for the Player! Player accumulated 5 points!";
        } else if(computerTotal > playerTotal && computerTotal === 5) {
            roundP.textContent = "Victory for the Computer! Computer accumulated 5 points!";
        }
    });
    
    scissorsButton.addEventListener("click", () => {
        round = playRound(playerSelection = "SCISSORS");
        const roundP = document.createElement("p");

        if(round === "player") {
            playerTotal++;
            roundP.textContent = "Player won! Player has: " + playerTotal;
            container.appendChild(roundP);
        } else if(round === "computer"){
            computerTotal++;
            roundP.textContent = "Computer won! Computer has: " + computerTotal;
            container.appendChild(roundP);
        }

        if(playerTotal > computerTotal && playerTotal === 5) {
            roundP.textContent = "Victory for the Player! Player accumulated 5 points!";
        } else if(computerTotal > playerTotal && computerTotal === 5) {
            roundP.textContent = "Victory for the Computer! Computer accumulated 5 points!";
        }
    });
    
    const resultDivs = document.createElement("div");
    
    container.appendChild(resultDivs);
}
game();