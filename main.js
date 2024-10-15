const calculator = document.querySelector(".calculator");

const numbers = calculator.querySelectorAll(".number");
const operators = calculator.querySelectorAll(".operator");

const dot = calculator.querySelector(".dot");
const deleteButton = calculator.querySelector(".delete-btn");
const equalButton = calculator.querySelector(".equal-btn");
const deleteAll = calculator.querySelector(".all-delete-btn");

const input = calculator.querySelector(".calculator-input");

const replacedOperators = [
    { operator: "+", replaced: "+" },
    { operator: "–", replaced: "-" },
    { operator: "×", replaced: "*" },
    { operator: "÷", replaced: "/" }
];

const addNumber = (e) => {
    if (input.innerText === "0") {
        input.innerText = e.target.innerText;
    } else {
        input.innerText += e.target.innerText;
    }
};

numbers.forEach((number) => {
    number.addEventListener("click", addNumber);
});

const isOperator = (symbol) => {
    return replacedOperators.some(({ replaced }) => symbol === replaced);
}

const addOperator = (e) => {
    let calcOperator = e.target.innerText;
    let replacedOperator = replacedOperators.find((element) => element.operator === calcOperator).replaced;
    if (!isOperator(input.innerText[input.innerText.length - 1])) {
        input.innerText += replacedOperator;
    } else {
        input.innerText =
            input.innerText.substring(0, input.innerText.length - 1) +
            replacedOperator;
    }
};

operators.forEach((operator) => {
    operator.addEventListener("click", addOperator);
});

const isValidDot = () => {
    let inputText = input.innerText;
    let operands = inputText.split(/[-+*\/]/g);
    let lastOperand = operands[operands.length - 1];
    return input.innerText.length > 0 &&
        input.innerText[input.innerText.length - 1] != "." &&
        !(lastOperand.includes("."));
}

const addDot = () => {
    if (isValidDot()) {
        if (isOperator(input.innerText[input.innerText.length - 1])) {
            input.innerText += "0";
        }
        input.innerText += ".";
    }
};

dot.addEventListener("click", addDot);