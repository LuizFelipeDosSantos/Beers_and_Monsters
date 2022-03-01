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

let trollImg;
let trollAttackImg0, trollAttackImg1, trollAttackImg2, trollAttackImg3, trollAttackImg4,
    trollAttackImg5, trollAttackImg6, trollAttackImg7, trollAttackImg8, trollAttackImg9;
let trollHealthBarWidth = 200;

let golemImg;
let golemAttackImg0, golemAttackImg1, golemAttackImg2, golemAttackImg3, golemAttackImg4, golemAttackImg5,
    golemAttackImg6, golemAttackImg7, golemAttackImg8, golemAttackImg9, golemAttackImg10, golemAttackImg11;
let golemHealthBarWidth = 250;

let minotaurImg;
let minotaurAttackImg0, minotaurAttackImg1, minotaurAttackImg2, minotaurAttackImg3, minotaurAttackImg4, minotaurAttackImg5,
    minotaurAttackImg6, minotaurAttackImg7, minotaurAttackImg8, minotaurAttackImg9, minotaurAttackImg10, minotaurAttackImg11;
let minotaurHealthBarWidth = 300;

let enemyAttackAnimation = [];

let heartImg, dice1Img, dice2Img, dice3Img, dice4Img, dice5Img, dice6Img, dice;

let forestImg, ruinsImg, graveyardImg, castleImg;

let buttonAttack, buttonEnemyAttack, attackDamage;

let beerImg, treasureImg;

let drankBeer = false;
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
                enemyAttackAnimation = [trollAttackImg0, trollAttackImg1, trollAttackImg2, trollAttackImg3, trollAttackImg4,
                                        trollAttackImg5, trollAttackImg6, trollAttackImg7, trollAttackImg8, trollAttackImg9];
            }
            break;
        case 3:
            background(graveyardImg);
            if (!(enemy instanceof Golem)) {
                enemy = new Golem(golemImg, player.x + 500, player.y, 180, 260);
                enemyAttackAnimation = [golemAttackImg0, golemAttackImg1, golemAttackImg2, golemAttackImg3, golemAttackImg4, golemAttackImg5,
                                        golemAttackImg6, golemAttackImg7, golemAttackImg8, golemAttackImg9, golemAttackImg10, golemAttackImg11];
            }
            break;
        case 4:
            background(castleImg);
            if (!(enemy instanceof Minotaur)) {
                enemy = new Minotaur(minotaurImg, player.x + 500, player.y - 100, 400, 350);
                enemyAttackAnimation = [minotaurAttackImg0, minotaurAttackImg1, minotaurAttackImg2, minotaurAttackImg3, minotaurAttackImg4, minotaurAttackImg5,
                                        minotaurAttackImg6, minotaurAttackImg7, minotaurAttackImg8, minotaurAttackImg9, minotaurAttackImg10, minotaurAttackImg11];
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

function gotBeer() {
    return (player.x + (player.width / 3)) >= enemy.x;
}

function drinkBeer() {
    player.health = (player.health + 10) > 50 ? 50 : player.health + 10; 
    drankBeer = true;
}

function showPlayerLife() {
    image(heartImg, player.x, player.y - 50, 32, 32);
    fill(255);
    if (player instanceof Knight) {
        rect(player.x + 40, player.y - 50, knightHealthBarWidth, 20);   
    } else {
        rect(player.x + 40, player.y - 50, wizardHealthBarWidth, 20);
    }
    fill(255,0,0);
    rect(player.x + 40, player.y - 50, player.health * 5, 20);
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
    trollImg = loadImage('../assets/troll/troll.png');
    golemImg = loadImage('../assets/golem/golem.png');
    minotaurImg = loadImage('../assets/minotaur/minotaur.png');
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
    //Beer and Treasure
    beerImg = loadImage('../assets/beer.png');
    treasureImg = loadImage('../assets/treasure.png');
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

    /*wizardWalkImg0 = loadImage('../assets/wizard/wizard_walk_0.png');
    wizardWalkImg1 = loadImage('../assets/wizard/wizard_walk_1.png');
    wizardWalkImg2 = loadImage('../assets/wizard/wizard_walk_2.png');
    wizardWalkImg3 = loadImage('../assets/wizard/wizard_walk_3.png');
    wizardWalkImg4 = loadImage('../assets/wizard/wizard_walk_4.png');*/

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

    /*wizardAttackImg0 = loadImage('../assets/wizard/wizard_attack_0.png');
    wizardAttackImg1 = loadImage('../assets/wizard/wizard_attack_1.png');
    wizardAttackImg2 = loadImage('../assets/wizard/wizard_attack_2.png');
    wizardAttackImg3 = loadImage('../assets/wizard/wizard_attack_3.png');
    wizardAttackImg4 = loadImage('../assets/wizard/wizard_attack_4.png');*/

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

    trollAttackImg0 = loadImage('../assets/troll/troll_attack_0.png');
    trollAttackImg1 = loadImage('../assets/troll/troll_attack_1.png');
    trollAttackImg2 = loadImage('../assets/troll/troll_attack_2.png');
    trollAttackImg3 = loadImage('../assets/troll/troll_attack_3.png');
    trollAttackImg4 = loadImage('../assets/troll/troll_attack_4.png');
    trollAttackImg5 = loadImage('../assets/troll/troll_attack_5.png');
    trollAttackImg6 = loadImage('../assets/troll/troll_attack_6.png');
    trollAttackImg7 = loadImage('../assets/troll/troll_attack_7.png');
    trollAttackImg8 = loadImage('../assets/troll/troll_attack_8.png');
    trollAttackImg9 = loadImage('../assets/troll/troll_attack_9.png');

    golemAttackImg0 = loadImage('../assets/golem/golem_attack_0.png');
    golemAttackImg1 = loadImage('../assets/golem/golem_attack_1.png');
    golemAttackImg2 = loadImage('../assets/golem/golem_attack_2.png');
    golemAttackImg3 = loadImage('../assets/golem/golem_attack_3.png');
    golemAttackImg4 = loadImage('../assets/golem/golem_attack_4.png');
    golemAttackImg5 = loadImage('../assets/golem/golem_attack_5.png');
    golemAttackImg6 = loadImage('../assets/golem/golem_attack_6.png');
    golemAttackImg7 = loadImage('../assets/golem/golem_attack_7.png');
    golemAttackImg8 = loadImage('../assets/golem/golem_attack_8.png');
    golemAttackImg9 = loadImage('../assets/golem/golem_attack_9.png');
    golemAttackImg10 = loadImage('../assets/golem/golem_attack_10.png');
    golemAttackImg11 = loadImage('../assets/golem/golem_attack_11.png');

    minotaurAttackImg0 = loadImage('../assets/minotaur/minotaur_attack_0.png');
    minotaurAttackImg1 = loadImage('../assets/minotaur/minotaur_attack_1.png');
    minotaurAttackImg2 = loadImage('../assets/minotaur/minotaur_attack_2.png');
    minotaurAttackImg3 = loadImage('../assets/minotaur/minotaur_attack_3.png');
    minotaurAttackImg4 = loadImage('../assets/minotaur/minotaur_attack_4.png');
    minotaurAttackImg5 = loadImage('../assets/minotaur/minotaur_attack_5.png');
    minotaurAttackImg6 = loadImage('../assets/minotaur/minotaur_attack_6.png');
    minotaurAttackImg7 = loadImage('../assets/minotaur/minotaur_attack_7.png');
    minotaurAttackImg8 = loadImage('../assets/minotaur/minotaur_attack_8.png');
    minotaurAttackImg9 = loadImage('../assets/minotaur/minotaur_attack_9.png');
    minotaurAttackImg10 = loadImage('../assets/minotaur/minotaur_attack_10.png');
    minotaurAttackImg11 = loadImage('../assets/minotaur/minotaur_attack_11.png');
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
                    showPlayerLife();
                } else {
                    player.draw();
                    showPlayerLife();
                }
            } else if (keyIsDown(RIGHT_ARROW)) {
                player.moveRight();
                showPlayerLife();
                if (gotBeer() && !drankBeer) {
                    drinkBeer();
                }
            } else {
                player.draw();
                showPlayerLife();
            }

            if (player.x > width) {
                level++;
                player.x = initialX;
                battleIsFinished = false;
                drankBeer = false;
            }

            if ((player.x > 300) && (!battleIsFinished)) {
                enemy.x =  player.x + 500;
                enemy.draw();
                isBattling = true;
                dice = dice1Img;
            }

            if (battleIsFinished && !drankBeer) {
                image(beerImg, enemy.x, initialY + player.height - 100, 100, 100);
            }

        } else if (!enemyIsDead) {
            if (!animationPlayerAttackIsRunning) {
                player.draw();
                showPlayerLife();
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
            showPlayerLife();
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
        drankBeer = false;
        gameIsRunning = false;
        isBattling = false;
        battleIsFinished = false;
        enemyIsDead = false;
        enemyAttacked = false;
        animationPlayerAttackIsRunning = false;
        animationEnemyAttackIsRunning = false;
        animationIndex = -1;
    }
};