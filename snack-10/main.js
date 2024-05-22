'use strict';

let num1 = null;

for(let i = 0; i < 100; i++){

    let num2 = prompt('Inserisci un numero');

    if(num1 === num2){
        console.log('hai vinto');
        break
    }else{
        num1 = num2;
    }
}


