'use strict';

//devo chiedere all'utente di inserire 2 parole e verifico quale delle 2 è piu lunga e le stampo in ordine


//chiedo all'utente la prima parola
const par1 = prompt("inserisci una parola");

//chiedo all'utente la prima parola
const par2 = prompt("inserisci la seconda parola");

//verifico quale delle 2 parole inserite sia la piu lunga oppure se siano uguali
if(par1.length > par2.length){
    console.log("la parola 1", par1 , "è più lunga della parola 2", par2);
}else if(par1.length < par2.length){
    console.log("la parola 2", par2 , "è più lunga della parola 1", par1);
}else{
    console.log("le 2 parole sono lunghe uguali");
}