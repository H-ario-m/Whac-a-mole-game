
let MolesTileCurrent;
let BombTileCurrent;
let score = 0;
let gameOver = false;
let timeLeft = 30;
let gameInterval;
let moleInterval;
let plantInterval;

window.onload = function() {
    document.getElementById("restart-button").addEventListener("click", restartGame);
}
function setGame() {
    timeLeft = parseInt(document.getElementById("timeInput").value) || 30;
    document.getElementById("board").innerHTML = "";
    score = 0;
    gameOver = false;
    document.getElementById("score").innerText = score.toString();
    document.getElementById("time").innerText = timeLeft.toString();

    for (let i = 0; i < 9; i++) {
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

// int Level=getElementById("level").value;
    gameInterval = setInterval(countDown, 1000);
    moleInterval = setInterval(setMole, 700);
    plantInterval = setInterval(setPlant, 1000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) return;
    if (MolesTileCurrent) MolesTileCurrent.innerHTML = "";
    let mole = document.createElement("img");
    mole.src = "—Pngtree—mole wearing a yellow hard_5675778.png"; 
    let num = getRandomTile();
    if (BombTileCurrent && BombTileCurrent.id == num) return;
    MolesTileCurrent = document.getElementById(num);
    MolesTileCurrent.appendChild(mole);
}

function setPlant() {
    if (gameOver) return;
    if (BombTileCurrent) BombTileCurrent.innerHTML = "";
    let plant = document.createElement("img");
    plant.src = "./piranha-plant.png"; 
    let num = getRandomTile();
    if (MolesTileCurrent && MolesTileCurrent.id == num) return;
    BombTileCurrent = document.getElementById(num);
    BombTileCurrent.appendChild(plant);
}

function selectTile() {
    if (gameOver) return;
    if (this == MolesTileCurrent) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    } else if (this == BombTileCurrent) {
        document.getElementById("score").innerText = "GAME OVER: " + score.toString();
        gameOver = true;
        clearIntervals();
    }
}

function countDown() {
    if (gameOver) return;
    timeLeft--;
    document.getElementById("time").innerText = timeLeft.toString();
    if (timeLeft === 0) {
        document.getElementById("score").innerText = "TIME'S UP! Final Score: " + score.toString();
        gameOver = true;
        clearIntervals();
    }
}

function clearIntervals() {
    clearInterval(gameInterval);
    clearInterval(moleInterval);
    clearInterval(plantInterval);
}

function restartGame() {
    clearIntervals();
    setGame();
}