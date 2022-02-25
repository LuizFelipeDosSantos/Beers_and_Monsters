let playerChoose;
let knightImg;
let orcImg;
let heartImg;
let dice1Img;
let treasureImg;
let forestImg;
let buttonAttack;
let gameIsRunning = false;
const mapSize = 3;
const areaSize = 150;


function drawMap() {
    for (let i = 0; i < mapSize; i++) {
        for (let j = 0; j < mapSize; j++) {
            const x = i * areaSize;
            const y = j * areaSize;

            image(forestImg, x, y, areaSize, areaSize);
            noFill();
            rect(x, y, areaSize, areaSize);
        }
    }
    
    image(knightImg, 10, 25, 130, 110);
    image(treasureImg, 330, 35, 80, 80);
    image(knightImg, 650, 220, 300, 250);
    image(orcImg, 950, 10, 180, 230);
    image(heartImg, 480, 250, 32, 32);
    fill(255,0,0);
    rect(520, 250, 150, 20);
    image(heartImg, 1100, 10, 32, 32);
    rect(1140, 10, 150, 20);
    fill(255);
    image(dice1Img, 1100, 300, 100, 100);
    //if (gameIsRunning) {
        button.show();
    //}
}

function preload() {
    knightImg = loadImage('../assets/knight.png');
    orcImg = loadImage('../assets/orc.png');
    heartImg = loadImage('../assets/heart.png');
    dice1Img = loadImage('../assets/dice_1.png');
    treasureImg = loadImage('../assets/treasure.png');
    forestImg = loadImage('../assets/forest.png');
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