'use strict';

//il software deve chiedere per 10 volte all'utentedi inserire un numero e poi il programma stampa la somma dei numeri inseriti

//inizializzo la variabile di somma che sarà quella che poi andro a stamapre in console
let sum = 0;

//lancio un ciclo for per fare i 10 promt senza scriverli uno alla volta
for(let i = 1; i <= 10; i++ ){
    sum += +prompt(`inseriscil il ${i} numero`);
}

//stampo la somma dei numeri
console.log(sum);