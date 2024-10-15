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