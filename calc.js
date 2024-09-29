let firstNumber;
let secondNumber;
let operators = ['add', 'subtract', 'multiply', 'divide']

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