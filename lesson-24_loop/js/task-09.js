// Вывести таблицу умножения для всех чисел от 2 до 9. 
// Каждое число необходимо умножить на числа от 1 до 10.

let number = 2;
let result = 0;

for (let i = number; i <= 9; i++) {

    for (let j = 1; j < 10; j++) {
        result = i * j;
        console.log(result);
    }
}
