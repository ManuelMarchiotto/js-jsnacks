'use strict';

// in un arrei di nomi contenuti dagli invitati alla festa, chiedo all'utente il suo nome e gli comunico se puo entrare o meno


//inizializzo variabile array
const invitatiFesta = ["Manuel", "Giovani", "Luca", " Antonio"];

//chiedo all'utent il suo nome
const name = prompt("come ti chiami??");

//invito di default
let invite = false;

//trasformo tutti i valori in lettere minuscole cosi da verificare anche se l'utente oppure la lista ha lettere maiuscole
const currentValue = invitatiFesta[i].toLocaleLowerCase();
const checkValue = name.toLocaleLowerCase();

for(let i = 0; i < invitatiFesta.length; i++){

    //se sei invitato ti comunico che puoi entrare e interrompo il ciclo
    if(currentValue === checkValue){
        invite = true;
        break;
    }
}

//stampo in console se la persona è nella lista o meno
if(invite === true){
    console.log("sei nella lista puoi entrare!");
}else{
    console.log("non sei nella lista non puoi partecvipare alla festa");
}