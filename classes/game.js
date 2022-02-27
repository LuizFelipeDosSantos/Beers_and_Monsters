let playerChoose;
let player;
let knightImg, wizardImg;
let enemy;
let orcImg;
let heartImg;
let dice1Img;
let forestImg;
let forestImgNight;
let buttonAttack;
let gameIsRunning = false;
let isBattling = false;
let initialX = 0;
let initialY = 220;
let level = 1;

function loadLevel() {
    switch (level) {
        case 1:
            background(forestImg);
            if (enemy === undefined) {
                enemy = new Orc(orcImg, player.x + 500, player.y, 180, 230);
            }
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

    buttonAttack = createButton('Attack');
    buttonAttack.hide();

    noLoop();
}
  
function draw() {
    if (gameIsRunning) {
        loadLevel();
        player.draw();

        if (!isBattling) {
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
                enemy.x =  player.x + 500;
                enemy.draw();
                isBattling = true;
            }
        } else {
            enemy.draw();
            buttonAttack.position(player.x + 20, player.y + 300);
            buttonAttack.show();

            //Player's Life
            image(heartImg, player.x, player.y - 50, 32, 32);
            fill(255,0,0);
            rect(player.x + 40, player.y - 50, player.health * 5, 20);

            //Enemy's Life
            image(heartImg, enemy.x, enemy.y - 50, 32, 32);
            rect(enemy.x + 40, enemy.y - 50, enemy.health * 5, 20);

            //Dice
            fill(255);
            image(dice1Img, player.x + 300, player.y, 100, 100);
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