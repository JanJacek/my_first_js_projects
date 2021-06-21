const btnMore= document.querySelector('.plus');
const btnLess= document.querySelector('.minus');
const btnColor= document.querySelector('.color');
const pContent= document.querySelector('.inparagraph');
let fontSizee=16;
    
let moreFontSizeApp=()=>{
    console.log("button more ok");
    fontSizee=fontSizee+4;
    pContent.style.fontSize = `${fontSizee}px`;
};
let LessFontSizeApp=()=>{
     console.log("button less ok");
    fontSizee=fontSizee-4;
    pContent.style.fontSize = `${fontSizee}px`;
};

let changeColorApp=()=>{
    console.log("button color ok");
    let r=Math.floor(Math.random()*1000);
    let g=Math.floor(Math.random()*1000);
    let b=Math.floor(Math.random()*1000);
    pContent.style.color = `rgb(${r},${g}, ${b})`;
}

btnMore.addEventListener('click',moreFontSizeApp);
btnLess.addEventListener('click',LessFontSizeApp);
btnColor.addEventListener('click',changeColorApp);