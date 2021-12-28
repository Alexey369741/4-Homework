const ACTIONS = {'+': add, '-': sub, '*': mult, '/': div };
const ACTION_LIST = Object.keys(ACTIONS);
const operation = getOperation();
const operantConsider = getOperantConsider();
const operands = getOperands(operantConsider);
const result = calculate(operands, operation);


showResult(operands, operation, result);


console.log (operantConsider)

function getOperation() {
    let operation;

    do {
        operation = prompt(`What operation do you want to do? ${ACTION_LIST.join(', ')}`);
    } while (!isOperationValid(operation));

    return operation;
}

function isOperationValid(operation) {
    return ACTION_LIST.includes(operation);
}

function getOperantConsider() {
    let consider;

    do {
        consider = prompt('Enter operants consider ');
    } while (!isOperantConsiderValid(consider));

    return consider;
}

function isOperantConsiderValid(consider) {
    return !isNaN(consider) && consider >=2 && consider <=5;
}

function getOperands(consider) {
    const nums = [];

    for (let i = 1; i <= consider; i++) {
        nums.push(getOperant(i));
    }

    return nums;
}

function getOperant(operantName) {
    let operant;

    do {
        operant = Number(prompt(`Enter operant ${operantName}`));
    } while (isNaN(operant));

    return operant;
}

function calculate(operands, operation) {
    const mathFunc = ACTIONS[operation];

    return operands.reduce((acc, operands) => mathFunc(acc, operands));
}

function add(operantA,operantB) {
    return operantA + operantB;
}

function sub(operantA,operantB) {
    return operantA - operantB;
}

function mult(operantA,operantB) {
    return operantA * operantB;
}

function div(operantA,operantB) {
    return operantA / operantB;
}

function showResult(operands, operation, result) {

    console.log(`${operands.join(`${operation}`)} = ${result}`);
}