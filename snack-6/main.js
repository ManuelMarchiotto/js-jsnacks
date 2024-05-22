'use strict';
//dichiaro la variabile num e faccio generare un numero casuale da 1 a 10 al computer
//il numero lo converto in un intero
let num = Math.floor(Math.random()*10);
//stampo il numero generato
console.log(num);

//chiedo di digitare un numero
const userNum = prompt("digita un numero");
//converto la stringa in numero effettivo
Number.parseInt(userNum);


if(isNaN(userNum)){
    window.alert("scrivi un numero per piacere");
}else if(userNum == num){
    window.alert("Hai vinto!");
}else{
    window.alert("Hai perso :(");
}
