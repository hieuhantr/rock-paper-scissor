var options = ['Rock', 'Paper', 'Scissor'];
var computerScore;
var playerScore;

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function gameOn(playerSelection, computerChoice) {
    playerSelection = playerSelection.toLowerCase();
    var result;
    if (playerSelection == 'rock') {
        if (computerChoice.toLowerCase() == 'paper') {
            result = `You lose! Paper beats Rock`;
            computerScore ++;
        }
        if (computerChoice.toLowerCase() == 'scissor') {
            result = `You win! Rock beats Scissor`; 
            playerScore ++;
        } else if (playerSelection == computerChoice.toLowerCase()) {
            result = `It's a tie!`
        }
    } else if (playerSelection == 'scissor') {
        if (computerChoice.toLowerCase() == 'rock') {
            result = `You lose! Rock beats Scissor`;
            computerScore ++;
        }
        if (computerChoice.toLowerCase() == 'paper') {
            result = `You win! Scissor beats Paper`; 
            playerScore ++;
        } else if (playerSelection == computerChoice.toLowerCase()) {
            result = `It's a tie!`
        }
    } else if (playerSelection == 'paper') {
        if (computerChoice.toLowerCase() == 'scissor') {
            result = `You lose! Scissor beats Paper`;
            computerScore ++;
        }
        if (computerChoice.toLowerCase() == 'rock') {
            result = `You win! Paper beats Rocks`; 
            playerScore ++;
        } else if (playerSelection == computerChoice.toLowerCase()) {
            result = `It's a tie!`
        }
    } else {
        result = `Please enter a valid choice (Rock, Paper, or Scissor)`
    }
    console.log(result);
    return result;
    
}

function game() {
    computerScore = 0;
    playerScore = 0;
    for (var i = 0; i < 5; i ++) {
        playerSelection = prompt('Pick one: Rock, Paper, or Scissor')
        gameOn(playerSelection,getComputerChoice() );
    }
    console.log(`Player wins ${playerScore}, Computer wins ${computerScore}`);
}

game();