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
const equals = document.querySelector('.equals');
let displayText = [];
let entry = '';
let counter = 1;
let endOfCalc = 0;


// percent.addEventListener('click', toPercent(displayText))
// plusMinus.addEventListener('click', negate(displayText))

numerals.forEach(button => 
    button.addEventListener('click', event => {
        if (endOfCalc) resetDisplay();
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
        if (!firstNumber) firstNumber = 0

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

equals.addEventListener('click', () => {
    if (!secondNumber) secondNumber = firstNumber;
    let displayValue = operate(firstNumber, secondNumber, window[operator]);
    displayWindow.textContent = displayValue;
    firstNumber = displayValue;
    endOfCalc = 1;
    console.log(operator);
})