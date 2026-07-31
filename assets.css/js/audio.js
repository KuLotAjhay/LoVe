/*
=====================================
PREMIUM MUSIC PLAYER
=====================================
*/

const music = document.getElementById("bgMusic");

const playButton = document.getElementById("playPause");

const progressBar = document.getElementById("progressBar");

const currentTime = document.getElementById("currentTime");

const album = document.querySelector(".album");

/* ==============================
PLAY / PAUSE
============================== */

playButton.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        playButton.innerHTML="❚❚";

        album.classList.add("spin");

    }

    else{

        music.pause();

        playButton.innerHTML="▶";

        album.classList.remove("spin");

    }

});

/* ==============================
PROGRESS
============================== */

music.addEventListener("timeupdate",()=>{

    const percent=(music.currentTime/music.duration)*100;

    progressBar.style.width=percent+"%";

    let minutes=Math.floor(music.currentTime/60);

    let seconds=Math.floor(music.currentTime%60);

    if(seconds<10){

        seconds="0"+seconds;

    }

    currentTime.innerHTML=

    minutes+":"+seconds;

});

/* ==============================
AUTOPLAY
============================== */

document.addEventListener("click",()=>{

    if(music.paused){

        music.play();

        playButton.innerHTML="❚❚";

        album.classList.add("spin");

    }

},{once:true});