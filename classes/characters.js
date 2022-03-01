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
    constructor(img, x, y, width, height, health, strength, walkAnimation) {
        super(img, x, y, width, height, health, strength);
        this.walkAnimation = walkAnimation;
        this.walkAnimationIndex = 0;
    }

    moveLeft() {
        this.x -= 6;
        if (this.walkAnimationIndex >= this.walkAnimation.length) {
            this.walkAnimationIndex = 0;
        }
        image(this.walkAnimation[this.walkAnimationIndex], this.x, this.y, this.width, this.height);
        this.walkAnimationIndex++;
    }

    moveRight() {
        this.x += 6;
        if (this.walkAnimationIndex >= this.walkAnimation.length) {
            this.walkAnimationIndex = 0;
        }
        image(this.walkAnimation[this.walkAnimationIndex], this.x, this.y, this.width, this.height);
        this.walkAnimationIndex++;
    }
}

class Knight extends Player {
    constructor(img, x, y, width, height, walkAnimation) {
        super(img, x, y, width, height, 50, 6, walkAnimation);
    }
}

class Wizard extends Player {
    constructor(img, x, y, width, height, walkAnimation) {
        super(img, x, y, width, height, 40, 7, walkAnimation);
    }
}

class Orc extends Character {
    constructor(img, x, y, width, height) {
        super(img, x, y, width, height, 30, 2);
    }
}

class Troll extends Character {
    constructor(img, x, y, width, height) {
        super(img, x, y, width, height, 40, 3);
    }
}

class Golem extends Character {
    constructor(img, x, y, width, height) {
        super(img, x, y, width, height, 50, 4);
    }
}

class Minotaur extends Character {
    constructor(img, x, y, width, height) {
        super(img, x, y, width, height, 60, 5);
    }
}