# Beers & Dragons
[Link Github] (https://github.com/LuizFelipeDosSantos/Beers_and_Dragons)
[Link Deploy]

## Description
Beers and Dragons is a turn-based RPG where your objective is to get the treasure in the cave.
On the way you will meet monsters that tried to stop you.
To fight them, you must use the attack button and roll the dice to see how hard you hit the enemy.
When the enemy's health reaches 0 you've defeated him and you can go on your way.
If your health reaches 0 you are dead and you didn't get the treasure.

## MVP
- in the left corner you have the map of the region;
- in the right corner you have the battle;
- you duel with a monster.

## Backlog
- add items;
- make the map random;
- add more classes.

## Data structure
### game.js
- startGame();
- setup();
- draw();
- Monster(health, strength) {}
    - attack();
    - receiveDamage();
- Player(health, strength, items[]) {}
    - attack();
    - receiveDamage();
    - useItem();

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
- game - duel
- game - GameOver
- game - addEventListener

## Additional Links
### Trello
[Link url] (https://trello.com)

### Slides
[Link Slides.com] (https://slides.com)