'use strict';
//faro inserire 2 numeri all'utente e poi li confornto per capire il maggiore e stampo il risultato in console

//chiedo all'utente il primo numero
const num1 = prompt("inserisci un numero");

//chiedo all'utente il secondo numero
const num2 = prompt("inerisci un numero");

//converto cio che ha scritto l'utente in numero dato che è stringa
Number.parseFloat(num1);
Number.parseFloat(num2);

//verifico che sia un numero e poi faccio il confrotto dei numeri

if(isNaN(num1) || isNaN(num2)){
    console.log("almeno uno dei 2 dai non è un numero")
}else if(num1 > num2){
    console.log("il numero 1 è maggiore del numero 2 ed è:" , num1);
}else if(num1 < num2){
    console.log("il numero 2 è maggiore del numero 1 ed è:" , num2);
}else{
    console.log("i numeri sono uguali");
}
