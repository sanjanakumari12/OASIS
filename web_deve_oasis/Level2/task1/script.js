document.addEventListener('DOMContentLoaded', function() {
    const display = document.querySelector('.display');
    const buttons = document.querySelectorAll('.btn');

    let currentInput = '0';
    let firstOperand = null;
    let operator = null;
    let waitingForSecondOperand = false;

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function clearCalculator() {
        currentInput = '0';
        firstOperand = null;
        operator = null;
        waitingForSecondOperand = false;
        updateDisplay();
    }

    function handleOperator(nextOperator) {
        const inputValue = parseFloat(currentInput);

        if (operator && waitingForSecondOperand) {
            operator = nextOperator;
            return;
        }

        if (firstOperand === null) {
            firstOperand = inputValue;
        } else if (operator) {
            const result = performCalculation(operator, inputValue);
            currentInput = String(result);
            firstOperand = result;
        }

        operator = nextOperator;
        waitingForSecondOperand = true;
        updateDisplay();
    }

    function performCalculation(operator, secondOperand) {
        if (operator === '+') {
            return firstOperand + secondOperand;
        } else if (operator === '-') {
            return firstOperand - secondOperand;
        } else if (operator === '*') {
            return firstOperand * secondOperand;
        } else if (operator === '/') {
            return firstOperand / secondOperand;
        }
        return secondOperand;
    }

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const { value } = button.dataset;

            if (value === 'clear') {
                clearCalculator();
            } else if (value === '=') {
                handleOperator(value);
            } else if (button.classList.contains('operator')) {
                handleOperator(value);
            } else {
                if (currentInput === '0' || waitingForSecondOperand) {
                    currentInput = value;
                    waitingForSecondOperand = false;
                } else {
                    currentInput += value;
                }
                updateDisplay();
            }
        });
    });
});
