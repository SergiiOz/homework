
// Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей.
// При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. 
// Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.

let evenNumber = 0;
let oddNumber = 0;
let zeroNumber = 0;


for (let i = 0; i < 10; i++) {

    let getNumber = Number(prompt("Write a number"));

    if (getNumber % 2 === 0) {
        evenNumber = evenNumber + 1;

    } else if (getNumber % 2 !== 0) {
        oddNumber = oddNumber + 1;

    } else {
        zeroNumber = zeroNumber + 1;
    }
}

console.log(`Even number: ${evenNumber}`);
console.log(`Odd number: ${oddNumber}`);
console.log(`Zero number: ${{ zeroNumber }}`);




