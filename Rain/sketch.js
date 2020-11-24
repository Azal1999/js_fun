let drops = [];
let dropCount = 600;

const getRandomInt = (min,max) => 
 Math.floor(Math.random() * 
 (Math.floor(max) - Math.ceil(min)) + Math.ceil(min)); 
const map = (value, x1, y1, x2, y2) =>
 (value - x1) * (y2 - x2) / (y1 - x1) + x2;

function setup() {
    createCanvas(480, 480);

    for (let i = 0; i < dropCount; i++) { 
        drops.push(new Drop());
    }
}

function draw() {
    background(50, 70, 130);

    for (let i = 0; i < dropCount; i++) { 
        drops[i].fall();
        drops[i].show();
    }
}

class Drop {
    constructor() {
        this.x = getRandomInt(0,480);
        this.y = getRandomInt(-500,-100);
        this.modif = getRandomInt(0,20);
        this.ySpeed = map(this.modif, 0, 20, 2, 10);
        this.length = map(this.modif, 0, 20, 2, 8);
    }

    fall() {
        this.y += this.ySpeed;
        let gravity = map(this.modif, 0, 20, 0.01, 0.05);
        this.ySpeed += gravity;

        if(this.y > canvas.height) {
            this.y = getRandomInt(-200, -100);
            this.ySpeed = map(this.modif, 0, 20, 2, 10);
        }
    }

    show() {
        let thick = map(this.modif, 0, 20, 0, 3);
        strokeWeight(thick);
        stroke(150, 160, 225);
        line(this.x, this.y, this.x, this.y + this.length);
    }
}