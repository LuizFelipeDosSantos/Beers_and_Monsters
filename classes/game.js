let playerChoose;
let level = 1;
let turn = 0;
let player;
let knightImg;
let knightWalkImg0, knightWalkImg1, knightWalkImg2, knightWalkImg3, knightWalkImg4,
    knightWalkImg5, knightWalkImg6, knightWalkImg7, knightWalkImg8, knightWalkImg9;
let knightAttackImg0, knightAttackImg1, knightAttackImg2, knightAttackImg3, knightAttackImg4,
    knightAttackImg5, knightAttackImg6, knightAttackImg7, knightAttackImg8, knightAttackImg9;
let knightHealthBarWidth = 250;

let wizardImg;
let wizardWalkImg0, wizardWalkImg1, wizardWalkImg2, wizardWalkImg3, wizardWalkImg4;
let wizardAttackImg0, wizardAttackImg1, wizardAttackImg2, wizardAttackImg3, wizardAttackImg4;
let wizardHealthBarWidth = 200;

let playerAttackAnimation = [];

let enemy;
let orcImg;
let orcAttackImg0, orcAttackImg1, orcAttackImg2, orcAttackImg3, orcAttackImg4, orcAttackImg5,
    orcAttackImg6, orcAttackImg7, orcAttackImg8, orcAttackImg9, orcAttackImg10, orcAttackImg11;
let orcHealthBarWidth = 150;

let enemyAttackAnimation = [];

let trollImg;
let trollHealthBarWidth = 200;

let golemImg;
let golemHealthBarWidth = 250;

let minotaurImg;
let minotaurHealthBarWidth = 300;

let heartImg, dice1Img, dice2Img, dice3Img, dice4Img, dice5Img, dice6Img, dice;

let forestImg, ruinsImg, graveyardImg, castleImg;

let buttonAttack, buttonEnemyAttack, attackDamage;

let gameIsRunning = false;
let isBattling = false;
let battleIsFinished = false;
let enemyIsDead = false;
let enemyAttacked = false;
let animationPlayerAttackIsRunning = false;
let animationEnemyAttackIsRunning = false;
let animationIndex = -1;

let initialX = 0;
let initialY = 220;

function loadLevel() {
    switch (level) {
        case 1:
            background(forestImg);
            if (!(enemy instanceof Orc)) {
                enemy = new Orc(orcImg, player.x + 500, player.y, 180, 260);
                enemyAttackAnimation = [orcAttackImg0, orcAttackImg1, orcAttackImg2, orcAttackImg3, orcAttackImg4, orcAttackImg5,
                                        orcAttackImg6, orcAttackImg7, orcAttackImg8, orcAttackImg9, orcAttackImg10, orcAttackImg11];
            }
            break;
        case 2:
            background(ruinsImg);
            if (!(enemy instanceof Troll)) {
                enemy = new Troll(trollImg, player.x + 500, player.y - 100, 400, 350);
                enemyAttackAnimation = [];
            }
            break;
        case 3:
            background(graveyardImg);
            if (!(enemy instanceof Golem)) {
                enemy = new Golem(golemImg, player.x + 500, player.y, 180, 260);
            }
            break;
        case 4:
            background(castleImg);
            if (!(enemy instanceof Minotaur)) {
                enemy = new Minotaur(minotaurImg, player.x + 500, player.y - 100, 400, 350);
            }
            break;
        default:
            youWin();
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
    if (!animationPlayerAttackIsRunning) {
        const diceResult = rollDice();

        fill(255);
        image(dice, player.x + 300, player.y, 100, 100);
    
        attackDamage = player.attack() * diceResult;
    
        if (animationIndex < 0) {
            animationIndex = 0;
            animationPlayerAttackIsRunning = true;
            frameRate(30);
        }
    }

    if (animationIndex >= 0){
        if (animationIndex >= playerAttackAnimation.length) {
            animationPlayerAttackIsRunning = false;
            animationIndex = -1;
            frameRate(60);
        } else {
            image(playerAttackAnimation[animationIndex], player.x, player.y, player.width, player.height);
            animationIndex++;
        }
    }

    if (!animationPlayerAttackIsRunning) {
        enemy.receiveDamage(attackDamage);

        if (enemy.isDead()) {
            enemy.health = 0;
            enemyIsDead = true;
        } else {
            turn = 1;
        }    
    }
}

function enemyAttack() {
    if (!animationEnemyAttackIsRunning) {
        const diceResult = rollDice()
    
        fill(255);
        image(dice, player.x + 300, player.y, 100, 100);
    
        attackDamage = enemy.attack() * diceResult;
        
        if (animationIndex < 0) {
            animationIndex = 0;
            animationEnemyAttackIsRunning = true;
            frameRate(30);
        }
    }

    if (animationIndex >= 0){
        if (animationIndex >= enemyAttackAnimation.length) {
            animationEnemyAttackIsRunning = false;
            animationIndex = -1;
            frameRate(60);
        } else {
            image(enemyAttackAnimation[animationIndex], enemy.x, enemy.y, enemy.width, enemy.height);
            animationIndex++;
        }
    }
    
    if (!animationEnemyAttackIsRunning) {
        player.receiveDamage(attackDamage);

        if (player.isDead()) {
            player.health = 0;
            buttonEnemyAttack.hide();
            youLose();
        } else {
            turn = 0;
        }
    }
}

function youWin() {
    noLoop();
    document.querySelector('#game-board').style.display = 'none';
    document.querySelector('.game-over').style.display = 'initial';
    document.querySelector('#win').style.display = 'initial';
    document.querySelector('#lose').style.display = 'none';
}

function youLose() {
    noLoop();
    document.querySelector('#game-board').style.display = 'none';
    document.querySelector('.game-over').style.display = 'initial';
    document.querySelector('#win').style.display = 'none';
    document.querySelector('#lose').style.display = 'initial';
}

function preload() {
    //Characters
    knightImg = loadImage('../assets/knight/knight.png');
    wizardImg = loadImage('../assets/wizard/wizard.png');
    orcImg = loadImage('../assets/orc/orc.png');
    trollImg = loadImage('../assets/troll.png');
    golemImg = loadImage('../assets/golem.png');
    minotaurImg = loadImage('../assets/minotaur.png');
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
    graveyardImg = loadImage('../assets/graveyard.png');
    castleImg = loadImage('../assets/castle.png');
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

    wizardWalkImg0 = loadImage('../assets/wizard/wizard_walk_0.png');
    wizardWalkImg1 = loadImage('../assets/wizard/wizard_walk_1.png');
    wizardWalkImg2 = loadImage('../assets/wizard/wizard_walk_2.png');
    wizardWalkImg3 = loadImage('../assets/wizard/wizard_walk_3.png');
    wizardWalkImg4 = loadImage('../assets/wizard/wizard_walk_4.png');

    knightAttackImg0 = loadImage('../assets/knight/knight_attack_0.png');
    knightAttackImg1 = loadImage('../assets/knight/knight_attack_1.png');
    knightAttackImg2 = loadImage('../assets/knight/knight_attack_2.png');
    knightAttackImg3 = loadImage('../assets/knight/knight_attack_3.png');
    knightAttackImg4 = loadImage('../assets/knight/knight_attack_4.png');
    knightAttackImg5 = loadImage('../assets/knight/knight_attack_5.png');
    knightAttackImg6 = loadImage('../assets/knight/knight_attack_6.png');
    knightAttackImg7 = loadImage('../assets/knight/knight_attack_7.png');
    knightAttackImg8 = loadImage('../assets/knight/knight_attack_8.png');
    knightAttackImg9 = loadImage('../assets/knight/knight_attack_9.png');

    wizardAttackImg0 = loadImage('../assets/wizard/wizard_attack_0.png');
    wizardAttackImg1 = loadImage('../assets/wizard/wizard_attack_1.png');
    wizardAttackImg2 = loadImage('../assets/wizard/wizard_attack_2.png');
    wizardAttackImg3 = loadImage('../assets/wizard/wizard_attack_3.png');
    wizardAttackImg4 = loadImage('../assets/wizard/wizard_attack_4.png');

    orcAttackImg0 = loadImage('../assets/orc/orc_attack_0.png');
    orcAttackImg1 = loadImage('../assets/orc/orc_attack_1.png');
    orcAttackImg2 = loadImage('../assets/orc/orc_attack_2.png');
    orcAttackImg3 = loadImage('../assets/orc/orc_attack_3.png');
    orcAttackImg4 = loadImage('../assets/orc/orc_attack_4.png');
    orcAttackImg5 = loadImage('../assets/orc/orc_attack_5.png');
    orcAttackImg6 = loadImage('../assets/orc/orc_attack_6.png');
    orcAttackImg7 = loadImage('../assets/orc/orc_attack_7.png');
    orcAttackImg8 = loadImage('../assets/orc/orc_attack_8.png');
    orcAttackImg9 = loadImage('../assets/orc/orc_attack_9.png');
    orcAttackImg10 = loadImage('../assets/orc/orc_attack_10.png');
    orcAttackImg11 = loadImage('../assets/orc/orc_attack_11.png');
}
  
function setup() {
    const canvas = createCanvas(windowWidth - 30, windowHeight - 60);
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
            if (!animationPlayerAttackIsRunning) {
                player.draw();
            }
            if (!animationEnemyAttackIsRunning) {
                enemy.draw();
            }

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
            
            let enemyHealthBar;
            switch (enemy.constructor) {
                case Orc:
                    enemyHealthBar = orcHealthBarWidth;
                    break;
                case Troll:
                    enemyHealthBar = trollHealthBarWidth;
                    break;
                case Golem:
                    enemyHealthBar = golemHealthBarWidth;
                    break;
                case Minotaur:
                    enemyHealthBar = minotaurHealthBarWidth;
            }
            rect(enemy.x + 40, enemy.y - 50, enemyHealthBar, 20);

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
                if (animationPlayerAttackIsRunning) {
                    playerAttack();
                }
            } else { //Enemy's Turn
                buttonEnemyAttack.position(enemy.x + 20, enemy.y + 300);
                if (!player.isDead()) {
                    buttonEnemyAttack.show();
                }
                buttonAttack.hide();
                if (animationEnemyAttackIsRunning) {
                    enemyAttack();
                }
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
            playerAttackAnimation = [knightAttackImg0, knightAttackImg1, knightAttackImg2, knightAttackImg3, knightAttackImg4,
                                     knightAttackImg5, knightAttackImg6, knightAttackImg7, knightAttackImg8, knightAttackImg9];
            const knightWalkAnimation = [knightWalkImg0, knightWalkImg1, knightWalkImg2, knightWalkImg3, knightWalkImg4,
                                         knightWalkImg5, knightWalkImg6, knightWalkImg7, knightWalkImg8, knightWalkImg9];
            player = new Knight(knightImg, initialX, initialY, 300, 250, knightWalkAnimation);
        } else {
            playerAttackAnimation = [wizardAttackImg0, wizardAttackImg1, wizardAttackImg2, wizardAttackImg3, wizardAttackImg4];
            const wizardWalkAnimation = [wizardWalkImg0, wizardWalkImg1, wizardWalkImg2, wizardWalkImg3, wizardWalkImg4];
            player = new Wizard(wizardImg, initialX, initialY, 240, 250, wizardWalkAnimation);
        }

        loop();
    }

    function restartGame() {
        document.querySelector('.game-over').style.display = 'none';
        document.querySelector('.game-intro').style.display = 'initial';
        level = 1;
        turn = 0;
        gameIsRunning = false;
        isBattling = false;
        battleIsFinished = false;
        enemyIsDead = false;
        enemyAttacked = false;
        animationPlayerAttackIsRunning = false;
        animationEnemyAttackIsRunning = false;
        animationIndex = -1;
        //startGame();
    }
};