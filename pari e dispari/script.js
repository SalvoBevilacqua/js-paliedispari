let chose = "";
let number = 7;
const maxNumber = 5
let RandomPcNumber = 0;

// SE SCEGLI DISPARI

const odd = document.getElementById("odd");

odd.addEventListener("click", function(event)
{
    event.preventDefault();
    chose = "dispari";       

    do {
        number = parseInt(prompt("Scegli un numero fra 0 e 5"));
    } while (number < 0 || number > 5 || isNaN(number))

    const messageChose = document.querySelector(".chose")
    messageChose.innerHTML = `Hai scelto ${chose}, il tuo numero è ${number}`

    RandomPcNumber = randomize(maxNumber);

    const messagePcChose = document.querySelector(".pc_chose")
    messagePcChose.innerHTML = `Il pc ha generato casualmente ${RandomPcNumber}`

    const subResult = sumResult(number, RandomPcNumber);

    const result = document.querySelector(".result")

    if (subResult) {        
        result.innerHTML = `Ops, hai perso..`
    } else {
        result.innerHTML = `Complimenti, hai vinto!`
    }
})

// SE SCEGLI PARI

const even = document.getElementById("even");

even.addEventListener("click", function(event)
{
    event.preventDefault();
    chose = "pari";       

    do {
        number = parseInt(prompt("Scegli un numero fra 0 e 5"));
    } while (number < 0 || number > 5 || isNaN(number))

    const messageChose = document.querySelector(".chose")
    messageChose.innerHTML = `Hai scelto ${chose}, il tuo numero è ${number}`

    RandomPcNumber = randomize(maxNumber);

    const messagePcChose = document.querySelector(".pc_chose")
    messagePcChose.innerHTML = `Il pc ha generato casualmente ${RandomPcNumber}`

    const subResult = sumResult(number, RandomPcNumber);

    const result = document.querySelector(".result")

    if (subResult) {        
        result.innerHTML = `Complimenti, hai vinto!`
    } else {
        result.innerHTML = `Ops, hai perso..`
    }
})

// FUNZIONI

function randomize(max) {
    const pcNumber = Math.floor(Math.random() * max + 1);
    return pcNumber;
}

function sumResult(numberOne, NumberTwo) {
    let result = false;
    let sum = numberOne + NumberTwo;
    if(sum % 2 == 0) {
        result = true;
    }
    return result;
}