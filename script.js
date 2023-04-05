var options = ['rock', 'paper', 'scissor'];
let playerSelection;
var computerScore= 0;
var playerScore = 0;
var gameCount = 0;
let result;
let resultText;

//set DOM
const buttons = document.querySelectorAll('button')
buttons.forEach((button) => {
    button.addEventListener('click', playRound)
})
const firstHeading = document.querySelector(".firstHeading")
const secondHeading = document.querySelector(".secondHeading")
const progressBar = document.querySelector(".progressBar")

//function to start a new game
function playRound(e) {
    e.preventDefault();
    gameCount += 1
    playerSelection = this.classList.value
    gameOn(playerSelection, getComputerChoice() );
    if (gameCount > 0) {
        //setText
        firstHeading.textContent = resultText;
        secondHeading.innerText = "Choose your next selection below.";

    }
    if (gameCount % 5 == 0) {
        if (playerScore <= 1) {
            firstHeading.innerText = `Oops, you won ${playerScore} out of 5 times.`
        } else {
            firstHeading.innerText = `Good game, you won ${playerScore} out of 5 times.`
        }
        secondHeading.innerText = "Choose your next selection below to restart the game"
        playerScore = 0
        computerScore = 0
    }

}

function getComputerChoice() {
    return options[Math.floor(Math.random() * 3)];
}

function gameOn(playerSelection, computerChoice) {
    if (gameCount!== 1 && gameCount%5 == 1 ) {
        progressBar.innerHTML=' ';
    }
    let newProgress = document.createElement('div')
    newProgress.style.height = '20px'
    newProgress.style.width = '20%'
    if (playerSelection == 'rock') {
        if (computerChoice == 'paper') {
            result = 'lose';
            computerScore ++;
        }
        if (computerChoice == 'scissor') {
            result = 'win'
            playerScore ++;
        } else if (playerSelection == computerChoice) {
            result = 'tie'
        }
    } else if (playerSelection == 'scissor') {
        if (computerChoice == 'rock') {
            result = 'lose';
            computerScore ++;
        }
        if (computerChoice == 'paper') {
            result = 'win'
            playerScore ++;
        } else if (playerSelection == computerChoice) {
            result = 'tie'
        }
    } else if (playerSelection == 'paper') {
        if (computerChoice == 'scissor') {
            result = 'lose';
            computerScore ++;
        }
        if (computerChoice == 'rock') {
            result = 'win'
            playerScore ++;
        } else if (playerSelection == computerChoice) {
            result = 'tie'
        }
    }
    console.log(playerSelection)
    console.log(computerChoice)
    console.log(result)
    if (result == 'win') {
        resultText = 'Good choice, you win!'
        newProgress.style.backgroundColor = 'green'
    } else if (result == 'lose') {
        resultText = 'Ouch, let’s try again.'
        newProgress.style.backgroundColor = 'red'
    } else if (result == 'tie') {
        resultText = `It's a tie!` 
        newProgress.style.backgroundColor = 'yellow' }

    progressBar.appendChild(newProgress)
}