let level = 1;
let turn = 0;
let player;
let knightImg;
let knightWalkImg0, knightWalkImg1, knightWalkImg2, knightWalkImg3, knightWalkImg4,
    knightWalkImg5, knightWalkImg6, knightWalkImg7, knightWalkImg8, knightWalkImg9;
let knightAttackImg0, knightAttackImg1, knightAttackImg2, knightAttackImg3, knightAttackImg4,
    knightAttackImg5, knightAttackImg6, knightAttackImg7, knightAttackImg8, knightAttackImg9;
let knightDyingImg0, knightDyingImg1, knightDyingImg2, knightDyingImg3, knightDyingImg4,
    knightDyingImg5, knightDyingImg6, knightDyingImg7, knightDyingImg8, knightDyingImg9;
let knightHealthBarWidth = 250;

let playerAttackAnimation = [];
let playerDyingAnimation = [];

let enemy;
let orcImg;
let orcAttackImg0, orcAttackImg1, orcAttackImg2, orcAttackImg3, orcAttackImg4, orcAttackImg5,
    orcAttackImg6, orcAttackImg7, orcAttackImg8, orcAttackImg9, orcAttackImg10, orcAttackImg11;
let orcDyingImg0, orcDyingImg1, orcDyingImg2, orcDyingImg3, orcDyingImg4, orcDyingImg5,
    orcDyingImg6, orcDyingImg7, orcDyingImg8, orcDyingImg9, orcDyingImg10, orcDyingImg11,
    orcDyingImg12, orcDyingImg13, orcDyingImg14;
let orcHealthBarWidth = 150;

let trollImg;
let trollAttackImg0, trollAttackImg1, trollAttackImg2, trollAttackImg3, trollAttackImg4,
    trollAttackImg5, trollAttackImg6, trollAttackImg7, trollAttackImg8, trollAttackImg9;
let trollDyingImg0, trollDyingImg1, trollDyingImg2, trollDyingImg3, trollDyingImg4,
    trollDyingImg5, trollDyingImg6, trollDyingImg7, trollDyingImg8, trollDyingImg9;
let trollHealthBarWidth = 200;

let golemImg;
let golemAttackImg0, golemAttackImg1, golemAttackImg2, golemAttackImg3, golemAttackImg4, golemAttackImg5,
    golemAttackImg6, golemAttackImg7, golemAttackImg8, golemAttackImg9, golemAttackImg10, golemAttackImg11;
let golemDyingImg0, golemDyingImg1, golemDyingImg2, golemDyingImg3, golemDyingImg4, golemDyingImg5,
    golemDyingImg6, golemDyingImg7, golemDyingImg8, golemDyingImg9, golemDyingImg10, golemDyingImg11,
    golemDyingImg12, golemDyingImg13, golemDyingImg14;
let golemHealthBarWidth = 250;

let minotaurImg;
let minotaurAttackImg0, minotaurAttackImg1, minotaurAttackImg2, minotaurAttackImg3, minotaurAttackImg4, minotaurAttackImg5,
    minotaurAttackImg6, minotaurAttackImg7, minotaurAttackImg8, minotaurAttackImg9, minotaurAttackImg10, minotaurAttackImg11;
let minotaurDyingImg0, minotaurDyingImg1, minotaurDyingImg2, minotaurDyingImg3, minotaurDyingImg4, minotaurDyingImg5,
    minotaurDyingImg6, minotaurDyingImg7, minotaurDyingImg8, minotaurDyingImg9, minotaurDyingImg10, minotaurDyingImg11,
    minotaurDyingImg12, minotaurDyingImg13, minotaurDyingImg14;
let minotaurHealthBarWidth = 300;

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
let animationIndex = -1;
let diceResult;

let initialX = 0;
let initialY = 220;

function loadLevel() {
    switch (level) {
        case 1:
        case 1.5:
            background(forestImg);
            isDecisionLevel = level === 1;
            if (!(enemy instanceof Orc)) {
                enemy = new Orc(orcImg, player.x + 500, player.y, 180, 260);
                enemyAttackAnimation = [orcAttackImg0, orcAttackImg1, orcAttackImg2, orcAttackImg3, orcAttackImg4, orcAttackImg5,
                                        orcAttackImg6, orcAttackImg7, orcAttackImg8, orcAttackImg9, orcAttackImg10, orcAttackImg11];
                enemyDyingAnimation = [orcDyingImg0, orcDyingImg1, orcDyingImg2, orcDyingImg3, orcDyingImg4, orcDyingImg5,
                                       orcDyingImg6, orcDyingImg7, orcDyingImg8, orcDyingImg9, orcDyingImg10, orcDyingImg11,
                                       orcDyingImg12, orcDyingImg13, orcDyingImg14];
                levelFootstepSound = level1FootstepSound;
                levelEnemySound = level1EnemySound;
                levelEnemyAttackSound = level1EnemyAttackSound;
                level1BackgroundSound.play();
                level1BackgroundSound.setVolume(0.1);
            }
            break;
        case 2:
        case 2.5:
            background(ruinsImg);
            isDecisionLevel = level === 2;
            if (!(enemy instanceof Troll)) {
                enemy = new Troll(trollImg, player.x + 500, player.y - 100, 400, 350);
                enemyAttackAnimation = [trollAttackImg0, trollAttackImg1, trollAttackImg2, trollAttackImg3, trollAttackImg4,
                                        trollAttackImg5, trollAttackImg6, trollAttackImg7, trollAttackImg8, trollAttackImg9];
                enemyDyingAnimation = [trollDyingImg0, trollDyingImg1, trollDyingImg2, trollDyingImg3, trollDyingImg4,
                                       trollDyingImg5, trollDyingImg6, trollDyingImg7, trollDyingImg8, trollDyingImg9];
                levelFootstepSound = level2FootstepSound;
                levelEnemySound = level2EnemySound;
                levelEnemyAttackSound = level2EnemyAttackSound;
                level1BackgroundSound.stop();
                level2BackgroundSound.play();
                level2BackgroundSound.setVolume(0.1);
            }
            break;
        case 3:
        case 3.5:
            background(graveyardImg);
            isDecisionLevel = level === 3;
            if (!(enemy instanceof Golem)) {
                enemy = new Golem(golemImg, player.x + 500, player.y, 180, 260);
                enemyAttackAnimation = [golemAttackImg0, golemAttackImg1, golemAttackImg2, golemAttackImg3, golemAttackImg4, golemAttackImg5,
                                        golemAttackImg6, golemAttackImg7, golemAttackImg8, golemAttackImg9, golemAttackImg10, golemAttackImg11];
                enemyDyingAnimation = [golemDyingImg0, golemDyingImg1, golemDyingImg2, golemDyingImg3, golemDyingImg4, golemDyingImg5,
                                       golemDyingImg6, golemDyingImg7, golemDyingImg8, golemDyingImg9, golemDyingImg10, golemDyingImg11,
                                       golemDyingImg12, golemDyingImg13, golemDyingImg14];
                levelFootstepSound = level3FootstepSound;
                levelEnemySound = level3EnemySound;
                levelEnemyAttackSound = level3EnemyAttackSound;
                level2BackgroundSound.stop();
                level3BackgroundSound.play();
                level3BackgroundSound.setVolume(0.1);
            }
            break;
        case 4:
        case 4.5:
            background(castleImg);
            isDecisionLevel = level === 4;
            if (!(enemy instanceof Minotaur)) {
                enemy = new Minotaur(minotaurImg, player.x + 500, player.y - 100, 400, 350);
                enemyAttackAnimation = [minotaurAttackImg0, minotaurAttackImg1, minotaurAttackImg2, minotaurAttackImg3, minotaurAttackImg4, minotaurAttackImg5,
                                        minotaurAttackImg6, minotaurAttackImg7, minotaurAttackImg8, minotaurAttackImg9, minotaurAttackImg10, minotaurAttackImg11];
                enemyDyingAnimation = [minotaurDyingImg0, minotaurDyingImg1, minotaurDyingImg2, minotaurDyingImg3, minotaurDyingImg4, minotaurDyingImg5,
                                       minotaurDyingImg6, minotaurDyingImg7, minotaurDyingImg8, minotaurDyingImg9, minotaurDyingImg10, minotaurDyingImg11,
                                       minotaurDyingImg12, minotaurDyingImg13, minotaurDyingImg14];
                levelFootstepSound = level4FootstepSound;
                levelEnemySound = level4EnemySound;
                levelEnemyAttackSound = level4EnemyAttackSound;
                level3BackgroundSound.stop();
                level4BackgroundSound.play();
                level4BackgroundSound.setVolume(0.1);
            }
            break;
        default:
            level4BackgroundSound.stop();
            youWin();
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
        player.health = (player.health + 10) > 50 ? 50 : player.health + 10;
        beerSound.play();   
    } else {
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
    //document.querySelector('.game-over').style.display = 'none';
    //document.querySelector('.game-intro').style.display = 'initial';
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
    text('You found the beer of immortality!', 480, 200);

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
            text('You found a cauldron with a soup.', player.x, 30);
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
    //Decisions
    mushroomImg = loadImage('./assets/mushroom.png');
    cauldronImg = loadImage('./assets/cauldron.png');
    potionImg = loadImage('./assets/potion.png');
    bookImg = loadImage('./assets/book.png');
    //Animations
    knightWalkImg0 = loadImage('./assets/knight/knight_walk_0.png');
    knightWalkImg1 = loadImage('./assets/knight/knight_walk_1.png');
    knightWalkImg2 = loadImage('./assets/knight/knight_walk_2.png');
    knightWalkImg3 = loadImage('./assets/knight/knight_walk_3.png');
    knightWalkImg4 = loadImage('./assets/knight/knight_walk_4.png');
    knightWalkImg5 = loadImage('./assets/knight/knight_walk_5.png');
    knightWalkImg6 = loadImage('./assets/knight/knight_walk_6.png');
    knightWalkImg7 = loadImage('./assets/knight/knight_walk_7.png');
    knightWalkImg8 = loadImage('./assets/knight/knight_walk_8.png');
    knightWalkImg9 = loadImage('./assets/knight/knight_walk_9.png');

    knightAttackImg0 = loadImage('./assets/knight/knight_attack_0.png');
    knightAttackImg1 = loadImage('./assets/knight/knight_attack_1.png');
    knightAttackImg2 = loadImage('./assets/knight/knight_attack_2.png');
    knightAttackImg3 = loadImage('./assets/knight/knight_attack_3.png');
    knightAttackImg4 = loadImage('./assets/knight/knight_attack_4.png');
    knightAttackImg5 = loadImage('./assets/knight/knight_attack_5.png');
    knightAttackImg6 = loadImage('./assets/knight/knight_attack_6.png');
    knightAttackImg7 = loadImage('./assets/knight/knight_attack_7.png');
    knightAttackImg8 = loadImage('./assets/knight/knight_attack_8.png');
    knightAttackImg9 = loadImage('./assets/knight/knight_attack_9.png');

    knightDyingImg0 = loadImage('./assets/knight/knight_die_0.png');
    knightDyingImg1 = loadImage('./assets/knight/knight_die_1.png');
    knightDyingImg2 = loadImage('./assets/knight/knight_die_2.png');
    knightDyingImg3 = loadImage('./assets/knight/knight_die_3.png');
    knightDyingImg4 = loadImage('./assets/knight/knight_die_4.png');
    knightDyingImg5 = loadImage('./assets/knight/knight_die_5.png');
    knightDyingImg6 = loadImage('./assets/knight/knight_die_6.png');
    knightDyingImg7 = loadImage('./assets/knight/knight_die_7.png');
    knightDyingImg8 = loadImage('./assets/knight/knight_die_8.png');
    knightDyingImg9 = loadImage('./assets/knight/knight_die_9.png');

    orcAttackImg0 = loadImage('./assets/orc/orc_attack_0.png');
    orcAttackImg1 = loadImage('./assets/orc/orc_attack_1.png');
    orcAttackImg2 = loadImage('./assets/orc/orc_attack_2.png');
    orcAttackImg3 = loadImage('./assets/orc/orc_attack_3.png');
    orcAttackImg4 = loadImage('./assets/orc/orc_attack_4.png');
    orcAttackImg5 = loadImage('./assets/orc/orc_attack_5.png');
    orcAttackImg6 = loadImage('./assets/orc/orc_attack_6.png');
    orcAttackImg7 = loadImage('./assets/orc/orc_attack_7.png');
    orcAttackImg8 = loadImage('./assets/orc/orc_attack_8.png');
    orcAttackImg9 = loadImage('./assets/orc/orc_attack_9.png');
    orcAttackImg10 = loadImage('./assets/orc/orc_attack_10.png');
    orcAttackImg11 = loadImage('./assets/orc/orc_attack_11.png');

    orcDyingImg0 = loadImage('./assets/orc/orc_dying_0.png');
    orcDyingImg1 = loadImage('./assets/orc/orc_dying_1.png');
    orcDyingImg2 = loadImage('./assets/orc/orc_dying_2.png');
    orcDyingImg3 = loadImage('./assets/orc/orc_dying_3.png');
    orcDyingImg4 = loadImage('./assets/orc/orc_dying_4.png');
    orcDyingImg5 = loadImage('./assets/orc/orc_dying_5.png');
    orcDyingImg6 = loadImage('./assets/orc/orc_dying_6.png');
    orcDyingImg7 = loadImage('./assets/orc/orc_dying_7.png');
    orcDyingImg8 = loadImage('./assets/orc/orc_dying_8.png');
    orcDyingImg9 = loadImage('./assets/orc/orc_dying_9.png');
    orcDyingImg10 = loadImage('./assets/orc/orc_dying_10.png');
    orcDyingImg11 = loadImage('./assets/orc/orc_dying_11.png');
    orcDyingImg12 = loadImage('./assets/orc/orc_dying_12.png');
    orcDyingImg13 = loadImage('./assets/orc/orc_dying_13.png');
    orcDyingImg14 = loadImage('./assets/orc/orc_dying_14.png');

    trollAttackImg0 = loadImage('./assets/troll/troll_attack_0.png');
    trollAttackImg1 = loadImage('./assets/troll/troll_attack_1.png');
    trollAttackImg2 = loadImage('./assets/troll/troll_attack_2.png');
    trollAttackImg3 = loadImage('./assets/troll/troll_attack_3.png');
    trollAttackImg4 = loadImage('./assets/troll/troll_attack_4.png');
    trollAttackImg5 = loadImage('./assets/troll/troll_attack_5.png');
    trollAttackImg6 = loadImage('./assets/troll/troll_attack_6.png');
    trollAttackImg7 = loadImage('./assets/troll/troll_attack_7.png');
    trollAttackImg8 = loadImage('./assets/troll/troll_attack_8.png');
    trollAttackImg9 = loadImage('./assets/troll/troll_attack_9.png');

    trollDyingImg0 = loadImage('./assets/troll/troll_dying_0.png');
    trollDyingImg1 = loadImage('./assets/troll/troll_dying_1.png');
    trollDyingImg2 = loadImage('./assets/troll/troll_dying_2.png');
    trollDyingImg3 = loadImage('./assets/troll/troll_dying_3.png');
    trollDyingImg4 = loadImage('./assets/troll/troll_dying_4.png');
    trollDyingImg5 = loadImage('./assets/troll/troll_dying_5.png');
    trollDyingImg6 = loadImage('./assets/troll/troll_dying_6.png');
    trollDyingImg7 = loadImage('./assets/troll/troll_dying_7.png');
    trollDyingImg8 = loadImage('./assets/troll/troll_dying_8.png');
    trollDyingImg9 = loadImage('./assets/troll/troll_dying_9.png');

    golemAttackImg0 = loadImage('./assets/golem/golem_attack_0.png');
    golemAttackImg1 = loadImage('./assets/golem/golem_attack_1.png');
    golemAttackImg2 = loadImage('./assets/golem/golem_attack_2.png');
    golemAttackImg3 = loadImage('./assets/golem/golem_attack_3.png');
    golemAttackImg4 = loadImage('./assets/golem/golem_attack_4.png');
    golemAttackImg5 = loadImage('./assets/golem/golem_attack_5.png');
    golemAttackImg6 = loadImage('./assets/golem/golem_attack_6.png');
    golemAttackImg7 = loadImage('./assets/golem/golem_attack_7.png');
    golemAttackImg8 = loadImage('./assets/golem/golem_attack_8.png');
    golemAttackImg9 = loadImage('./assets/golem/golem_attack_9.png');
    golemAttackImg10 = loadImage('./assets/golem/golem_attack_10.png');
    golemAttackImg11 = loadImage('./assets/golem/golem_attack_11.png');

    golemDyingImg0 = loadImage('./assets/golem/golem_dying_0.png');
    golemDyingImg1 = loadImage('./assets/golem/golem_dying_1.png');
    golemDyingImg2 = loadImage('./assets/golem/golem_dying_2.png');
    golemDyingImg3 = loadImage('./assets/golem/golem_dying_3.png');
    golemDyingImg4 = loadImage('./assets/golem/golem_dying_4.png');
    golemDyingImg5 = loadImage('./assets/golem/golem_dying_5.png');
    golemDyingImg6 = loadImage('./assets/golem/golem_dying_6.png');
    golemDyingImg7 = loadImage('./assets/golem/golem_dying_7.png');
    golemDyingImg8 = loadImage('./assets/golem/golem_dying_8.png');
    golemDyingImg9 = loadImage('./assets/golem/golem_dying_9.png');
    golemDyingImg10 = loadImage('./assets/golem/golem_dying_10.png');
    golemDyingImg11 = loadImage('./assets/golem/golem_dying_11.png');
    golemDyingImg12 = loadImage('./assets/golem/golem_dying_12.png');
    golemDyingImg13 = loadImage('./assets/golem/golem_dying_13.png');
    golemDyingImg14 = loadImage('./assets/golem/golem_dying_14.png');

    minotaurAttackImg0 = loadImage('./assets/minotaur/minotaur_attack_0.png');
    minotaurAttackImg1 = loadImage('./assets/minotaur/minotaur_attack_1.png');
    minotaurAttackImg2 = loadImage('./assets/minotaur/minotaur_attack_2.png');
    minotaurAttackImg3 = loadImage('./assets/minotaur/minotaur_attack_3.png');
    minotaurAttackImg4 = loadImage('./assets/minotaur/minotaur_attack_4.png');
    minotaurAttackImg5 = loadImage('./assets/minotaur/minotaur_attack_5.png');
    minotaurAttackImg6 = loadImage('./assets/minotaur/minotaur_attack_6.png');
    minotaurAttackImg7 = loadImage('./assets/minotaur/minotaur_attack_7.png');
    minotaurAttackImg8 = loadImage('./assets/minotaur/minotaur_attack_8.png');
    minotaurAttackImg9 = loadImage('./assets/minotaur/minotaur_attack_9.png');
    minotaurAttackImg10 = loadImage('./assets/minotaur/minotaur_attack_10.png');
    minotaurAttackImg11 = loadImage('./assets/minotaur/minotaur_attack_11.png');

    minotaurDyingImg0 = loadImage('./assets/minotaur/minotaur_dying_0.png');
    minotaurDyingImg1 = loadImage('./assets/minotaur/minotaur_dying_1.png');
    minotaurDyingImg2 = loadImage('./assets/minotaur/minotaur_dying_2.png');
    minotaurDyingImg3 = loadImage('./assets/minotaur/minotaur_dying_3.png');
    minotaurDyingImg4 = loadImage('./assets/minotaur/minotaur_dying_4.png');
    minotaurDyingImg5 = loadImage('./assets/minotaur/minotaur_dying_5.png');
    minotaurDyingImg6 = loadImage('./assets/minotaur/minotaur_dying_6.png');
    minotaurDyingImg7 = loadImage('./assets/minotaur/minotaur_dying_7.png');
    minotaurDyingImg8 = loadImage('./assets/minotaur/minotaur_dying_8.png');
    minotaurDyingImg9 = loadImage('./assets/minotaur/minotaur_dying_9.png');
    minotaurDyingImg10 = loadImage('./assets/minotaur/minotaur_dying_10.png');
    minotaurDyingImg11 = loadImage('./assets/minotaur/minotaur_dying_11.png');
    minotaurDyingImg12 = loadImage('./assets/minotaur/minotaur_dying_12.png');
    minotaurDyingImg13 = loadImage('./assets/minotaur/minotaur_dying_13.png');
    minotaurDyingImg14 = loadImage('./assets/minotaur/minotaur_dying_14.png');
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
                } else {
                    player.draw();
                    showPlayerLife();
                }
                
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
    
                    //Player's Life
                    image(heartImg, player.x, player.y - 50, 32, 32);
                    fill(255);
                    rect(player.x + 40, player.y - 50, knightHealthBarWidth, 20);   
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
    
                    showDamage();

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

    playerAttackAnimation = [knightAttackImg0, knightAttackImg1, knightAttackImg2, knightAttackImg3, knightAttackImg4,
                             knightAttackImg5, knightAttackImg6, knightAttackImg7, knightAttackImg8, knightAttackImg9];
    const knightWalkAnimation = [knightWalkImg0, knightWalkImg1, knightWalkImg2, knightWalkImg3, knightWalkImg4,
                                 knightWalkImg5, knightWalkImg6, knightWalkImg7, knightWalkImg8, knightWalkImg9];
    playerDyingAnimation = [knightDyingImg0, knightDyingImg1, knightDyingImg2, knightDyingImg3, knightDyingImg4,
                            knightDyingImg5, knightDyingImg6, knightDyingImg7, knightDyingImg8, knightDyingImg9];
    player = new Knight(knightImg, initialX, initialY, 300, 250, knightWalkAnimation);

    buttonRestart.hide();

    loop();
}

window.onload = () => {
    document.getElementById('start-button').onclick = () => {
        startGame();
    };

    /*document.getElementById('restart-button').onclick = () => {
        restartGame();
    };*/

};