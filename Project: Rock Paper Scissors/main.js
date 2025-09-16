
const cards = document.querySelectorAll(".cards");
const choices = ["Rock", "Paper", "Scissor"];
let initialTurn = 5;
let tieScore = 0;
let playerScore = 0;
let computerScore = 0;

const displayBoard = document.getElementById("live-update-container");
const playerScoreCard = document.getElementById("player-score");
const computerScoreCard = document.getElementById("computer-score");
const tieScoreCard = document.getElementById("tie-score");
const turnLeftCard = document.getElementById('turn-left');
const restartBtn = document.getElementById("restart-btn");


cards.forEach(function getPlayerChoice(card){
    card.addEventListener("click", function(){
    let playerChoice = card.id;
    let computerChoice = choices[getComputerChoice()];
    playGame(playerChoice.toLowerCase(), computerChoice.toLowerCase());
  })
});


function getComputerChoice(){
  let random = Math.floor(Math.random()*3)
  console.log(random);
  return random;
}


function playGame(playerChoice, computerChoice){
  if(playerChoice === computerChoice){
    tieScore += 1;
  }else if(playerChoice === "paper"){
    if(computerChoice === "rock"){
      playerScore += 1;
    }else{
      computerScore +=1
    }
  }else if(playerChoice === "rock"){
    if(computerChoice === "scissor"){
      playerScore += 1;
    }else{
      computerScore += 1;
    }
  }else if(playerChoice === "scissor"){
      if(computerChoice === "paper"){
        playerScore += 1;
      }else{
        computerScore += 1;
      }
    }
   initialTurn--;
   updateDisplay(playerChoice,computerChoice,playerScore,computerScore);

  }

function updateDisplay(playerChoice,computerChoice,playerScore,computerScore){
  if(initialTurn <= 5 && initialTurn >=0){
    gameOn(playerChoice,computerChoice,playerScore,computerScore);
  }else{
    gameOver();
  }

}

function gameOn(playerChoice,computerChoice,playerScore,computerScore){
  let p = document.createElement("p");
  p.innerHTML = `<strong>Player Choice: ${playerChoice} | Computer Choice: ${computerChoice}`;
  displayBoard.appendChild(p);
  playerScoreCard.textContent = `Player Score: ${playerScore}`;
  computerScoreCard.textContent = `Computer Score: ${computerScore}`;
  tieScoreCard.textContent = `Tie Score: ${tieScore};`
  turnLeftCard.textContent = `Turn Left: ${initialTurn}`
}

function gameOver(){
  if(playerScore > computerScore){
    alert ("Hurray You Won!")
    alert("Game Over!!! Game will reload!");
    location.reload();
  }else if(computerScore > playerScore){
    alert("Computer Won!!!")
    alert("Game Over!!! Game will reload!");
    location.reload();
  }else{
    alert("It's a tie! Nobody Won!")
    alert("Game Over!!! Game will reload!");
    location.reload();

  }
}

restartBtn.addEventListener("click", function(){
  location.reload();
})