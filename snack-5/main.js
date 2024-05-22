'use strict';

//creazione array vuoto
const num = [];
//stampo per verificare che sia vuoto
console.log(num);

//chiedo all'utente i 6 numeri
for(let i = 1; i < 6; i++){
    //chiedo all'utente i numeri
    let inputNum = Number(prompt(`inserisci il ${i} numero`));
    //verifico sel il numero inserito è dispari
    if(!isNaN(inputNum)){
        if(inputNum % 2 !== 0){
            num.push(inputNum);
        }
    } 
    }


//stampo array completo
console.log(num);

