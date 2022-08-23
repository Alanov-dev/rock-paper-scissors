function randomNumber () {
    let max = 3;
    let min = 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getComputerChoice() {    
    let computerResult = randomNumber();
    if(computerResult === 1) {
        return "ROCK";
    } else if(computerResult === 2) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}
