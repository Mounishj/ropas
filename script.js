console.log("Testing the link of the script file");

function getComputerChoice () {
    let randomNumber = Math.floor(Math.random()*3 +1);
    if (randomNumber === 1){
        return "rock"
    } else if (randomNumber === 2) {
        return "paper"
    } else{
        return "scissors"
    }
}
   /* let playerSelection = prompt("Enter a value :");
    playerSelection = playerSelection.toLowerCase();
    console.log(playerSelection);

    let computerSelection = getComputerChoice();
    console.log("Computer selection is : " + computerSelection);
    */
 function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return  "It's a tie"
    } else if (
        (playerSelection === "scissors" && computerSelection === "paper" )||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "rock" && computerSelection === "scissors" ) ) {
        return `Player wins this round! ${playerSelection} beats ${computerSelection}`
    } else {
        return `Computer wins this round! ${computerSelection} beats ${playerSelection}`
    }
 }
 //console.log(playRound(playerSelection, computerSelection));

function game () {
     let playerScore = 0;
     let computerScore = 0;
     for (let i = 1; i <= 5; i++) {
        const playerSelection = prompt("Enter a value :");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection,computerSelection)
        console.log(`Round ${i} : ${result}`);
        if (result.startsWith(`Player`)) {
            playerScore++;
            //console.log(playerScore);
        } else if (result.startsWith(`Computer`)) {
            computerScore++;
            //console.log(computerScore);
        } 
     }
     if (playerScore > computerScore){
        console.log("Player wins the game");
     } else if (playerScore < computerScore) {
        console.log("Computer wins the game");
     } else if (playerScore = computerScore){
        console.log("It's a tie match")
     }
}
game();
/*
const playerSelection = prompt("Enter a value :");
        const computerSelection = getComputerChoice();
        */