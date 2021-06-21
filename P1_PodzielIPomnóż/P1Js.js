let score;
const spn1 = document.querySelector('.spn1');
const spn2 = document.querySelector('.spn2');
const btn1 = document.querySelector('.button1');
const btn2 = document.querySelector('.button2');
let a = 2;
//funkcja definuje wartość span
let add = (x = 3, y = 3) => {
    score = x + y;
    spn1.textContent = `${x+y}`;
};
add();

let multiplyApp = () => {
    spn2.textContent = `${score*a}`;
};
let devideApp = () => {
    spn2.textContent = `${score/a}`;
};

btn1.addEventListener('click', devideApp);
btn2.addEventListener('click', multiplyApp);