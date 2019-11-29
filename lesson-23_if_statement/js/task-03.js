// Запросить у пользователя трехзначное число и проверить, есть ли в нем одинаковые цифры.

let getNumber = Number(prompt("Task-03: Write three-digit number "));

let firstNumber = getNumber % 10;
let secondNumber = Math.floor(getNumber / 10) % 10;
let thirdNumber = (Math.floor(((getNumber - firstNumber) / 10) - secondNumber) / 10) % 10;
// let fourthNumber = (Math.floor((((getNumber - firstNumber) / 10) - secondNumber) / 10) - thirdNumber) / 10;

if (firstNumber === secondNumber || firstNumber === thirdNumber) {
    console.log(firstNumber);

} else if (secondNumber === thirdNumber) {
    console.log(secondNumber);

} else {
    console.log("We don't have same numbers");
}



