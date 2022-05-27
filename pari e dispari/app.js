/*
Pari e Dispari
L’utente sceglie pari o dispari tramite un prompt
L’utente inserisce anche un numero da 1 a 5.
Generiamo poi un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri (quello inserito dall’utente e quello random del computer)
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. Se l’utente aveva scelto pari e la somma è pari, ha vinto l’utente, altrimenti il computer

*/ 

// generates a random number from 1 to 5
function randomNumberGenerator () {
    let result = Math.floor(Math.random()* 5) + 1;
    console.log("randomNumberGenerator: " + result)
    return result
}

/* returns true if number is even, else turns false */
function isEven (number) {
    /* return number % 2 === 0; */

    if (number % 2 === 0) {
        console.log("number is Even");
        return true;
    } else {
        console.log("number is Odd");
        return false;
    }
}

let askUser = prompt("Pari o Dispari?");
askUser = askUser.toLowerCase();
let numberUser = parseInt(prompt("Inserisci un numero da 1 a 5."));

if ((askUser == "pari" || askUser == "dispari") && (numberUser >= 1 && numberUser <= 5)) {
    let sumNumbers = numberUser + randomNumberGenerator();
    console.log("sum numbers: " + sumNumbers);


    if (askUser == "pari" && isEven(sumNumbers) == true) {
        console.log("Hai vinto!"); 
    } else {
        console.log("Hai perso!");
    }
} else {
    alert("non hai inserito i giusti valori: Pari o Dispari ed un numero da 1 a 5");
}

