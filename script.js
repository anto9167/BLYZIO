// Array of game data
const games = [
    { title: "Game 1", thumbnailUrl: "game1.jpg", url: "game1.html" },
    { title: "Game 2", thumbnailUrl: "game2.jpg", url: "game2.html" },
    { title: "Game 3", thumbnailUrl: "game3.jpg", url: "game3.html" },
    // Add more games as needed
];

// Render game thumbnails
const gameList = document.getElementById("gameList");
games.forEach((game) => {
    const thumbnail = document.createElement("div");
    thumbnail.classList.add("thumbnail");
    thumbnail.style.backgroundImage = `url(${game.thumbnailUrl})`;
    thumbnail.addEventListener("click", () => {
        window.location.href = game.url;
    });
    gameList.appendChild(thumbnail);
});
