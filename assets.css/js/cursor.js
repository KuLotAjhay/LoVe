/*
=====================================
OUR LOVE STORY
PREMIUM CURSOR
=====================================
*/

const cursor = document.querySelector(".cursor");
const dot = document.querySelector(".cursor-dot");

let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;

let cursorX = mouseX;
let cursorY = mouseY;

document.addEventListener("mousemove", (e) => {

    mouseX = e.clientX;
    mouseY = e.clientY;

});

/* ==============================
    Smooth Follow
============================== */

function animateCursor() {

    cursorX += (mouseX - cursorX) * 0.15;
    cursorY += (mouseY - cursorY) * 0.15;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    dot.style.left = mouseX + "px";
    dot.style.top = mouseY + "px";

    requestAnimationFrame(animateCursor);

}

animateCursor();

/* ==============================
    Hover Effect
============================== */

const hoverItems = document.querySelectorAll(

    "button,a,.photo-card,.timeline-card,.glass-card"

);

hoverItems.forEach(item => {

    item.addEventListener("mouseenter", () => {

        cursor.classList.add("cursor-hover");

    });

    item.addEventListener("mouseleave", () => {

        cursor.classList.remove("cursor-hover");

    });

});

/* ==============================
    Click Ripple
============================== */

document.addEventListener("click", () => {

    cursor.classList.add("cursor-click");

    setTimeout(() => {

        cursor.classList.remove("cursor-click");

    },250);

});