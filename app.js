let playerScore = 0;
let computerScore = 0;

function play(playerChoice) {
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    let resultText = `You chose <b>${playerChoice}</b>. Computer chose <b>${computerChoice}</b>.<br>`;

    if (playerChoice === computerChoice) {
        resultText += "It's a <b>draw</b>!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        resultText += "<b>You win!</b>";
        playerScore++;
    } else {
        resultText += "<b>Computer wins!</b>";
        computerScore++;
    }

    document.getElementById('result').innerHTML = resultText;
    document.getElementById('score').innerText = `Player: ${playerScore} | Computer: ${computerScore}`;
}