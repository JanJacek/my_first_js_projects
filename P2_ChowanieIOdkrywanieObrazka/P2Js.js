const hideImage = document.querySelector('.item1');
const blueButton = document.querySelector('.arrow');
const blueButtonArrow = document.querySelector('.fas');

let moveFrontImageApp=()=>{
    console.log("kliknięto!");
   hideImage.classList.toggle('hide');
    if(hideImage.classList.contains('hide')){
        blueButton.style.transform = 'rotate(180deg)';
       }else{
        blueButton.style.transform = 'rotate(0deg)';
       };
}
blueButton.addEventListener('click', moveFrontImageApp);
hideImage.addEventListener('click', moveFrontImageApp);