const modal = document.getElementById("modal");
const usernameInput = document.getElementById('usernameInput');

const addName = () => {
  const MIN_CHARS_LENGTH = 3;
  const playerName = usernameInput.value;
  if (playerName.length < MIN_CHARS_LENGTH) {
    usernameInput.setCustomValidity('Please enter more than 3 characters!');
    usernameInput.reportValidity();
  } else {
    modal.style.display = "none";
    document.getElementById('playerScore').innerHTML = playerName + ':';
  }
}

usernameInput?.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    event.preventDefault();
    addName();
  }
})



//CORE GAME CODE
let playerWINS = 0;
let computerWINS = 0;

const playGame = (option) => {
  const playerChoice = document.getElementById('playerChoice')
  playerChoice.innerHTML = option.innerHTML;
  disableButtons();
  const computerChoice = getComputerChoice();
  setTimeout(() => {}, 900);
  determineTheWinner(playerChoice.innerHTML, computerChoice);
  setTimeout(() => {document.getElementById('playerWINS').innerHTML = playerWINS;}, 900);
  setTimeout(() => {document.getElementById('computerWINS').innerHTML = computerWINS;}, 900)
};

const disableButtons = () => {
  document.getElementById('water').disabled = true;
  document.getElementById('fire').disabled = true;
  document.getElementById('sponge').disabled = true;
  document.getElementById('bomb').disabled = true;
}

const enableButtons = () => {
  document.getElementById('water').disabled = false;
  document.getElementById('fire').disabled = false;
  document.getElementById('sponge').disabled = false;
  document.getElementById('bomb').disabled = false;
}

const getComputerChoice = () => {
  const computerChoice = document.getElementById('computerChoice')
  setTimeout(() => {computerChoice.innerHTML = '🌊'}, 100);
  setTimeout(() => {computerChoice.innerHTML = '🔥'}, 200);
  setTimeout(() => {computerChoice.innerHTML = '🧽'}, 300);
  setTimeout(() => {computerChoice.innerHTML = '🌊'}, 400);
  setTimeout(() => {computerChoice.innerHTML = '🔥'}, 500);
  setTimeout(() => {computerChoice.innerHTML = '🧽'}, 600);
  const randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      setTimeout(() => {computerChoice.innerHTML = '🌊'}, 700);
      return '🌊';
    case 1:
      setTimeout(() => {computerChoice.innerHTML = '🔥'}, 700);
      return '🔥';
    case 2:
      setTimeout(() => {computerChoice.innerHTML = '🧽'}, 700);
      return '🧽';
  }
}

const determineTheWinner = (playerChoice, computerChoice) => {
  const displayResult = document.getElementById('result')
  setTimeout(() => {displayResult.style.visibility = 'visible'}, 920)
  if (playerChoice === computerChoice) {
    setTimeout(() => {displayResult.innerHTML='It is a TIE'}, 900)
    return 'Its a tie';
  } 
  if (playerChoice === '💣') {
    setTimeout(() => {displayResult.innerHTML='Please dont cheat!'}, 900)
    playerWINS ++
     return 'CHEATER';
  }
  if (playerChoice === '🌊') {
    if (computerChoice === '🔥') {
      setTimeout(() => {displayResult.innerHTML='YOU WIN'}, 900)
      playerWINS ++
      return 'you won'
    } else {
      setTimeout(() => {displayResult.innerHTML='COMPUTER WINS'}, 900) 
      computerWINS++
      return 'PC won'
    }
  }
  if (playerChoice === '🔥') {
    if (computerChoice === '🧽') {
      setTimeout(() => {displayResult.innerHTML='YOU WIN'}, 900)
      playerWINS ++ 
      return 'you won';
    } else {
      setTimeout(() => {displayResult.innerHTML='COMPUTER WINS'}, 900) 
      computerWINS++
      return 'PC Won';
    }
  }
  if (playerChoice === '🧽') {
    if (computerChoice === '🌊') {
      setTimeout(() => {displayResult.innerHTML='YOU WIN '}, 900)
      playerWINS ++  
      return 'you won';
    } else {
      setTimeout(() => {displayResult.innerHTML='COMPUTER WINS'}, 900)
      computerWINS++
      return 'PC won';
    }
  }
}

const resetButton = () => {
  document.getElementById('water').disabled = false;
  document.getElementById('fire').disabled = false;
  document.getElementById('sponge').disabled = false;
  document.getElementById('bomb').disabled = false;
  document.getElementById('result').style.visibility = 'hidden';
  document.getElementById('playerChoice').innerHTML= '❔';
  document.getElementById('computerChoice').innerHTML= '❔';
}

//INFO BUTTON 
const infoButton = document.getElementById('infoButton');
const span = document.getElementsByClassName("close")[0];

infoButton.addEventListener("click", function () {
  document.getElementById('info').style.display = 'block'
})

span.addEventListener('click', function () {
  document.getElementById('info').style.display = 'none'
})

window.addEventListener('click', function (event) {
  if (event.target == document.getElementById('info')){
    document.getElementById('info').style.display = 'none'
  }
})