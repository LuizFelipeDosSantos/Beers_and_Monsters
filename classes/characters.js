class Character {
    constructor(img, x, y, width, height, health, strength) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.health = health;
        this.strength = strength;
    }

    draw() {
        image(this.img, this.x, this.y, this.width, this.height);
    }

    attack() {
        return this.strength;
    }

    receiveDamage(damage) {
        this.health -= damage;
    }

    isDead() {
        return this.health <= 0;
    }
}

class Player extends Character {
    constructor(img, x, y, width, height, health, strength, walkRightAnimation) {
        super(img, x, y, width, height, health, strength);
        this.walkRightAnimation = walkRightAnimation;
        this.walkAnimationIndex = 0;
    }

    moveLeft() {
        this.x -= 3;
        this.draw();
    }

    moveRight() {
        this.x += 3;
        if (this.walkAnimationIndex >= this.walkRightAnimation.length) {
            this.walkAnimationIndex = 0;
        }
        image(this.walkRightAnimation[this.walkAnimationIndex], this.x, this.y, this.width, this.height);
        this.walkAnimationIndex++;
    }
}

class Knight extends Player {
    constructor(img, x, y, width, height, walkRightAnimation) {
        super(img, x, y, width, height, 50, 5, walkRightAnimation);
    }
}

class Wizard extends Player {
    constructor(img, x, y, width, height) {
        super(img, x, y, width, height, 40, 7);
    }
}

class Orc extends Character {
    constructor(img, x, y, width, height) {
        super(img, x, y, width, height, 20, 2);
    }
}

class Troll extends Character {
    constructor(img, x, y, width, height) {
        super(img, x, y, width, height, 40, 3);
    }
}