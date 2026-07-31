/*
=========================================
PREMIUM GALLERY
=========================================
*/

const images = document.querySelectorAll(".photo-card img");

const lightbox = document.getElementById("lightbox");

const lightboxImage = document.getElementById("lightboxImage");

const closeButton = document.getElementById("closeLightbox");

const nextButton = document.getElementById("nextImage");

const prevButton = document.getElementById("prevImage");

let currentImage = 0;

function openImage(index){

    currentImage=index;

    lightbox.classList.add("open");

    lightboxImage.src=images[index].src;

}

function closeImage(){

    lightbox.classList.remove("open");

}

function nextImage(){

    currentImage++;

    if(currentImage>=images.length){

        currentImage=0;

    }

    lightboxImage.src=images[currentImage].src;

}

function previousImage(){

    currentImage--;

    if(currentImage<0){

        currentImage=images.length-1;

    }

    lightboxImage.src=images[currentImage].src;

}

images.forEach((img,index)=>{

    img.addEventListener("click",()=>{

        openImage(index);

    });

});

closeButton.addEventListener("click",closeImage);

nextButton.addEventListener("click",nextImage);

prevButton.addEventListener("click",previousImage);

lightbox.addEventListener("click",(e)=>{

    if(e.target===lightbox){

        closeImage();

    }

});

document.addEventListener("keydown",(e)=>{

    if(!lightbox.classList.contains("open")) return;

    switch(e.key){

        case "Escape":

            closeImage();

            break;

        case "ArrowRight":

            nextImage();

            break;

        case "ArrowLeft":

            previousImage();

            break;

    }

});