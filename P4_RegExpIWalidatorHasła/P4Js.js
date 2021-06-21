const pass= document.querySelector('#password');
const p= document.querySelector('.passinfo');
const letters= /[a-z]/i;
const numbers= /[0-9]/;
const special= /[!@#$%^&*()]/; 
const minValue= 10;

const checkPassword= () => {
    if (pass.value.length < minValue){
        p.innerHTML= 'Za krótkie hasło';
        p.style.color= '';
    }else if (pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers) && pass.value.match(special)){
        p.innerHTML= 'Masz bardzo dobre hasło!';
        p.style.color = 'deappink';
        p.style.fontSize = '24px';
    } else if(pass.value.length > minValue && pass.value.match(letters) && pass.value.match(numbers)){
        p.innerHTML= 'masz całkiem dobre hasło.';
        p.style.color= 'hotpink';
    }
};

pass.addEventListener('keyup', function () {
    if(pass.value !== '') {
        checkPassword();              
    }else{
        p.innerHTML= 'Nie wipsano hasła...';
        p.style.comor='';
    }
});