let title= document.querySelector('.appName');
let textWindow= document.querySelector('#typeWindow');
let answer= document.querySelector('.score');
let getAnswer= document.querySelector('.btn1');
let clearApp= document.querySelector('.btn2');
let changeCtoF= document.querySelector('.btn3');

let candyNumber=1;

//function reset all
let resetApp= () => {
    window.location.reload();
};
//button to reset
clearApp.addEventListener('click',resetApp);


//function change converter form c to f to f to c
let switchApp= () => {
    console.log("switchApp buton ok")
    
  if (candyNumber === 1){
      title.innerHTML='konwerter °F na°C';
      candyNumber= 2;
  }else{
      title.innerHTML='konwerter °C na°F';
      candyNumber= 1;
  }
    
}
//button to switchApp
changeCtoF.addEventListener('click',switchApp);


//convertrion funtion c to f
let converterAppCtoF= () => {
    if(textWindow.value === ''){
     answer.innerHTML=`Nie podano liczby...`
    }else{    
    answer.innerHTML=`${textWindow.value}°C to ${textWindow.value*1.8+32}°F`;
    textWindow.value='';
    
    }
}

//convertrtion function f to c
let converterAppFtoC= () => {
    if(textWindow.value === ''){
     answer.innerHTML=`Nie podano liczby...`
    }else{    
    answer.innerHTML=`${textWindow.value}°F to ${(textWindow.value-32)/1.8}°C`
    textWindow.value='';
    }
}
    let labadaba=()=>{
        if(title.value='konwerter °F na°C'){
          converterAppFtoC();  
        }else{
            converterAppCtoF();
        }
    }

//converter button 
getAnswer.addEventListener('click',labadaba);
