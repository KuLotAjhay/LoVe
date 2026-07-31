/*
=========================================
OUR LOVE STORY
FIREWORKS ENGINE
=========================================
*/

const fireworkCanvas = document.createElement("canvas");

fireworkCanvas.id = "fireworksCanvas";

document.body.appendChild(fireworkCanvas);

const fctx = fireworkCanvas.getContext("2d");

let fwWidth;
let fwHeight;

function resizeFireworks(){

    fwWidth = fireworkCanvas.width = window.innerWidth;
    fwHeight = fireworkCanvas.height = window.innerHeight;

}

resizeFireworks();

window.addEventListener("resize",resizeFireworks);

const fireworks = [];
const particles = [];

class Firework{

    constructor(){

        this.x = Math.random()*fwWidth;

        this.y = fwHeight;

        this.targetY = 150 + Math.random()*250;

        this.speed = 6 + Math.random()*3;

        this.color = `hsl(${Math.random()*360},100%,65%)`;

    }

    update(){

        this.y -= this.speed;

        if(this.y <= this.targetY){

            explode(this.x,this.y,this.color);

            return false;

        }

        return true;

    }

    draw(){

        fctx.beginPath();

        fctx.arc(this.x,this.y,3,0,Math.PI*2);

        fctx.fillStyle=this.color;

        fctx.fill();

    }

}

class Particle{

    constructor(x,y,color){

        this.x=x;
        this.y=y;

        this.color=color;

        this.radius=2+Math.random()*2;

        const angle=Math.random()*Math.PI*2;
        const speed=Math.random()*6+2;

        this.vx=Math.cos(angle)*speed;
        this.vy=Math.sin(angle)*speed;

        this.life=100;

    }

    update(){

        this.x+=this.vx;

        this.y+=this.vy;

        this.vy+=0.04;

        this.life--;

        return this.life>0;

    }

    draw(){

        fctx.globalAlpha=this.life/100;

        fctx.beginPath();

        fctx.arc(this.x,this.y,this.radius,0,Math.PI*2);

        fctx.fillStyle=this.color;

        fctx.fill();

        fctx.globalAlpha=1;

    }

}

function explode(x,y,color){

    for(let i=0;i<90;i++){

        particles.push(new Particle(x,y,color));

    }

}

function launchFirework(){

    fireworks.push(new Firework());

}

let fireworkInterval;

const finale = document.querySelector("#forever");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

fireworkInterval=setInterval(launchFirework,900);

}else{

clearInterval(fireworkInterval);

}

});

},{threshold:.6});

observer.observe(finale);

function animateFireworks(){

    fctx.clearRect(0,0,fwWidth,fwHeight);

    for(let i=fireworks.length-1;i>=0;i--){

        fireworks[i].draw();

        if(!fireworks[i].update()){

            fireworks.splice(i,1);

        }

    }

    for(let i=particles.length-1;i>=0;i--){

        particles[i].draw();

        if(!particles[i].update()){

            particles.splice(i,1);

        }

    }

    requestAnimationFrame(animateFireworks);

}

animateFireworks();

document.addEventListener("click",(e)=>{

explode(

e.clientX,

e.clientY,

`hsl(${Math.random()*360},100%,65%)`

);

});