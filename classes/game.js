let playerChoose;
let knightImg;
let orcImg;
let heartImg;
let buttonAttack;
let gameIsRunning = false;
const mapSize = 3;
const areaSize = 150;


function drawMap() {
    for (let i = 0; i < mapSize; i++) {
        for (let j = 0; j < mapSize; j++) {
            const x = i * areaSize;
            const y = j * areaSize; 
            stroke(0);
            rect(x, y, areaSize, areaSize);
        }
    }

    image(knightImg, -100, -10, 300, 200);
    image(knightImg, 600, 200, 600, 400);
    image(orcImg, 900, 0, 400, 300);
    image(heartImg, 480, 350, 32, 32);
    fill(255,0,0);
    rect(520, 350, 150, 20);
    image(heartImg, 1100, 10, 32, 32);
    rect(1140, 10, 150, 20);
    fill(255);
    if (gameIsRunning) {
        button.show();
    }
}

function preload() {
    knightImg = loadImage('../assets/knight.png');
    orcImg = loadImage('../assets/orc.png');
    heartImg = loadImage('../assets/heart.png');
}
  
function setup() {
    const canvas = createCanvas(windowWidth - 30, windowHeight - 80);
    canvas.parent('game-board');

    button = createButton('Attack');
    button.position(480, 50);
    button.hide();
  
    noLoop();
}
  
function draw() {
    background(220);
    drawMap();
}

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    document.getElementById('restart-button').onclick = () => {
        restartGame();
    };

    document.getElementById('knight').onclick = () => {
        playerChoose = 0;
        document.getElementById('knight').style.border = "solid";
        document.getElementById('wizard').style.border = "";
    }

    document.getElementById('wizard').onclick = () => {
        playerChoose = 1;
        document.getElementById('wizard').style.border = "solid";
        document.getElementById('knight').style.border = "";
    }
  
    function startGame() {
        document.querySelector('.game-intro').style.display = 'none';
        document.querySelector('#game-board').style.display = 'initial';
        gameIsRunning = true;
        loop();
    }

    function restartGame() {
        document.querySelector('.game-over').style.display = 'none';
        document.querySelector('#game-board').style.display = 'initial';
        startGame();
    }
};