let playerChoose;
let player;
let knightImg, wizardImg;
let orc;
let orcImg;
let heartImg;
let dice1Img;
let forestImg;
let forestImgNight;
let buttonAttack;
let gameIsRunning = false;
let initialX = 0;
let initialY = 220;
let level = 1;

function changeLevel() {
    switch (level) {
        case 1:
            background(forestImg);
            break;
        case 2:
            background(forestImgNight);
    }
}

function preload() {
    knightImg = loadImage('../assets/knight.png');
    wizardImg = loadImage('../assets/wizard.png');
    orcImg = loadImage('../assets/orc.png');
    heartImg = loadImage('../assets/heart.png');
    dice1Img = loadImage('../assets/dice_1.png');
    forestImg = loadImage('../assets/forest.png');
    forestImgNight = loadImage('../assets/forest_night.png');
}
  
function setup() {
    const canvas = createCanvas(windowWidth - 30, windowHeight - 80);
    canvas.parent('game-board');

    button = createButton('Attack');
    button.position(480, 50);
    button.hide();

    noLoop();
}
  
/*image(heartImg, 480, 250, 32, 32);
    fill(255,0,0);
    rect(520, 250, 150, 20);
    image(heartImg, 1100, 10, 32, 32);
    rect(1140, 10, 150, 20);
    fill(255);
    image(dice1Img, 1100, 300, 100, 100);
    if (gameIsRunning) {
        button.show();
    }*/


function draw() {
    if (gameIsRunning) {
        changeLevel();
        player.draw();

        if (keyIsDown(LEFT_ARROW)) {
            player.moveLeft();
        } else if (keyIsDown(RIGHT_ARROW)) {
            player.moveRight();
        }

        if (player.x > width) {
            level++;
            player.x = initialX;
        }

        if (player.x > 300) {
            orc = new Orc(orcImg, player.x + 500, player.y, 180, 230);
            orc.draw();
        }
    }
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

        if (playerChoose === 0) {
            player = new Knight(knightImg, initialX, initialY, 300, 250);
        } else {
            player = new Wizard(wizardImg, initialX, initialY, 260, 280);
        }

        loop();
    }

    function restartGame() {
        document.querySelector('.game-over').style.display = 'none';
        document.querySelector('#game-board').style.display = 'initial';
        startGame();
    }
};