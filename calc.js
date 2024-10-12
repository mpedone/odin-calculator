let firstNumber = '';
let secondNumber = '';
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
    // result = window[operator](parseFloat(a),parseFloat(b));
    result = operator(parseFloat(a),parseFloat(b));
    return result;
}

function resetDisplay() {
    displayWindow.textContent = 0;
    firstNumber = '';
    secondNumber = '';
    operator = '';
    counter = 1;
}

function toPercent(val) {
    // return parseFloat(val) * .01;
    return '0.0' + val;
}

function negate(val) {
    // return parseFloat(val) * -1;
    return '-' + val;
}

const displayWindow = document.querySelector(".display p");
displayWindow.textContent = 0;

const clear = document.querySelector(".clear");
clear.addEventListener('click', resetDisplay);

const numerals = document.querySelectorAll(".numeral");
const operators = document.querySelectorAll(".operator");
const plusMinus = document.querySelector("#plus-minus");
const percent = document.querySelector("#percent");
let displayText = [];
let entry = '';
let counter = 1;

// percent.addEventListener('click', toPercent(displayText))
// plusMinus.addEventListener('click', negate(displayText))

numerals.forEach(button => 
    button.addEventListener('click', event => {
        if (operator === 'equals') resetDisplay();
        displayWindow.textContent = '';
        let target = event.target;
        let value = target.id;
        if (counter === 1) {
            firstNumber += value;
            console.log(`1st: ${firstNumber}`);
            displayWindow.textContent = firstNumber;
        } else {
            secondNumber += value;
            console.log(`2nd: ${secondNumber}`);
            displayWindow.textContent = secondNumber;
        }
    })
)

operators.forEach(op => 
    op.addEventListener('click', event => {
        let target = event.target;
        let value = target.id;
        if (!secondNumber) {
            operator = value;
            console.log(operator);
            counter = 2;
        } else if (secondNumber) {
            let displayValue = operate(firstNumber, secondNumber, window[operator])
            displayWindow.textContent = displayValue;
            operator = value;
            console.log(operator)
            firstNumber = displayValue;
            secondNumber = '';
        }
    })
)





const buttons = document.querySelectorAll(".button");


// let numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
// let operators = {'add': '+', 'subtract': '-', 'multiply': '*', 'divide': '/', 'equals': '='};

// let counter = 1;

// buttons.forEach(button => 
//     button.addEventListener('click', (event) => {
//         if (operator === 'equals') {
//             resetDisplay();
//         }
//         displayWindow.textContent = '';
//         let target = event.target;
//         let value = target.id;
//         if (numerals.includes(value) && counter === 1) {
//             firstNumber += value;
//             displayWindow.textContent = firstNumber;
//             console.log(`first: ${firstNumber}`);
//         } else if (Object.keys(operators).includes(value) && firstNumber && !secondNumber) {
//             displayWindow.textContent = firstNumber;
//             operator = value;
//             console.log(operator);
//             counter = 2;
//         } else if (Object.keys(operators).includes(value) && !firstNumber) {
//             firstNumber = '0';
//             displayWindow.textContent = firstNumber;
//             operator = value;
//             counter = 2;
//         } else if (numerals.includes(value) && firstNumber) {
//             secondNumber += value;
//             displayWindow.textContent = secondNumber;
//             console.log(`second: ${secondNumber}`);
//         } else if (Object.keys(operators).includes(value) && firstNumber && secondNumber) {
//             console.log("eval time!");
//             let displayValue = operate(firstNumber, secondNumber, operator)
//             console.log(displayValue);
//             displayWindow.textContent = displayValue;
//             firstNumber = displayValue;
//             secondNumber = ''
//             operator = value;
//         }
//     })
// )


// buttons.forEach(button => 
//     button.addEventListener('click', (event) => {
//         displayWindow.textContent = '';
//         count += 1;
//         let target = event.target;
//         let value = target.id;
//         console.log(numerals.includes(value));
//         if (count === 1) {
//             firstNumber = value;
//             displayWindow.textContent = '';
//             displayWindow.textContent = firstNumber;
//         } else if (count === 2) {
//             operator = value;
//             displayWindow.textContent = '';
//             displayWindow.textContent = operators[operator];
//         } else if (count === 3) {
//             secondNumber = value;
//             displayWindow.textContent = '';
//             displayWindow.textContent = secondNumber;
//         } else {
//             result = operate(firstNumber, secondNumber, operator);
//             displayWindow.textContent = '';
//             displayWindow.textContent = result;
//             count = 0;
//         }
//     })
// )
