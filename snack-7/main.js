'use strict';
//ciclo for per arrivare fino a mille
//for( let i = 0; i <=1000; i++){
//    dichiaro la variabile i e eseguo la tabellina del 2
//    let num = i*2;
//    console.log(num); 
//}

const input = Number(prompt('inserisci il valore massimo che vuoi'));


if (!isNaN(input)){
    for (let i = 2; i <= input; i+=2 ){
        console.log(i);
    }
}else {
        console.log('non hai inseritu un valore valido');
}

