#!/usr/bin/env node

// Получаем аргументы командной строки
const args = process.argv.slice(2);

// Проверяем, что переданы все необходимые аргументы
if (args.length !== 3) {
    console.log("Использование: node index.js <операция> <число1> <число2>");
    console.log("Доступные операции: add (сложение), subtract (вычитание)");
    process.exit(1);
}

// Разбираем аргументы
const [operation, num1, num2] = args;

// Преобразуем числа из строк в числовые значения
const number1 = parseFloat(num1);
const number2 = parseFloat(num2);

// Проверяем корректность ввода чисел
if (isNaN(number1) || isNaN(number2)) {
    console.error("Ошибка: введенные значения должны быть числами.");
    process.exit(1);
}

// Выполняем операцию
let result;
switch (operation) {
    case "add":
        result = number1 + number2;
        break;
    case "subtract":
        result = number1 - number2;
        break;
    default:
        console.error(
            "Ошибка: недопустимая операция. Доступные операции: add, subtract."
        );
        process.exit(1);
}

// Выводим результат
console.log(`Результат: ${result}`);