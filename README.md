# Beers & Monsters
Link Github https://github.com/LuizFelipeDosSantos/Beers_and_Monsters/
Link Deploy https://luizfelipedossantos.github.io/Beers_and_Monsters/

## Description
Beers and Monsters is a turn-based RPG where your objective is to get the Immortality Item in the cave.
On the way you will meet monsters that tried to stop you.
To fight them, you must use the attack button and roll the dice to see how hard you hit the enemy.
When the enemy's health reaches 0 you've defeated him and you can go on your way.
If your health reaches 0 you are dead and you didn't get the Immortality Item.

## MVP
- in the screen you have the battle;
- you duel with a monster.

## Backlog
- add items;
- make the map random;
- add more classes.

## Data structure
### game.js
- startGame();
- preload();
- setup();
- draw();
- loadLevel();
- rollDice();
- showDamage();
- playerAttack();
- enemyAttack();
- gotBeer();
- drinkBeer();
- gotItem();
- getDecisionItem();
- showPlayerLife();
- playFootstepSound();
- playEnemySound();
- playEnemyAttackSound();
- playKnightAttackSound();
- playWinSound();
- playGameOverSound();
- restartGame();
- youWin();
- youLose();
- decisionYes();
- decisionNo();
- makeDecision();
- itemResult();
- batmanEasterEgg()

### characters.js
- Character(img, x, y, width, height, health, strength) {}
    - draw();
    - attack();
    - receiveDamage();
    - isDead();
- Player extends Character(img, x, y, width, height, health, strength, walkAnimation) {}
    - moveLeft();
    - moveRight();
- Knight extends Player(img, x, y, width, height, walkAnimation) {}
- Orc extends Character(img, x, y, width, height) {}
- Troll extends Character(img, x, y, width, height) {}
- Golem extends Character(img, x, y, width, height) {}
- Minotaur extends Character(img, x, y, width, height) {}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameoverScreen
- winScreen

## Task
- main - buildDom
- main - buildSplashScreen
- main - addEventListener
- main - buildGameScreen
- main - buildGameOverScreen
- game - playerCreate
- game - enemyCreate
- game - startLoop
- game - buildCanvas
- game - updateCanvas
- game - drawCanvas
- game - moveAroundTheMap
- game - checkEnemy
- game - battle
- game - GameOver
- game - addEventListener

## Additional Links
### Slides
Link Slides.com https://slides.com/luizfelipedossantos-1/deck
