function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];

    return choice = choices[Math.floor(Math.random()* choices.length)];
}



let result;
let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection,computerSelection){
    playerSelection = prompt("").toLowerCase();
    computerSelection = getComputerChoice();
    
    if (playerSelection == null || playerSelection == ''){
        result = "pick something dummy"
    }

    if (playerSelection === computerSelection){
        result = "It's a draw";
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        result = "Computer gets a point!";
    } else {
        result = "Player gets a point!";
    }

    if (playerSelection === computerSelection){
        playerScore += 0
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
    } else {
        playerScore++;
    }    

    console.log(playerScore + " " +computerScore);
    return window.alert(result);
}

function game() {
    let winner;

    for (i = 0;i <= 5;i++){
        playRound();
    }

    if (computerScore > playerScore){
        winner = "Computer is the victor";
    } else if (playerScore > computerScore){
        winner = "Player is the victor";
    }

    return window.alert(winner);
}

game();