
// Зациклить калькулятор.Запросить у пользователя 2 числа и знак, решить пример, 
// вывести результат и спросить,
// хочет ли он решить еще один пример.И так до тех пор, пока пользователь не откажется.

// Task Calculation

let firstNumber;
let symbol;
let secondNumber;
let result;
let answerContinue;


// repeat again and again until the user writes “NO”
while (answerContinue !== "NO") {

    firstNumber = Number(prompt("Give me a first number"));
    symbol = prompt("Write a symbol operation");
    secondNumber = Number(prompt("Give me a second number"));
    result;

    if (symbol === "+") {
        result = firstNumber + secondNumber;

    } else if (symbol === "-") {
        result = firstNumber - secondNumber;

    } else if (symbol === "*") {
        result = firstNumber * secondNumber;

    } else if (symbol === "/") {
        result = firstNumber / secondNumber;

    } else {
        alert("Wrong!!! Try again");
    }

    alert("Result: " + result.toFixed(2));

    // ask user - continue?
    answerContinue = prompt("Do it again? ").toUpperCase();

}
