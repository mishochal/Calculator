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

const MAX_LENGTH = 28;
const FIRST_BREAKPOINT = 13;
const SECOND_BREAKPOINT = 18;

const checkLength = () => {
    return input.innerText.length < MAX_LENGTH;
}

const changeInputFont = (inputText) => {
    if (inputText.length > FIRST_BREAKPOINT) {
        input.style.fontSize = "30px";
    }
    if (inputText.length > SECOND_BREAKPOINT) {
        input.style.fontSize = "20px";
    }
    if (inputText.length <= FIRST_BREAKPOINT) {
        input.style.fontSize = "40px";
    }
}

const addNumber = (e) => {
    if (checkLength()) {
        if (input.innerText === "0") {
            input.innerText = e.target.innerText;
        } else {
            input.innerText += e.target.innerText;
            changeInputFont(input.innerText);
        }
    }
};

numbers.forEach((number) => {
    number.addEventListener("click", addNumber);
});

const isOperator = (symbol) => {
    return replacedOperators.some(({ replaced }) => symbol === replaced);
}

const addOperator = (e) => {
    if (checkLength()) {
        let calcOperator = e.target.innerText;
        let replacedOperator = replacedOperators.find((element) => element.operator === calcOperator).replaced;
        if (!isOperator(input.innerText[input.innerText.length - 1])) {
            input.innerText += replacedOperator;
        } else {
            input.innerText =
                input.innerText.substring(0, input.innerText.length - 1) +
                replacedOperator;
        }
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

const clearInput = () => {
    input.innerText = "0";
    input.style.fontSize = "40px";
};

deleteAll.addEventListener("click", clearInput);

const deleteLast = () => {
    if (input.innerText.length === 1) {
        input.innerText = "0";
    } else {
        input.innerText = input.innerText.substring(0, input.innerText.length - 1);
        changeInputFont(input.innerText);
    }
};

deleteButton.addEventListener("click", deleteLast);

const evaluate = () => {
    let evaluated = eval(input.innerText);
    evaluated = Math.round(evaluated * 10000000000) / 10000000000;
    changeInputFont(String(evaluated));
    input.innerText = evaluated;
}

equalButton.addEventListener("click", evaluate);