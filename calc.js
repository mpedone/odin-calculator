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
    // alert(result)
    return result;
}

const displayWindow = document.querySelector(".display p");
displayWindow.textContent = 0;

const clear = document.querySelector(".clear");
const buttons = document.querySelectorAll(".button");
// const plus = document.querySelector(".add");
// const minus = document.querySelector(".subtract");
// const times = document.querySelector(".multiply");
// const quotient = document.querySelector(".divide");
// const decimal = document.querySelector(".decimal");
// const equals = document.querySelector(".equals");
// const numerals = document.querySelectorAll(".numeral");

clear.addEventListener('click', () => 
    displayWindow.textContent = 0);

let displayText = [];
let entry;
let numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.']
let operators = {'add': '+', 'subtract': '-', 'multiply': '*', 'divide': '/', 'equals': '='}


// buttons.forEach(button => 
//     button.addEventListener('click', (event) => {
//         let target = event.target;
//         let value = target.id
//         console.log(value);
//         if (numerals.includes(value)) {
//             displayText.push(value);
//             displayWindow.textContent = displayText.join('');
//         } else if (operators.includes(value)) {
//             firstNumber = parseFloat(displayWindow.textContent);
//             displayWindow.textContent = 0;
//             operator = value;
//         }
//         // console.log(displayText.join(''));
//         console.log(firstNumber + " " + operator);
//     })
// )

let count = 0;

buttons.forEach(button => 
    button.addEventListener('click', (event) => {
        displayWindow.textContent = '';
        count += 1;
        let target = event.target;
        let value = target.id;
        if (count === 1) {
            firstNumber = parseInt(value);
            displayWindow.textContent = '';
            displayWindow.textContent = firstNumber;
        } else if (count === 2) {
            operator = value;
            displayWindow.textContent = '';
            displayWindow.textContent = operators[operator];
        } else if (count === 3) {
            secondNumber = parseInt(value);
            displayWindow.textContent = '';
            displayWindow.textContent = secondNumber;
        } else {
            result = operate(firstNumber, secondNumber, window[operator]);
            displayWindow.textContent = '';
            displayWindow.textContent = result;
            count = 0;
        }

    })
)
