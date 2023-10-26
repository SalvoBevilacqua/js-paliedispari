const word = prompt("Inserisci una parola");

document.querySelector("h1").innerHTML = `La parola che hai inserito è ${word}`;

const wordInverted = invertWord(word);
console.log("La parola invertita è:", wordInverted);

const result = palindrome(word, wordInverted);
console.log(result);

if (result) {
    document.querySelector("h2").innerHTML = `La parola che hai inserito è palindroma`;
} else {
    document.querySelector("h2").innerHTML = `La parola che hai inserito non è palindroma`;
}



function invertWord(stringToInvert) {
    let stringInverted = "";
    for (let i = stringToInvert.length - 1; i >= 0; i--) {
        stringInverted += stringToInvert[i];
    }
    console.log(stringInverted);
    return stringInverted;
}

function palindrome(stringOne, stringTwo) {
    let test = false;
    if(stringOne === stringTwo) {
        test = true;
    }
    return test;
}