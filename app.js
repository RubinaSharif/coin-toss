function flipCoin() {
    const outcomes = ["Heads", "Tails"];
    const randomOutcome = outcomes[Math.floor(Math.random() * outcomes.length)];
    document.getElementById('result').innerText = randomOutcome;
}
