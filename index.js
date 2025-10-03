  let playerScore = 0;
  let computerScore = 0;
  let round = 1;

  const playerDisplay = document.getElementById("player-display");
  const computerDisplay = document.getElementById("computer-display");
  const resultDisplay = document.getElementById("result-text");
  const playerScoreEl = document.getElementById("player-score");
  const computerScoreEl = document.getElementById("computer-score");
  const roundEl = document.getElementById("round-count");
  const resetBtn = document.getElementById("reset-btn");



  const emojis = { rock: "✊", paper: "✋", scissors: "✌️" };
  const choices = ["rock", "paper", "scissors"];

  document.getElementById("rock-btn").addEventListener("click", () => play("rock"));
  document.getElementById("paper-btn").addEventListener("click", () => play("paper"));
  document.getElementById("scissors-btn").addEventListener("click", () => play("scissors"));

  function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    playerDisplay.textContent = emojis[playerChoice];
    computerDisplay.textContent = emojis[computerChoice];

    if (playerChoice === computerChoice) 
    {
      resultDisplay.textContent = "It's a tie!";
      resultDisplay.style.color="blue";
    } else if ( (playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") ||(playerChoice === "scissors" && computerChoice === "paper"))
    {
      resultDisplay.textContent = "You win!";
      resultDisplay.style.color="green";
      playerScore++;
    } else {
      resultDisplay.textContent = "You lose!";
      computerScore++;
      resultDisplay.style.color="red";
    }

    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
    roundEl.textContent = round;
    round++;
  }

  resetBtn.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    round = 1;
    playerDisplay.textContent = "❔";
    computerDisplay.textContent = "❔";
    resultDisplay.textContent = "Make your choice!";
    resultDisplay.style.color="black";
    playerScoreEl.textContent = 0;
    computerScoreEl.textContent = 0;
    roundEl.textContent = 1;
  });
