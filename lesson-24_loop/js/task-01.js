
// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
// допустим первое вводимое число всегда меньше второго
let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let btn = document.getElementById("btn");
let summ = 0;

btn.addEventListener("click", function () {

    let i = Number(number1.value);

    while (i <= Number(number2.value)) {
        summ = summ + i;
        i = i + 1;
    }

    alert(`Summ all number equal: ${summ}`);

});