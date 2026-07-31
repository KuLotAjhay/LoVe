/*
=========================================
 OUR LOVE STORY
 HEARTS & PETALS ENGINE
=========================================
*/

const heartsContainer = document.getElementById("hearts-container");
const petalsContainer = document.getElementById("petals-container");

/* ============================
   HEARTS
============================ */

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    heart.innerHTML = "❤";

    heart.style.left = random(0,100) + "%";

    heart.style.fontSize = random(12,38) + "px";

    heart.style.animationDuration = random(8,18) + "s";

    heart.style.opacity = random(.2,.8);

    heart.style.transform =
        `rotate(${random(0,360)}deg)`;

    heartsContainer.appendChild(heart);

    heart.addEventListener("animationend",()=>{

        heart.remove();

    });

}

/* ============================
   PETALS
============================ */

const petalShapes = [

    "🌸",
    "🌺",
    "❀",
    "✿"

];

function createPetal(){

    const petal=document.createElement("div");

    petal.className="petal";

    petal.innerHTML=

        petalShapes[
            Math.floor(
                Math.random()*petalShapes.length
            )
        ];

    petal.style.left=random(0,100)+"%";

    petal.style.fontSize=random(14,28)+"px";

    petal.style.opacity=random(.25,.9);

    petal.style.animationDuration=random(10,22)+"s";

    petalsContainer.appendChild(petal);

    petal.addEventListener("animationend",()=>{

        petal.remove();

    });

}

/* ============================
   CREATE CONTINUOUSLY
============================ */

setInterval(createHeart,500);

setInterval(createPetal,700);