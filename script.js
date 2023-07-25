function getComputerChoice() {
  const rpsChoices = ['Rock', 'Paper', 'Scissors'];
  const computerChoice = rpsChoices[Math.floor(Math.random() * 3)];
  return computerChoice;
}

function getResult(playerChoice, computerChoice) {
  // Determine the result of the round and return the score accordingly

  let score;

  if (playerChoice === computerChoice) {
      // Draw scenario
      score = 0;
  } else if (playerChoice === 'Rock' && computerChoice === 'Scissors') {
      // Player wins with Rock over Scissors
      score = 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
      // Player wins with Paper over Rock
      score = 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
      // Player wins with Scissors over Paper
      score = 1;
  } else {
      // Player loses
      score = -1;
  }

  return score;
}

function showResult(score, playerChoice, computerChoice) {
  // Update the DOM to display the game result and player/computer choices

  const result = document.getElementById('result');
  switch (score) {
      case -1:
          result.innerText = `You Lose!`;
          break;
      case 0:
          result.innerText = `It's a Draw!`;
          break;
      case 1:
          result.innerText = `You Win!`;
          break;
  }

  const playerScore = document.getElementById('player-score');
  const hands = document.getElementById('hands');
  playerScore.innerText = `${Number(playerScore.innerText) + score}`;
  hands.innerText = `👱 ${playerChoice} vs 🤖 ${computerChoice}`;
}

function onClickRPS(playerChoice) {
  // Calculate the result and display it when a player clicks on a RPS button
  const computerChoice = getComputerChoice();
  const score = getResult(playerChoice.value, computerChoice);
  showResult(score, playerChoice.value, computerChoice);
}

function playGame() {
  // Make the RPS buttons actively listen for a click and do something once a click is detected

  const rpsButtons = document.querySelectorAll('.rpsButton');

  // Add an event listener to each RPS button and call onClickRPS function when clicked
  rpsButtons.forEach(rpsButton => {
      rpsButton.onclick = () => onClickRPS(rpsButton);
  });

  // Add a click listener to the end game button that runs the endGame() function on click
  const endGameButton = document.getElementById('endGameButton');
  endGameButton.onclick = () => endGame();
}

function endGame() {
  // Clear all the displayed text on the DOM

  const playerScore = document.getElementById('player-score');
  const hands = document.getElementById('hands');
  const result = document.getElementById('result');
  playerScore.innerText = '';
  hands.innerText = '';
  result.innerText = '';
}

playGame();
