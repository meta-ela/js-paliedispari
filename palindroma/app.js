/*
Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma


*/

// chiedo all'utente una parola
const wordUser = prompt("Inserisci una parola.");

console.log(wordUser);


function isPalindrome(word) {
    // la parola viene:
    //                                           [0] [1] [2]        
    // split: scomposta in array separate --> "a" "b" "a"
    // reverse: riposizionato al contrario  -->  [2] [1] [0] 
    //
    // joim: la parola viene ricomposta DOPO il reverse mantiene il nuovo riposizionamento
    let reverseWordUser = word.split('').reverse().join('');

    // se la parola in reverse è uguale alla parola inserita = polidromo
    return reverseWordUser === wordUser;
}

console.log(isPalindrome(wordUser));




/* ---------------------------------------------------------------------------------------

// versione con for loop
let parola = "casa";

function revertWord(parolaDaInvertire) {
    let parolaAlContrario = "";

    for (let i = parolaDaInvertire.length - 1; i >= 0; i--) {
        const letteraCorrente = parolaDaInvertire[i];

        parolaAlContrario += parolaDaInvertire;
    }

    return parolaAlContrario;
}

*/