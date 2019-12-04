
// Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей, отличных от самого этого числа.

let number = Number(prompt("Give me a number "));



function perfectNumber(number) {

    let divisor = 0;
    let sumDivisor = 0;

    //sum all divisors of number

    for (let i = number; i > 0; i--) {

        if (number % i === 0 || i === 1) {

            divisor = i;

            console.log(divisor);
            sumDivisor = sumDivisor + divisor
        }

    }

    console.log(sumDivisor);

    //check number is perfect number or isn't 

    if (number === (sumDivisor - number)) {
        result = true;

    } else {
        result = false;
    }

    console.log(result);
    return result;

}

//run function
perfectNumber(10);
