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
    endOfCalc = 0;
}

function toPercent(val) {
    return parseFloat(val) * .01;
    // return '0.0' + val;
}

function negate(val) {
    return parseFloat(val) * -1;
    // return '-' + val;
}

const displayWindow = document.querySelector(".display p");
displayWindow.textContent = 0;

const clear = document.querySelector(".clear");
clear.addEventListener('click', resetDisplay);

const numerals = document.querySelectorAll(".numeral");
const operators = document.querySelectorAll(".operator");
const plusMinus = document.querySelector(".plus-minus");
const percent = document.querySelector(".percent");
const equals = document.querySelector('.equals');
let displayValue;
let entry = '';
let counter = 1;
let endOfCalc = 0;


percent.addEventListener('click', () => {
    displayValue = toPercent(displayWindow.textContent);
    displayWindow.textContent = displayValue;
    if (counter === 1) firstNumber = displayValue;
    else secondNumber = displayValue;
})

plusMinus.addEventListener('click', () => {
    displayValue = negate(displayWindow.textContent);
    displayWindow.textContent = displayValue;
    if (counter === 1) firstNumber = displayValue;
    else secondNumber = displayValue;
})

numerals.forEach(button => 
    button.addEventListener('click', event => {
        if (endOfCalc) resetDisplay();
        displayWindow.textContent = '';
        let target = event.target;
        let value = target.id;
        if (counter === 1) {
            firstNumber += value;
            displayWindow.textContent = firstNumber;
        } else {
            secondNumber += value;
            displayWindow.textContent = secondNumber;
        }
    })
)

operators.forEach(op => 
    op.addEventListener('click', event => {
        let target = event.target;
        let value = target.id;
        if (!firstNumber) firstNumber = 0

        if (endOfCalc) {
            firstNumber = displayValue;
            secondNumber = '';
            endOfCalc = 0;
        }

        if (!secondNumber) {
            operator = value;
            counter = 2;
        } else if (secondNumber) {
            displayValue = operate(firstNumber, secondNumber, window[operator])
            displayWindow.textContent = displayValue;
            operator = value;
            firstNumber = displayValue;
            secondNumber = '';
        }
    })
)

equals.addEventListener('click', () => {
    if (!secondNumber) secondNumber = firstNumber;
    if (!operator) {
        displayValue = firstNumber;
    } else {
        displayValue = operate(firstNumber, secondNumber, window[operator]);
    }
    displayWindow.textContent = displayValue;
    firstNumber = displayValue;
    endOfCalc = 1;
})