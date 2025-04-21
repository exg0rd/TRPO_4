#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length !== 3) {
    console.log("Использование: node index.js <операция> <число1> <число2>");
    console.log("Доступные операции: add (сложение), subtract (вычитание), multiply (умножение), divide (деление)");
    process.exit(1);
}

const [operation, num1, num2] = args;

const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

if (isNaN(number1) || isNaN(number2)) {
    console.error("Ошибка: введенные значения должны быть числами.");
    process.exit(1);
}

let result;
switch (operation) {
    case "add":
        result = number1 + number2;
        break;
    case "subtract":
        result = number1 - number2;
        break;
    case "multiply":
        result = number1 * number2;
        break;
    case "divide":
        if (number2 === 0) {
            console.error("Ошибка: деление на ноль невозможно.");
            process.exit(1);
        }
        result = number1 / number2;
        break;
    default:
        console.error(
            "Ошибка: недопустимая операция. Доступные операции: add, subtract, multiply, divide."
        );
        process.exit(1);
}

console.log(`Результат: ${result}`);