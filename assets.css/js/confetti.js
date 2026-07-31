/*
=========================================
OUR LOVE STORY
CONFETTI ENGINE
=========================================
*/

const confettiCanvas = document.createElement("canvas");

confettiCanvas.id = "confettiCanvas";

document.body.appendChild(confettiCanvas);

const cctx = confettiCanvas.getContext("2d");

let cw;
let ch;

function resizeConfetti(){

    cw = confettiCanvas.width = window.innerWidth;
    ch = confettiCanvas.height = window.innerHeight;

}

window.addEventListener("resize",resizeConfetti);

resizeConfetti();

const confetti = [];

class Confetti{

    constructor(){

        this.reset();

    }

    reset(){

        this.x = Math.random()*cw;

        this.y = -20;

        this.size = 6 + Math.random()*10;

        this.speed = 2 + Math.random()*4;

        this.rotation = Math.random()*360;

        this.rotationSpeed = Math.random()*8-4;

        this.swing = Math.random()*2;

        this.color = [

            "#ff5c8a",
            "#ffb6d5",
            "#ffd166",
            "#7dd3fc",
            "#a855f7",
            "#ffffff"

        ][Math.floor(Math.random()*6)];

    }

    update(){

        this.y += this.speed;

        this.x += Math.sin(this.y*.02)*this.swing;

        this.rotation += this.rotationSpeed;

        if(this.y > ch + 20){

            this.reset();

        }

    }

    draw(){

        cctx.save();

        cctx.translate(this.x,this.y);

        cctx.rotate(this.rotation*Math.PI/180);

        cctx.fillStyle=this.color;

        cctx.fillRect(

            -this.size/2,
            -this.size/2,
            this.size,
            this.size

        );

        cctx.restore();

    }

}

let running = false;

function startConfetti(){

    if(running) return;

    running = true;

    confetti.length = 0;

    for(let i=0;i<250;i++){

        confetti.push(new Confetti());

    }

}

function stopConfetti(){

    running = false;

}

function animateConfetti(){

    cctx.clearRect(0,0,cw,ch);

    if(running){

        confetti.forEach(piece=>{

            piece.update();

            piece.draw();

        });

    }

    requestAnimationFrame(animateConfetti);

}

animateConfetti();

const foreverSection = document.querySelector("#forever");

const confettiObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            startConfetti();

        }else{

            stopConfetti();

        }

    });

},

{

threshold:.6

}

);

confettiObserver.observe(foreverSection);

document
.getElementById("replay")
.addEventListener("click",()=>{

    startConfetti();

    setTimeout(stopConfetti,5000);

});