const choices = ["rock", "paper", "scissors"];

function computerPlay() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

const buttons = document.querySelectorAll("button");
const resultDisplay = document.querySelector(".result p");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const playerSelection = button.id;
        const computerSelection = computerPlay();
        const result = playRound(playerSelection, computerSelection);
        resultDisplay.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}. ${result}`;
    });
});
