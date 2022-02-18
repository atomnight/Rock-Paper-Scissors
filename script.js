

const list = ["rock","paper","scissors"];

let winner = "";

let player_sum = 0;

let comp_sum = 0;

let playerScore = document.querySelector(".player-score");

let computerScore = document.querySelector(".computer-score");

let imgPlayer = document.querySelector(".img-player");

let imgComputer = document.querySelector(".img-computer");

let roundOutcome = document.querySelector(".round-outcome");

let rockButton = document.querySelector(".rock-button");

let paperButton = document.querySelector(".paper-button");

let scissorsButton = document.querySelector(".scissors-button");

let replayButton = document.querySelector(".replay-button");


function computerPlay(list) {
    return list[Math.floor(Math.random() * list.length)];
}


function playRound(playerSelection, computerSelection) {
    let outcome;
    if ((playerSelection === "rock") && (computerSelection === "rock")) {
        outcome = "d";
        //("Draw! You both picked Rock!");
        imgPlayer.setAttribute("src","rock.png");
        imgComputer.setAttribute("src","rock.png")
        return outcome;
    } 
    else if ((playerSelection === "paper") && (computerSelection === "paper")) {
        outcome = "d";
        //("Draw! You both picked Paper!");
        imgPlayer.setAttribute("src","paper.png");
        imgComputer.setAttribute("src","paper.png");
        
        return outcome;
    }
    else if ((playerSelection === "scissors") && (computerSelection === "scissors")) {
        outcome = "d";
        //("Draw! You both picked Scissors!");
        imgPlayer.setAttribute("src","scissors.png");
        imgComputer.setAttribute("src","scissors.png");
        return outcome;
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        outcome = "p";
        //("You Win! Rock beats Scissors");
        imgPlayer.setAttribute("src","rock.png");
        imgComputer.setAttribute("src","scissors.png");
        return outcome;
    }
    else if ((playerSelection === "rock") && (computerSelection === "paper")) {
        outcome = "c";
        //("You Lose! Paper beats Rock");
        imgPlayer.setAttribute("src","rock.png");
        imgComputer.setAttribute("src","paper.png");
        return outcome;
    }
    else if ((playerSelection === "paper") && (computerSelection === "rock")) {
        outcome = "p";
        //("You Win! Paper beats Rock");
        imgPlayer.setAttribute("src","paper.png");
        imgComputer.setAttribute("src","rock.png")
        return outcome;
    }
    else if ((playerSelection === "paper") && (computerSelection === "scissors")) {
        outcome = "c";
        //("You Loose! Scissors beats Paper");
        imgPlayer.setAttribute("src","paper.png");
        imgComputer.setAttribute("src","scissors.png");
        return outcome;
    }
    else if ((playerSelection === "scissors") && (computerSelection === "rock")) {
        outcome = "c";
        //("You Loose! Rock beats Scissors");
        imgPlayer.setAttribute("src","scissors.png");
        imgComputer.setAttribute("src","rock.png")
        return outcome;
    }
    else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        outcome = "p";
        //("You Win! Scissors beats Paper");
        imgPlayer.setAttribute("src","scissors.png");
        imgComputer.setAttribute("src","paper.png");
        return outcome;
    }
}


function game(playerInput,func,computerPlay,list) {

    let outcome = "";
    let computerInput = "";

    //The decision of the Computer
    computerInput = computerPlay(list);

    // Outcome either returns the value "p" or "c". It determines who won the specific round
    // We print the playerDecision (icon img) and the ComputerDecision (icon img) to the screen

    outcome = func(playerInput,computerInput);

    if (outcome === "p") {
        //Player won the Round
        return outcome;
    }
    else if (outcome === "c") {
        // Player lost the Round
        return outcome;
    }
    else if (outcome === "d") {
        // outcome is a Draw
        return outcome;
    }
}


function gameEnd(winner) {
    if (winner === "player") {
        roundOutcome.textContent = "You won the Game!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
    else if (winner === "computer") {
        roundOutcome.textContent = "You lost the Game!";
        rockButton.disabled = true;
        paperButton.disabled = true;
        scissorsButton.disabled = true;
    }
}

rockButton.addEventListener('click', ()=>{
    winner = game("rock",playRound,computerPlay,list);
    if (winner === "p") {
        roundOutcome.textContent = "You won the Round!";
        player_sum = player_sum + 1;
        playerScore.textContent = player_sum;
    }
    else if (winner === "c") {
        roundOutcome.textContent = "You lost the Round!";
        comp_sum = comp_sum + 1;
        computerScore.textContent = comp_sum;
    }
    else if (winner === "d") {
        roundOutcome.textContent = "It's a Draw!";
    }
    if (player_sum === 5) {
        gameEnd("player");
    }
    else if (comp_sum === 5) {
        gameEnd("computer");
    }
  })


  paperButton.addEventListener('click', ()=>{
    winner = game("paper",playRound,computerPlay,list);
    if (winner === "p") {
        roundOutcome.textContent = "You won the Round!";
        player_sum = player_sum + 1;
        playerScore.textContent = player_sum;
    }
    else if (winner === "c") {
        roundOutcome.textContent = "You lost the Round!";
        comp_sum = comp_sum + 1;
        computerScore.textContent = comp_sum;
    }
    else if (winner === "d") {
        roundOutcome.textContent = "It's a Draw!";
    }
    if (player_sum === 5) {
        gameEnd("player");
    }
    else if (comp_sum === 5) {
        gameEnd("computer");
    }
  })


  scissorsButton.addEventListener('click', ()=>{
    winner = game("scissors",playRound,computerPlay,list);
    if (winner === "p") {
        roundOutcome.textContent = "You won the Round!";
        player_sum = player_sum + 1;
        playerScore.textContent = player_sum;
    }
    else if (winner === "c") {
        roundOutcome.textContent = "You lost the Round!";
        comp_sum = comp_sum + 1;
        computerScore.textContent = comp_sum;
    }
    else if (winner === "d") {
        roundOutcome.textContent = "It's a Draw!";
    }
    if (player_sum === 5) {
        gameEnd("player");
    }
    else if (comp_sum === 5) {
        gameEnd("computer");
    }
  })

  replayButton.addEventListener('click', ()=>{
    player_sum = 0;
    comp_sum = 0;
    playerScore.textContent = player_sum;
    computerScore.textContent = comp_sum;
    imgPlayer.setAttribute("src","axe.png");
    imgComputer.setAttribute("src","sword.png");
    roundOutcome.textContent = "I'm Betting on You!";
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
})





