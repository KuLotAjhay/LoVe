/*
=========================================
OUR LOVE STORY
TYPEWRITER EFFECT
=========================================
*/

const letter = `

Dear LoVe,

Happy National Girlfriend's Day. ❤️

My love,

I know we’ve only been together for a short time, and we’ve only spent 2 days together in person, but those moments already became special to me. Even in that short time, you brought happiness and made me feel grateful to have you in my life.

Being far from you is not easy because I miss the little things we shared, but I want you to know that I’m willing to keep knowing you better, support you, and treasure what we have.

Thank you for the memories, the smiles, and the happiness you’ve given me. I hope we continue to grow together and create more beautiful moments in the future.

No matter the distance, you are someone special to me.

I miss you, and I love you. 

❤️❤️❤️
`;

const output = document.getElementById("typewriter");

let index = 0;

function typeLetter() {

    if(index >= letter.length) return;

    output.innerHTML += letter.charAt(index);

    index++;

    setTimeout(typeLetter,35);

}

const letterObserver = new IntersectionObserver(

(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            if(index===0){

                typeLetter();

            }

        }

    });

},

{

threshold:.4

}

);

letterObserver.observe(document.querySelector("#letter"));