// Написать конвертор валют. Пользователь вводит количество USD, выбирает,
// в какую валюту хочет перевести EUR, UAN или AZN, и получает в ответ соответствующую сумму.


let amountToExchange = Number(prompt('Write amount dollars (US) to exchange: '));
let currencyChoice = prompt('Currency choice: EUR, UAN, AZN ');
let result;
let eur = 0.91;
let uan = 24.03;
let azn = 1.70;


if (currencyChoice.toUpperCase() === 'EUR') {
    result = amountToExchange * eur;

} else if (currencyChoice.toUpperCase() === 'UAN') {
    result = amountToExchange * uan;

} else if (currencyChoice.toUpperCase() === 'AZN') {
    result = amountToExchange * azn;

} else {
    alert('Try again');
}

alert('You will get summ equal: ' + result.toFixed(2) + " " + currencyChoice.toUpperCase());
