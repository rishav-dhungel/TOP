const prevGuess = [];

const form = document.getElementById("formInput");
const guessInputField = document.getElementById("guess");
const answerBox = document.querySelector(".answer-box");
const resetBtn = document.getElementById("reset-btn");

function returnRandom(){
  //make function return random number between 1 and 100
  const randNumber = Math.floor(Math.random()*101);
  return randNumber
}

const thisRandNumber = returnRandom();

form.addEventListener("submit", function(event){
    event.preventDefault();
    const formData = new FormData(form)
    let guess = formData.get("guess");
    console.log(guess);
    prevGuess.push(guess);
    guessInputField.value = "";
    console.log(prevGuess)

    switch(true){
      case guess < thisRandNumber:
        showResult("warn-low","Value is lower then the guess",guess);
        break;
      case guess > thisRandNumber:
        showResult("warn-high", "Value is higher then the guess",guess);
        break;
      case guess == thisRandNumber:
        showResult('warn-correct', "Value is correct, You Won. Click Reset Game To Restart",guess);
        alert(`You Won: The Number was: ${guess}`);
        alert("Game Over, Resetting Game");
        resetGame()
        break;
      }
});




function showResult(classValue, textValue,guess){
  console.log(classValue,textValue)
  let p = document.createElement("p");
  p.innerHTML = textValue + `<strong style=""> Current Value: ${guess} </strong>`;
  p.className = classValue;
  answerBox.appendChild(p);
}

resetBtn.addEventListener("click", resetGame);

function resetGame(){
  location.reload();
}