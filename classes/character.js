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
    constructor(img, x, y, width, height, health, strength) {
        super(img, x, y, width, height, health, strength);
    }

    moveLeft() {
        this.x -= 3;
    }

    moveRight() {
        this.x += 3;
    }
}

class Knight extends Player {
    constructor(img, x, y, width, height) {
        super(img, x, y, width, height, 50, 5);
    }
}

class Wizard extends Player {
    constructor(img, x, y, width, height) {
        super(img, x, y, width, height, 40, 8);
    }
}

class Orc extends Character {
    constructor(img, x, y, width, height) {
        super(img, x, y, width, height, 20, 2);
    }
}