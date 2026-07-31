/*
=========================================
 OUR LOVE STORY
 PARTICLE ENGINE
 Version 1.0
=========================================
*/

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

let width;
let height;

const stars = [];

const STAR_COUNT = 180;

function resizeCanvas() {

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

}

window.addEventListener("resize", resizeCanvas);
resizeCanvas();

/*=============================
    STAR CLASS
=============================*/

class Star {

    constructor() {

        this.reset();

    }

    reset() {

        this.x = Math.random() * width;

        this.y = Math.random() * height;

        this.radius = Math.random() * 2.2;

        this.alpha = Math.random();

        this.speed = 0.15 + Math.random() * .35;

        this.twinkle = Math.random() * 0.03;

    }

    update() {

        this.y += this.speed;

        this.alpha += this.twinkle;

        if (this.alpha >= 1 || this.alpha <= .2) {

            this.twinkle *= -1;

        }

        if (this.y > height + 5) {

            this.y = -5;

            this.x = Math.random() * width;

        }

    }

    draw() {

        ctx.beginPath();

        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);

        ctx.fillStyle = `rgba(255,255,255,${this.alpha})`;

        ctx.fill();

    }

}

/*=============================
    CREATE STARS
=============================*/

function createStars() {

    stars.length = 0;

    for (let i = 0; i < STAR_COUNT; i++) {

        stars.push(new Star());

    }

}

createStars();

/*=============================
    AURORA
=============================*/

let auroraOffset = 0;

function drawAurora() {

    auroraOffset += 0.002;

    const gradient = ctx.createLinearGradient(
        0,
        0,
        width,
        height
    );

    gradient.addColorStop(
        0,
        `rgba(255,92,138,${
            .18 + Math.sin(auroraOffset) * .05
        })`
    );

    gradient.addColorStop(
        .5,
        `rgba(168,85,247,${
            .12 + Math.cos(auroraOffset) * .05
        })`
    );

    gradient.addColorStop(
        1,
        "rgba(255,255,255,.02)"
    );

    ctx.fillStyle = gradient;

    ctx.fillRect(0,0,width,height);

}

/*=============================
    GLOW ORBS
=============================*/

const orbs = [];

class Orb {

    constructor(){

        this.x=Math.random()*width;

        this.y=Math.random()*height;

        this.radius=100+Math.random()*250;

        this.speed=.2+Math.random()*.4;

        this.direction=Math.random()*Math.PI*2;

    }

    update(){

        this.x+=Math.cos(this.direction)*this.speed;

        this.y+=Math.sin(this.direction)*this.speed;

        if(this.x<-200) this.x=width+200;
        if(this.x>width+200) this.x=-200;

        if(this.y<-200) this.y=height+200;
        if(this.y>height+200) this.y=-200;

    }

    draw(){

        const g=ctx.createRadialGradient(

            this.x,
            this.y,
            0,

            this.x,
            this.y,
            this.radius

        );

        g.addColorStop(0,"rgba(255,92,138,.10)");
        g.addColorStop(.5,"rgba(168,85,247,.05)");
        g.addColorStop(1,"rgba(255,255,255,0)");

        ctx.fillStyle=g;

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            this.radius,
            0,
            Math.PI*2
        );

        ctx.fill();

    }

}

for(let i=0;i<5;i++){

    orbs.push(new Orb());

}

/*=============================
    ANIMATION LOOP
=============================*/

function animate(){

    ctx.clearRect(0,0,width,height);

    drawAurora();

    orbs.forEach(orb=>{

        orb.update();

        orb.draw();

    });

    stars.forEach(star=>{

        star.update();

        star.draw();

    });

    requestAnimationFrame(animate);

}

animate();