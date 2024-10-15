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
    if (b !== 0) {
        return a/b;
    } else {
        return "no.";
    }
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
    decimalCount = 0;
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
const decimal = document.querySelector(".decimal");
const operators = document.querySelectorAll(".operator");
const plusMinus = document.querySelector(".plus-minus");
const percent = document.querySelector(".percent");
const equals = document.querySelector('.equals');
let displayValue;
let entry = '';
let counter = 1;
let endOfCalc = 0;
let decimalCount = 0;


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
            // displayWindow.textContent = parseFloat(firstNumber);
            if (firstNumber.length > 1 && 
                firstNumber[0] === '0' && 
                firstNumber[1] !== '.') {
                firstNumber = firstNumber.slice(1,);
            }
            displayWindow.textContent = firstNumber;
        } else {
            secondNumber += value;
            if (secondNumber.length > 1 && 
                secondNumber[0] === '0' && 
                secondNumber[1] !== '.') {
                secondNumber = secondNumber.slice(1,);
            }
            displayWindow.textContent = secondNumber;
        }
    })
)

decimal.addEventListener('click', () => {
    if (endOfCalc) resetDisplay();
    if (decimalCount === 0 && counter === 1){
        if (!firstNumber) firstNumber += '0.';
        else firstNumber += '.';
        displayWindow.textContent = firstNumber;
        decimalCount = 1;
    } else if (decimalCount === 0 && counter === 2) {
        if (!secondNumber) secondNumber += '0.';
        else secondNumber += '.';
        displayWindow.textContent = secondNumber;
        decimalCount = 1;
    }
})

operators.forEach(op => {
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
                decimalCount = 0;
            } else if (secondNumber) {
                displayValue = operate(firstNumber, secondNumber, window[operator])
                displayWindow.textContent = displayValue;
                operator = value;
                firstNumber = displayValue;
                secondNumber = '';
                decimalCount = 0;
            }
        });
    }
)

// window.addEventListener('keydown', event => {
//     if (endOfCalc) resetDisplay();
//     displayWindow.textContent = '';
//     let value = event.key;
//     console.log(!isNaN(value))
//     if (Number.isInteger(parseFloat(value)) && !isNaN(value)) {
//         if (counter === 1) {
//             firstNumber += value;
//             displayWindow.textContent = parseFloat(firstNumber);
//         } else {
//             secondNumber += value;
//             displayWindow.textContent = parseFloat(secondNumber);
//         }} else {
//             console.log(`1st: ${firstNumber}`)
//             console.log(`2nd: ${secondNumber}`)
//             console.log(`dV: ${displayValue}`)
//             displayWindow.textContent = displayValue || secondNumber || firstNumber;
//         }
// })

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