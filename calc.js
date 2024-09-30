let firstNumber;
let secondNumber;
let operator;

function add (a,b){
    return a+b;
}

function subtract (a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b){
    return a/b;
}

function operate(a, b, operator){
    result = operator(a,b)
    alert(result)
}

const displayWindow = document.querySelector(".display p");
displayWindow.textContent = 0;

const clear = document.querySelector(".clear");
const numerals = document.querySelectorAll(".numeral");

clear.addEventListener('click', () => 
    displayWindow.textContent = 0);

numerals.forEach(numeral => 
    numeral.addEventListener('click', () => 
        displayWindow.textContent = numeral.textContent))