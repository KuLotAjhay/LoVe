/*
=========================================
 OUR LOVE STORY
 TIMELINE ANIMATION
=========================================
*/

const timelineCards = document.querySelectorAll(".timeline-card");

const timelineObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("timeline-show");

        }

    });

},

{

    threshold:.3

}

);

timelineCards.forEach((card,index)=>{

    card.style.transitionDelay=`${index*250}ms`;

    timelineObserver.observe(card);

});