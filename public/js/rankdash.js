// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    // Mock data representing players' scores fetched from the server
    const players = [
        { name: "Alice", score: 10 },
        { name: "Bob", score: 8 },
        { name: "Charlie", score: 6 },
        { name: "Dave", score: 4 },
        { name: "Eve", score: 2 }
    ];

    // Sort players by score in descending order
    players.sort((a, b) => b.score - a.score);

    // Display top 3 players
    if (players[0]) {
        document.getElementById('first-player-name').innerText = players[0].name;
        document.getElementById('first-player-score').innerText = `Score: ${players[0].score}`;
    }

    if (players[1]) {
        document.getElementById('second-player-name').innerText = players[1].name;
        document.getElementById('second-player-score').innerText = `Score: ${players[1].score}`;
    }

    if (players[2]) {
        document.getElementById('third-player-name').innerText = players[2].name;
        document.getElementById('third-player-score').innerText = `Score: ${players[2].score}`;
    }
});
