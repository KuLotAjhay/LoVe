/*
=========================================
 OUR LOVE STORY
 MAIN CONTROLLER
=========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /* =============================
       ELEMENTS
    ============================== */

    const loader = document.getElementById("loader");
    const music = document.getElementById("bgMusic");
    const musicButton = document.getElementById("musicButton");

    const beginButton = document.querySelector(".primary-btn");
    const replayButton = document.getElementById("replay");

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav a");
    const header = document.querySelector("header");

    let musicStarted = false;

    /* =============================
       LOADER
    ============================== */

    window.addEventListener("load", () => {

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1800);

    });

    /* =============================
       START MUSIC
    ============================== */

    function startMusic() {

        if (musicStarted) return;

        music.volume = 0.35;

        music.play().catch(() => {});

        musicStarted = true;

    }

    document.addEventListener(
        "click",
        startMusic,
        { once: true }
    );

    /* =============================
       MUSIC BUTTON
    ============================== */

    musicButton.addEventListener("click", () => {

        if (music.paused) {

            music.play();

            musicButton.innerHTML = "❚❚";

        } else {

            music.pause();

            musicButton.innerHTML = "♪";

        }

    });

    /* =============================
       HERO BUTTON
    ============================== */

    beginButton.addEventListener("click", () => {

        document.querySelector("#story").scrollIntoView({

            behavior: "smooth"

        });

    });

    /* =============================
       REPLAY
    ============================== */

    replayButton.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /* =============================
       ACTIVE NAV
    ============================== */

    function activateNav() {

        let current = "";

        sections.forEach(section => {

            const top = window.scrollY;

            const offset = section.offsetTop - 150;

            const height = section.offsetHeight;

            if (top >= offset && top < offset + height) {

                current = section.id;

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener("scroll", activateNav);

    activateNav();

    /* =============================
       HEADER EFFECT
    ============================== */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 80) {

            header.style.background = "rgba(8,17,31,.75)";
            header.style.backdropFilter = "blur(25px)";
            header.style.borderColor = "rgba(255,255,255,.15)";

        } else {

            header.style.background = "rgba(255,255,255,.08)";
            header.style.borderColor = "rgba(255,255,255,.12)";

        }

    });

    /* =============================
       SCROLL REVEAL
    ============================== */

    const revealItems = document.querySelectorAll(

        ".timeline-card, .photo-card, .glass-card"

    );

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: .15

        }

    );

    revealItems.forEach(item => {

        item.classList.add("hidden");

        observer.observe(item);

    });

});

