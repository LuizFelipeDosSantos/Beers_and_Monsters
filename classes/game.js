let level = 1;
let turn = 0;
let player;
let knightImg;
let knightWalkImgs = [];
let knightAttackImgs = [];
let knightDyingImgs = [];
let knightHealthBarWidth = 300;

let playerAttackAnimation = [];
let playerDyingAnimation = [];

let enemy;
let orcImg;
let orcAttackImgs = [];
let orcDyingImgs = [];
let orcHealthBarWidth = 200;

let trollImg;
let trollAttackImgs = [];
let trollDyingImgs = [];
let trollHealthBarWidth = 250;

let golemImg;
let golemAttackImgs = [];
let golemDyingImgs = [];
let golemHealthBarWidth = 300;

let minotaurImg;
let minotaurAttackImgs = [];
let minotaurDyingImgs = [];
let minotaurHealthBarWidth = 350;

let enemyAttackAnimation = [];
let enemyDyingAnimation = [];

let heartImg, dice1Img, dice2Img, dice3Img, dice4Img, dice5Img, dice6Img, dice;

let forestImg, ruinsImg, graveyardImg, castleImg, tilesetImg;

let level1BackgroundSound, level2BackgroundSound, level3BackgroundSound, level4BackgroundSound;
let levelFootstepSound;
let level1FootstepSound, level2FootstepSound, level3FootstepSound, level4FootstepSound;
let levelEnemySound;
let level1EnemySound, level2EnemySound, level3EnemySound, level4EnemySound;
let levelEnemyAttackSound;
let level1EnemyAttackSound, level2EnemyAttackSound, level3EnemyAttackSound, level4EnemyAttackSound;
let knightAttackSound;
let beerSound, treasureSound;
let mushroomSound, cauldronSound, potionSound, bookSound;
let winSound, gameoverSound;
let countSoundControl = 0;

let buttonAttack, buttonEnemyAttack, buttonYes, buttonNo, buttonRestart;
let attackDamage;

let beerImg, treasureImg;
let mushroomImg, cauldronImg, potionImg, bookImg;
let batmanLogoImg;

let drankBeer = false;
let gameIsRunning = false;
let isBattling = false;
let battleIsFinished = false;
let playerIsDead = false;
let enemyIsDead = false;
let enemyAttacked = false;
let animationPlayerAttackIsRunning = false;
let animationPlayerDyingIsRunning = false;
let animationEnemyAttackIsRunning = false;
let animationEnemyDyingIsRunning = false;
let isDecisionLevel = true;
let isDeciding = false;
let decided = false;
let decision;
let showItem = true;
let showBatmanEasterEgg = false;
let animationIndex = -1;
let diceResult;

let initialX = 0;
let initialY = 220;

function loadLevel() {
    switch (level) {
        case 1:
        case 1.5:
            background(forestImg);
            batmanEasterEgg();
            isDecisionLevel = level === 1;
            if (!(enemy instanceof Orc)) {
                enemy = new Orc(orcImg, player.x + 500, player.y, 180, 260);
                enemyAttackAnimation = orcAttackImgs;
                enemyDyingAnimation = orcDyingImgs;
                levelFootstepSound = level1FootstepSound;
                levelEnemySound = level1EnemySound;
                levelEnemyAttackSound = level1EnemyAttackSound;
                level1BackgroundSound.play();
                level1BackgroundSound.setVolume(0.1);
                level1BackgroundSound.loop();
            }
            break;
        case 2:
        case 2.5:
            background(ruinsImg);
            batmanEasterEgg();
            isDecisionLevel = level === 2;
            if (!(enemy instanceof Troll)) {
                enemy = new Troll(trollImg, player.x + 500, player.y - 100, 400, 350);
                enemyAttackAnimation = trollAttackImgs;
                enemyDyingAnimation = trollDyingImgs;
                levelFootstepSound = level2FootstepSound;
                levelEnemySound = level2EnemySound;
                levelEnemyAttackSound = level2EnemyAttackSound;
                level1BackgroundSound.stop();
                level2BackgroundSound.play();
                level2BackgroundSound.setVolume(0.1);
                level2BackgroundSound.loop();
            }
            break;
        case 3:
        case 3.5:
            background(graveyardImg);
            batmanEasterEgg();
            isDecisionLevel = level === 3;
            if (!(enemy instanceof Golem)) {
                enemy = new Golem(golemImg, player.x + 500, player.y, 180, 260);
                enemyAttackAnimation = golemAttackImgs;
                enemyDyingAnimation = golemDyingImgs;
                levelFootstepSound = level3FootstepSound;
                levelEnemySound = level3EnemySound;
                levelEnemyAttackSound = level3EnemyAttackSound;
                level2BackgroundSound.stop();
                level3BackgroundSound.play();
                level3BackgroundSound.setVolume(0.1);
                level3BackgroundSound.loop();
            }
            break;
        case 4:
        case 4.5:
            background(castleImg);
            batmanEasterEgg();
            isDecisionLevel = level === 4;
            if (!(enemy instanceof Minotaur)) {
                enemy = new Minotaur(minotaurImg, player.x + 500, player.y - 100, 400, 350);
                enemyAttackAnimation = minotaurAttackImgs;
                enemyDyingAnimation = minotaurDyingImgs;
                levelFootstepSound = level4FootstepSound;
                levelEnemySound = level4EnemySound;
                levelEnemyAttackSound = level4EnemyAttackSound;
                level3BackgroundSound.stop();
                level4BackgroundSound.play();
                level4BackgroundSound.setVolume(0.1);
                level4BackgroundSound.loop();
            }
            break;
        default:
            level4BackgroundSound.stop();
            youWin();
    }
}

function batmanEasterEgg() {
    if (showBatmanEasterEgg) {
        image(batmanLogoImg, 0, 0, 100, 100);
    }
}

function rollDice() {
    const result = Math.floor(random([1,2,3,4,5,6]));

    switch (result) {
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

    return result;
}

function showDamage() {
    if (diceResult > 0) {
        fill(0);
        rect(player.x + 250, player.y - 150, 240, 30);
        textSize(30);
        fill(255);
        text('Bonus Damage: ' + diceResult, player.x + 280, player.y - 128);
    }
}

function playerAttack() {
    if (!animationPlayerAttackIsRunning) {
        diceResult = rollDice();

        showDamage();

        fill(255);
        image(dice, player.x + 300, player.y, 100, 100);

        attackDamage = player.attack() * diceResult;

        if (animationIndex < 0) {
            animationIndex = 0;
            animationPlayerAttackIsRunning = true;
            frameRate(30);
        }

        playKnightAttackSound();
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
        diceResult = rollDice()

        showDamage();

        fill(255);
        image(dice, player.x + 300, player.y, 100, 100);

        attackDamage = enemy.attack() * diceResult;

        if (animationIndex < 0) {
            animationIndex = 0;
            animationEnemyAttackIsRunning = true;
            frameRate(30);
        }

        playEnemyAttackSound();
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
            playerIsDead = true;
        } else {
            turn = 0;
        }
    }
}

function gotBeer() {
    return (player.x + (player.width / 3)) >= enemy.x;
}

function drinkBeer() {
    if (level < 4) {
        player.health = (player.health + 10) > 60 ? 60 : player.health + 10;
        beerSound.play();
    } else {
        player.health = 60;
        treasureSound.play();
    }
    drankBeer = true;
}

function gotItem() {
    return (player.x + (player.width / 3)) >= 700;
}

function getDecisionItem() {
    switch (level) {
        case 1:
            mushroomSound.play();
            player.health -= 10;
            break;
        case 2:
            cauldronSound.play();
            player.health += 5;
            enemy.strength += 2;
            break;
        case 3:
            potionSound.play();
            player.health += 10;
            break;
        case 4:
            bookSound.play();
            player.strength += 1;
    }
    showItem = false;
}

function showPlayerLife() {
    image(heartImg, player.x, player.y - 50, 32, 32);
    fill(255);
    rect(player.x + 40, player.y - 50, knightHealthBarWidth, 20);
    fill(255,0,0);
    rect(player.x + 40, player.y - 50, player.health * 5, 20);
}

function playFootstepSound() {
    if (countSoundControl === 0) {
        levelFootstepSound.play();
        countSoundControl = countSoundControl + 0.05;
    } else {
        countSoundControl = countSoundControl + 0.05;
        if (countSoundControl >= 1) {
            countSoundControl = 0;
        }
    }
}

function playEnemySound() {
    levelEnemySound.play();
}

function playEnemyAttackSound() {
    levelEnemyAttackSound.play();
}

function playKnightAttackSound() {
    knightAttackSound.play();
}

function playWinSound() {
    winSound.play();
    winSound.setVolume(0.3);
}

function playGameOverSound() {
    gameoverSound.play();
    gameoverSound.setVolume(0.3);
}

function restartGame() {
    level = 1;
    turn = 0;
    drankBeer = false;
    gameIsRunning = false;
    isBattling = false;
    battleIsFinished = false;
    playerIsDead = false;
    enemyIsDead = false;
    enemyAttacked = false;
    animationPlayerAttackIsRunning = false;
    animationEnemyAttackIsRunning = false;
    animationIndex = -1;

    startGame();
}

function youWin() {
    noLoop();
    gameIsRunning = false;
    playWinSound();
    background(tilesetImg);

    fill(255);
    textSize(40);
    text('Congratulations!', 480, 150);
    text('You found the Beer of Immortality!', 480, 200);

    buttonRestart.position(600, 300);
    buttonRestart.show();
}

function youLose() {
    switch (level) {
        case 1.5:
            level1BackgroundSound.stop();
            break;
        case 2.5:
            level2BackgroundSound.stop();
            break;
        case 3.5:
            level3BackgroundSound.stop();
            break;
        case 4.5:
            level4BackgroundSound.stop();
    }

    noLoop();
    gameIsRunning = false;

    background(tilesetImg);
    fill(255);
    textSize(40);

    text('Oh no, you died!', 480, 150);
    text("Maybe you haven't had enough beer.", 480, 200);

    buttonRestart.position(600, 300);
    buttonRestart.show();
}

function decisionYes() {
    decision = true;
    decided = true;
    isDeciding = false;
}

function decisionNo() {
    decision = false;
    decided = true;
    isDeciding = false;
}

function makeDecision() {
    switch (level) {
        case 1:
            fill(0);
            rect(player.x - 10, 0, 850, 120);
            textSize(30);
            fill(255);
            text('You found a mushroom on the ground.', player.x, 30);
            text('It can have an effect on your strength, but it can also be poisonous.', player.x, 60);
            text('Do you choose to eat it or not?', player.x, 90);
            break;
        case 2:
            fill(0);
            rect(player.x - 10, 0, 700, 120);
            textSize(30);
            fill(255);
            text('You found a cauldron with soup.', player.x, 30);
            text('There is no one around and this can increase your health.', player.x, 60);
            text('Do you take some of the soup or not?', player.x, 90);
            break;
        case 3:
            fill(0);
            rect(player.x - 10, 0, 700, 120);
            textSize(30);
            fill(255);
            text('You found a potion.', player.x, 30);
            text('It looks like a potion that can increase your health.', player.x, 60);
            text('Do you take the potion or not?', player.x, 90);
            break;
        case 4:
            fill(0);
            rect(player.x - 80, 0, 1000, 120);
            textSize(30);
            fill(255);
            text('You found a book.', player.x - 70, 30);
            text('This book may contain some secret about the keeper of the "Immortality Item".', player.x - 70, 60);
            text('Do you read the book or not?', player.x - 70, 90);
    }
}

function itemResult() {
    switch (level) {
        case 1:
            fill(0);
            rect(400 - 10, 0, 450, 90);
            textSize(30);
            textFont(fontVT323);
            textStyle(BOLD);
            fill(255);
            text('No, the mushroom was poisonous.', 400, 30);
            text("You've lost your health a little.", 400, 60);
            break;
        case 2:
            fill(0);
            rect(100 - 10, 0, 1000, 90);
            textSize(30);
            textStyle(BOLD);
            fill(255);
            text('You increased your health, but a Troll saw you eat his food and is now angry.', 100, 30);
            text('He gained more strength in combat.', 100, 60);
            break;
        case 3:
            fill(0);
            rect(400 - 10, 0, 550, 90);
            textSize(30);
            textStyle(BOLD);
            fill(255);
            text('Luckily it was just a health potion anyway.', 400, 30);
            text('You have increased your health.', 400, 60);
            break;
        case 4:
            fill(0);
            rect(200 - 10, 0, 800, 90);
            textSize(30);
            textStyle(BOLD);
            fill(255);
            text('Now you know the weak point of the "Immortality Item" guardian.', 200, 30);
            text('You have increased your strength.', 200, 60);
    }
}

function preload() {
    fontVT323 = loadFont('./assets/VT323-Regular.ttf');

    level1BackgroundSound = loadSound('./assets/sounds/level1/background.mp3');
    level2BackgroundSound = loadSound('./assets/sounds/level2/background.mp3');
    level3BackgroundSound = loadSound('./assets/sounds/level3/background.mp3');
    level4BackgroundSound = loadSound('./assets/sounds/level4/background.mp3');

    level1FootstepSound = loadSound('./assets/sounds/level1/footstep.wav');
    level2FootstepSound = loadSound('./assets/sounds/level2/footstep.wav');
    level3FootstepSound = loadSound('./assets/sounds/level3/footstep.wav');
    level4FootstepSound = loadSound('./assets/sounds/level4/footstep.wav');

    level1EnemySound = loadSound('./assets/sounds/level1/enemy.wav');
    level2EnemySound = loadSound('./assets/sounds/level2/enemy.wav');
    level3EnemySound = loadSound('./assets/sounds/level3/enemy.wav');
    level4EnemySound = loadSound('./assets/sounds/level4/enemy.wav');

    level1EnemyAttackSound = loadSound('./assets/sounds/level1/enemy_attack.wav');
    level2EnemyAttackSound = loadSound('./assets/sounds/level2/enemy_attack.wav');
    level3EnemyAttackSound = loadSound('./assets/sounds/level3/enemy_attack.wav');
    level4EnemyAttackSound = loadSound('./assets/sounds/level4/enemy_attack.wav');

    knightAttackSound = loadSound('./assets/sounds/knight_attack.wav');

    beerSound = loadSound('./assets/sounds/beer.wav');
    treasureSound = loadSound('./assets/sounds/treasure.wav');
    mushroomSound = loadSound('./assets/sounds/mushroom.wav');
    cauldronSound = loadSound('./assets/sounds/cauldron.wav');
    potionSound = loadSound('./assets/sounds/potion.wav');
    bookSound = loadSound('./assets/sounds/book.wav');

    winSound = loadSound('./assets/sounds/win.wav');
    gameoverSound = loadSound('./assets/sounds/gameover.wav');

    //Characters
    knightImg = loadImage('./assets/knight/knight.png');
    orcImg = loadImage('./assets/orc/orc.png');
    trollImg = loadImage('./assets/troll/troll.png');
    golemImg = loadImage('./assets/golem/golem.png');
    minotaurImg = loadImage('./assets/minotaur/minotaur.png');
    //Heart
    heartImg = loadImage('./assets/heart.png');
    //Dices
    dice1Img = loadImage('./assets/dice_1.png');
    dice2Img = loadImage('./assets/dice_2.png');
    dice3Img = loadImage('./assets/dice_3.png');
    dice4Img = loadImage('./assets/dice_4.png');
    dice5Img = loadImage('./assets/dice_5.png');
    dice6Img = loadImage('./assets/dice_6.png');
    //Backgrounds
    forestImg = loadImage('./assets/forest.png');
    ruinsImg = loadImage('./assets/ruins.png');
    graveyardImg = loadImage('./assets/graveyard.png');
    castleImg = loadImage('./assets/castle.png');
    tilesetImg = loadImage('./assets/tileset.png');
    //Beer and Treasure
    beerImg = loadImage('./assets/beer.png');
    treasureImg = loadImage('./assets/treasure.png');
    //Easter Egg
    batmanLogoImg = loadImage('./assets/batman_logo.png');
    //Decisions
    mushroomImg = loadImage('./assets/mushroom.png');
    cauldronImg = loadImage('./assets/cauldron.png');
    potionImg = loadImage('./assets/potion.png');
    bookImg = loadImage('./assets/book.png');

    //Animations

    //Knight
    for (let i = 0; i < 10; i++)
      knightWalkImgs.push(loadImage(`./assets/knight/knight_walk_${i}.png`));
    for (let i = 0; i < 10; i++)
      knightAttackImgs.push(loadImage(`./assets/knight/knight_attack_${i}.png`));
    for (let i = 0; i < 10; i++)
      knightDyingImgs.push(loadImage(`./assets/knight/knight_die_${i}.png`));

    //Orc
    for (let i = 0; i < 12; i++)
      orcAttackImgs.push(loadImage(`./assets/orc/orc_attack_${i}.png`));
    for (let i = 0; i < 15; i++)
      orcDyingImgs.push(loadImage(`./assets/orc/orc_dying_${i}.png`));

    //Troll
    for (let i = 0; i < 10; i++)
      trollAttackImgs.push(loadImage(`./assets/troll/troll_attack_${i}.png`));
    for (let i = 0; i < 10; i++)
      trollDyingImgs.push(loadImage(`./assets/troll/troll_dying_${i}.png`));

    //Golem
    for (let i = 0; i < 12; i++)
      golemAttackImgs.push(loadImage(`./assets/golem/golem_attack_${i}.png`));
    for (let i = 0; i < 15; i++)
      golemDyingImgs.push(loadImage(`./assets/golem/golem_dying_${i}.png`));

    //Minotaur
    for (let i = 0; i < 12; i++)
      minotaurAttackImgs.push(loadImage(`./assets/minotaur/minotaur_attack_${i}.png`));
    for (let i = 0; i < 15; i++)
      minotaurDyingImgs.push(loadImage(`./assets/minotaur/minotaur_dying_${i}.png`));
}

function setup() {
    const canvas = createCanvas(windowWidth, windowHeight - 70);
    canvas.parent('game-board');

    buttonAttack = createButton('Attack');
    buttonAttack.mousePressed(playerAttack);
    buttonAttack.hide();
    buttonAttack.style("font-family", "VT323");

    buttonEnemyAttack = createButton('Enemy Attack');
    buttonEnemyAttack.mousePressed(enemyAttack);
    buttonEnemyAttack.hide();
    buttonEnemyAttack.style("font-family", "VT323");

    buttonYes = createButton('Yes');
    buttonYes.mousePressed(decisionYes);
    buttonYes.hide();
    buttonYes.style("font-family", "VT323");

    buttonNo = createButton('No');
    buttonNo.mousePressed(decisionNo);
    buttonNo.hide();
    buttonNo.style("font-family", "VT323");

    buttonRestart = createButton('Restart');
    buttonRestart.mousePressed(restartGame);
    buttonRestart.hide();

    dice = dice1Img;
    diceResult = 0;

    textFont(fontVT323);

    noLoop();
}

function draw() {
    if (gameIsRunning) {
        loadLevel();

        if (gameIsRunning) {
            if (!isBattling) {
                if (keyIsDown(LEFT_ARROW)) {
                    if (player.x > 0 && !isDeciding) {
                        playFootstepSound();
                        player.moveLeft();
                        showPlayerLife();
                    } else {
                        player.draw();
                        showPlayerLife();
                    }
                } else if (keyIsDown(RIGHT_ARROW)) {
                    if (!isDeciding) {
                        playFootstepSound();
                        player.moveRight();
                        showPlayerLife();
                        if (!isDecisionLevel) {
                            if (gotBeer() && !drankBeer) {
                                drinkBeer();
                            }
                        } else {
                            if (gotItem() && showItem && decision) {
                                getDecisionItem();
                            }
                        }
                    } else {
                        player.draw();
                        showPlayerLife();
                    }
                } else if (keyIsDown(66)) {
                    showBatmanEasterEgg = true;
                } else {
                    player.draw();
                    showPlayerLife();
                }

                //Another level
                if (player.x > width) {
                    level += 0.5;
                    player.x = initialX;
                    battleIsFinished = false;
                    drankBeer = false;
                    showItem = true;
                    decided = false;
                }

                if (!isDecisionLevel) {
                    if ((player.x > 300) && (!battleIsFinished)) {
                        enemy.x =  player.x + 500;
                        enemy.draw();
                        playEnemySound();
                        isBattling = true;
                        dice = dice1Img;
                        diceResult = 0;
                    }

                    if (battleIsFinished && !drankBeer) {
                        if (level === 4.5) {
                            image(treasureImg, enemy.x, initialY + player.height - 150, 150, 150);
                        } else {
                            image(beerImg, enemy.x, initialY + player.height - 100, 100, 100);
                        }
                    }

                } else {
                    if (showItem) {
                        switch (level) {
                            case 1:
                                image(mushroomImg, 700, player.y + player.height - 75, 75, 75);
                                break;
                            case 2:
                                image(cauldronImg, 700, player.y + player.height - 100, 100, 100);
                                break;
                            case 3:
                                image(potionImg, 700, player.y + player.height - 75, 75, 75);
                                break;
                            case 4:
                                image(bookImg, 700, player.y + player.height - 75, 75, 75);
                        }
                    } else {
                        itemResult();
                    }
                    if (player.x > 200 && !decided) {
                        isDeciding = true;
                        makeDecision();
                        buttonYes.position(player.x + player.width + 50, 170);
                        buttonYes.show();
                        buttonNo.position(player.x + player.width + 200, 170);
                        buttonNo.show();
                    } else {
                        buttonYes.hide();
                        buttonNo.hide();
                    }
                }

            } else if (!enemyIsDead) {
                if (!playerIsDead) {

                    if (!animationPlayerAttackIsRunning) {
                        player.draw();
                        showPlayerLife();
                    }
                    if (!animationEnemyAttackIsRunning) {
                        enemy.draw();
                    }

                    showPlayerLife();

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

                    showDamage();

                    //Dice
                    fill(255);
                    image(dice, player.x + 300, player.y, 100, 100);

                    //Player's Turn
                    if (turn === 0) {
                        buttonAttack.position(player.x + 20, player.y + 320);
                        buttonAttack.show();
                        buttonEnemyAttack.hide();
                        if (animationPlayerAttackIsRunning) {
                            playerAttack();
                        }
                    } else { //Enemy's Turn
                        if (enemy instanceof Orc || enemy instanceof Golem) {
                            buttonEnemyAttack.position(enemy.x + 20, enemy.y + 320);
                        } else {
                            buttonEnemyAttack.position(enemy.x + 40, enemy.y + 410);
                        }
                        if (!player.isDead()) {
                            buttonEnemyAttack.show();
                        }
                        buttonAttack.hide();
                        if (animationEnemyAttackIsRunning) {
                            enemyAttack();
                        }
                    }
                } else {
                    enemy.draw();

                    showDamage();

                    //Dice
                    fill(255);
                    image(dice, player.x + 300, player.y, 100, 100);

                    //Enemy's Life
                    image(heartImg, enemy.x, enemy.y - 50, 32, 32);
                    fill(255);

                    if (animationIndex < 0) {
                        animationIndex = 0;
                        animationPlayerDyingIsRunning = true;
                        frameRate(20);

                        playGameOverSound();
                    }

                    if (animationIndex >= 0){
                        if (animationIndex >= playerDyingAnimation.length) {
                            animationPlayerDyingIsRunning = false;
                            animationIndex = -1;
                            frameRate(60);
                            youLose();
                        } else {
                            image(playerDyingAnimation[animationIndex], player.x, player.y, player.width, player.height);
                            animationIndex++;
                        }
                    }
                }
            } else if (enemyIsDead) {
                player.draw();
                showPlayerLife();

                showDamage();

                //Dice
                fill(255);
                image(dice, player.x + 300, player.y, 100, 100);

                if (animationIndex < 0) {
                    animationIndex = 0;
                    animationEnemyDyingIsRunning = true;
                    frameRate(20);
                }

                if (animationIndex >= 0){
                    if (animationIndex >= enemyDyingAnimation.length) {
                        animationEnemyDyingIsRunning = false;
                        animationIndex = -1;
                        frameRate(60);
                    } else {
                        image(enemyDyingAnimation[animationIndex], enemy.x, enemy.y, enemy.width, enemy.height);
                        animationIndex++;
                    }
                }

                if (!animationEnemyDyingIsRunning) {
                    buttonAttack.hide();
                    buttonEnemyAttack.hide();
                    isBattling = false;
                    battleIsFinished = true;
                    enemyIsDead = false;
                }
            }
        }
    }
}

function startGame() {
    document.querySelector('.game-intro').style.display = 'none';
    document.querySelector('#game-board-div').style.display = 'initial';
    gameIsRunning = true;

    playerAttackAnimation = knightAttackImgs;
    const knightWalkAnimation = knightWalkImgs;
    playerDyingAnimation = knightDyingImgs;
    player = new Knight(knightImg, initialX, initialY, 300, 250, knightWalkAnimation);

    buttonRestart.hide();

    loop();
}

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };
};
