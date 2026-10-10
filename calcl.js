let firstNumber = '';
let operation = '';
let resultShown = false;

const display = document.querySelector('#display');
const digitButtons = document.querySelectorAll('.digit-btn');

for (const btn of digitButtons) {
    btn.addEventListener('click', function() {
        if (resultShown === true) {
            display.value = '';
            resultShown = false;
        }
        display.value = display.value + btn.textContent;
    });
}

const plusBtn = document.querySelector('#btn-plus');

plusBtn.addEventListener('click', function() {
    if (display.value === '' || display.value === 'Ошибка') {
        return;
    }
    firstNumber = display.value;
    operation = '+';
    display.value = '';
    console.log(firstNumber, operation);
});

const minusBtn = document.querySelector('#btn-minus');

minusBtn.addEventListener('click', function() {
        if (display.value === '' || display.value === 'Ошибка') {
        return;
    }
    firstNumber = display.value;
    operation = '-';
    display.value = '';
    console.log(firstNumber, operation);
})

const equalsBtn = document.querySelector('#btn-equals');

equalsBtn.addEventListener('click', function() {
    if (display.value === '' || operation === '') {
        display.value = 'Ошибка';
        resultShown = true;
        return;
    }
    const a = Number(firstNumber);
    const b = Number(display.value);

    if (operation === '+') {
        display.value = a + b;
    } else if (operation === '-') {
        display.value = a - b;
    } else if (operation === '*') {
        display.value = a * b;
    } else if (operation === '/') {
        if (b === 0) {
            display.value = 'Ошибка';
        } else {
            display.value = a / b;
        }
    }
    firstNumber = '';
    operation = '';
    resultShown = true;
});

const multiplyBtn = document.querySelector('#btn-multiply');
multiplyBtn.addEventListener('click', function() {
        if (display.value === '' || display.value === 'Ошибка') {
        return;
    }
    firstNumber = display.value;
    operation = '*';
    display.value = '';
});

const divisionBtn = document.querySelector('#btn-division');
divisionBtn.addEventListener('click', function() {
        if (display.value === '' || display.value === 'Ошибка') {
        return;
    }
    firstNumber = display.value;
    operation = '/';
    display.value = '';
});

const clearBtn = document.querySelector('#btn-clear');
clearBtn.addEventListener('click', function() {
    firstNumber = '';
    operation = '';
    display.value = '';
    resultShown = false;
});