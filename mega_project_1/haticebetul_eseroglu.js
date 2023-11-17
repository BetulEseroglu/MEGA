'use strict';

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');
let currentVal = '';
let calculationArray = [];

function initCalculator() {
    // Add click and hover event listeners to all buttons
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonVal = button.innerText;

            // If the button clicked is a number or a dot
            if (!isNaN(buttonVal) || buttonVal === '.') {
                currentVal += buttonVal;
                display.innerText = currentVal;
            }
            // If the button clicked is an operator (+, -, *, /)
            else if (['+', '-', '*', '/'].includes(buttonVal)) {
                // Push the current value and operator to the calculation array
                calculationArray.push(parseFloat(currentVal), buttonVal);
                currentVal = '';
            }
            // If the button clicked is the equals sign
            else if (buttonVal === '=') {
                // Push the current value to the calculation array
                calculationArray.push(parseFloat(currentVal));

                // Calculate the result of the calculation array
                let result = calculationArray[0];
                for (let i = 1; i < calculationArray.length; i += 2) {
                    const operator = calculationArray[i];
                    const value = calculationArray[i + 1];

                    switch (operator) {
                        case '+':
                            result += value;
                            break;
                        case '-':
                            result -= value;
                            break;
                        case '*':
                            result *= value;
                            break;
                        case '/':
                            result /= value;
                            break;
                        default:
                            break;
                    }
                }

                // Set the display to the result
                display.innerText = result;
                currentVal = result;

                // Add the calculation history to the screen
                addToHistory(result);
                
                calculationArray = [];
            }
            // If the button clicked is the clear button
            else if (buttonVal === 'C') {
                display.innerText = '';
                currentVal = '';
                calculationArray = [];
            }
            // If the button clicked is the backspace button
            else if (buttonVal === '←') {
                currentVal = currentVal.slice(0, -1);
                display.innerText = currentVal;
            }
        });

        
    });
}

  
initCalculator();
