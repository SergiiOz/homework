// Запросить у пользователя число и вывести все делители этого числа.

let number = Number(prompt("Give me a number "));
let divisor = 0;

for (let i = number; i > 0; i--) {
    if (number % i === 0 || i === 1) {
        divisor = i;
        console.log(divisor);
    }
}