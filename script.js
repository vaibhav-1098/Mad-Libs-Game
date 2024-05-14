/*
Roses are RED
VIOLETS are Blue
I love YOU
*/

// inputs
const ColorText=document.querySelector(".ColorText");
const NounText=document.querySelector(".NounText");
const CelebrityText=document.querySelector(".CelebrityText");

const form=document.querySelector("form");
const display=document.querySelector(".display");


// play again
const playAgain=document.querySelector(".playAgain");
playAgain.style.display="none";

playAgain.addEventListener('click',( )=>{
    display.innerHTML="";
    playAgain.style.display="none";
    form.reset( );
})


// event listener
form.addEventListener('submit',(e)=>{
    e.preventDefault( );

    playAgain.style.display="block";

    display.innerHTML=
    `
    Roses are <span class="uppercase text-rose-500">${ColorText.value}</span>
    <br>
    <span class="uppercase text-rose-500">${NounText.value}</span> are Blue
    <br>
    I love <span class="uppercase text-rose-500">${CelebrityText.value}</span>
    `
})

