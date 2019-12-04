// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

let firstNumber = 7;
let secondNumber = 12;


function comparingNumbers(a, b) {
    if (a < b) {
        result = -1;

    } else if (a > b) {
        result = 1;

    } else {
        result = 0;
    }
    console.log(result);
    return result;
}

//run function
comparingNumbers(firstNumber, secondNumber); // -1