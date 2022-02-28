let playerChoose;
let level = 1;
let turn = 0;
let player;
let knightImg;
let knightWalkImg0, knightWalkImg1, knightWalkImg2, knightWalkImg3, knightWalkImg4,
    knightWalkImg5, knightWalkImg6, knightWalkImg7, knightWalkImg8, knightWalkImg9;
let knightHealthBarWidth = 250;

let wizardImg;
let wizardHealthBarWidth = 200;

let enemy;
let orcImg, trollImg;
let orcHealthBarWidth = 100;
let trollHealthBarWidth = 200;

let heartImg, dice1Img, dice2Img, dice3Img, dice4Img, dice5Img, dice6Img, dice;
let forestImg, ruinsImg;
let buttonAttack, buttonEnemyAttack;
let gameIsRunning = false;
let isBattling = false;
let battleIsFinished = false;
let enemyIsDead = false;
let enemyAttacked = false;

let initialX = 0;
let initialY = 220;

function loadLevel() {
    switch (level) {
        case 1:
            background(forestImg);
            if (!(enemy instanceof Orc)) {
                enemy = new Orc(orcImg, player.x + 500, player.y, 180, 260);
            }
            break;
        case 2:
            background(ruinsImg);
            if (!(enemy instanceof Troll)) {
                enemy = new Troll(trollImg, player.x + 500, player.y - 100, 400, 350);
            }
    }
}

function rollDice() {
    const diceResult = Math.floor(random([1,2,3,4,5,6]));

    switch (diceResult) {
        case 1:
            dice = dice1Img;
            break;
        case 2:
            dice = dice2Img;
            break;
        case 3:
            dice = dice3Img;
            break;
        case 4:
            dice = dice4Img;
            break;
        case 5:
            dice = dice5Img;
            break;
        case 6:
            dice = dice6Img;    
    }

    return diceResult;
}

function playerAttack() {
    let attackDamage = player.attack() * rollDice();

    fill(255);
    image(dice, player.x + 300, player.y, 100, 100);

    enemy.receiveDamage(attackDamage);

    if (enemy.isDead()) {
        enemy.health = 0;
        enemyIsDead = true;
    } else {
        turn = 1;
    }
}

function enemyAttack() {
    let attackDamage = enemy.attack() * rollDice();

    fill(255);
    image(dice, player.x + 300, player.y, 100, 100);

    player.receiveDamage(attackDamage);

    if (player.isDead()) {
        player.health = 0;
        //GAME OVER
    } else {
        turn = 0;
    }
}

function preload() {
    //Characters
    knightImg = loadImage('../assets/knight/knight.png');
    wizardImg = loadImage('../assets/wizard.png');
    orcImg = loadImage('../assets/orc.png');
    trollImg = loadImage('../assets/troll.png');
    //Heart
    heartImg = loadImage('../assets/heart.png');
    //Dices
    dice1Img = loadImage('../assets/dice_1.png');
    dice2Img = loadImage('../assets/dice_2.png');
    dice3Img = loadImage('../assets/dice_3.png');
    dice4Img = loadImage('../assets/dice_4.png');
    dice5Img = loadImage('../assets/dice_5.png');
    dice6Img = loadImage('../assets/dice_6.png');
    //Backgrounds
    forestImg = loadImage('../assets/forest.png');
    ruinsImg = loadImage('../assets/ruins.png');
    //Animations
    knightWalkImg0 = loadImage('../assets/knight/knight_walk_0.png');
    knightWalkImg1 = loadImage('../assets/knight/knight_walk_1.png');
    knightWalkImg2 = loadImage('../assets/knight/knight_walk_2.png');
    knightWalkImg3 = loadImage('../assets/knight/knight_walk_3.png');
    knightWalkImg4 = loadImage('../assets/knight/knight_walk_4.png');
    knightWalkImg5 = loadImage('../assets/knight/knight_walk_5.png');
    knightWalkImg6 = loadImage('../assets/knight/knight_walk_6.png');
    knightWalkImg7 = loadImage('../assets/knight/knight_walk_7.png');
    knightWalkImg8 = loadImage('../assets/knight/knight_walk_8.png');
    knightWalkImg9 = loadImage('../assets/knight/knight_walk_9.png');
}
  
function setup() {
    const canvas = createCanvas(windowWidth - 30, windowHeight - 80);
    canvas.parent('game-board');

    buttonAttack = createButton('Attack');
    buttonAttack.mousePressed(playerAttack);
    buttonAttack.hide();

    buttonEnemyAttack = createButton('Enemy Attack');
    buttonEnemyAttack.mousePressed(enemyAttack);
    buttonEnemyAttack.hide();

    dice = dice1Img;

    noLoop();
}
  
function draw() {
    if (gameIsRunning) {
        loadLevel();

        if (!isBattling) {
            if (keyIsDown(LEFT_ARROW)) {
                if (player.x > 0) {
                    player.moveLeft();
                } else {
                    player.draw();
                }
            } else if (keyIsDown(RIGHT_ARROW)) {
                player.moveRight();
            } else {
                player.draw();
            }

            if (player.x > width) {
                level++;
                player.x = initialX;
                battleIsFinished = false;
            }

            if ((player.x > 300) && (!battleIsFinished)) {
                enemy.x =  player.x + 500;
                enemy.draw();
                isBattling = true;
                dice = dice1Img;
            }
        } else if (!enemyIsDead) {
            player.draw();
            enemy.draw();

            //Player's Life
            image(heartImg, player.x, player.y - 50, 32, 32);
            fill(255);
            if (player instanceof Knight) {
                rect(player.x + 40, player.y - 50, knightHealthBarWidth, 20);   
            } else {
                rect(player.x + 40, player.y - 50, wizardHealthBarWidth, 20);
            }
            fill(255,0,0);
            rect(player.x + 40, player.y - 50, player.health * 5, 20);

            //Enemy's Life
            image(heartImg, enemy.x, enemy.y - 50, 32, 32);
            fill(255);
            if (enemy instanceof Orc) {
                rect(enemy.x + 40, enemy.y - 50, orcHealthBarWidth, 20);
            } else if (enemy instanceof Troll) {
                rect(enemy.x + 40, enemy.y - 50, trollHealthBarWidth, 20);
            }
            fill(255,0,0);
            rect(enemy.x + 40, enemy.y - 50, enemy.health * 5, 20);

            //Dice
            fill(255);
            image(dice, player.x + 300, player.y, 100, 100);

            //Player's Turn
            if (turn === 0) {
                buttonAttack.position(player.x + 20, player.y + 300);
                buttonAttack.show();
                buttonEnemyAttack.hide();
            } else { //Enemy's Turn
                buttonEnemyAttack.position(enemy.x + 20, enemy.y + 300);
                buttonEnemyAttack.show();
                buttonAttack.hide();
            }
        } else if (enemyIsDead) {
            player.draw();
            buttonAttack.hide();
            buttonEnemyAttack.hide();
            isBattling = false;
            battleIsFinished = true;
            enemyIsDead = false;
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
            const knightWalkAnimation = [knightWalkImg0, knightWalkImg1, knightWalkImg2, knightWalkImg3, knightWalkImg4,
                                         knightWalkImg5, knightWalkImg6, knightWalkImg7, knightWalkImg8, knightWalkImg9];
            player = new Knight(knightImg, initialX, initialY, 300, 250, knightWalkAnimation);
        } else {
            player = new Wizard(wizardImg, initialX, initialY, 240, 250);
        }

        loop();
    }

    function restartGame() {
        document.querySelector('.game-over').style.display = 'none';
        document.querySelector('#game-board').style.display = 'initial';
        startGame();
    }
};