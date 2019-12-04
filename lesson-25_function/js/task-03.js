// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

//get three numbers
let number1 = 1;
let number2 = 2;
let number3 = 4;

//the function will make a number from three numbers
function makeOneNumber(a, b, c) {

    //convert every number to string and make concatenation
    result = String(a) + String(b) + String(c);


    console.log(Number(result));

    return (Number(result)); //convert string to number and return result
}

//run the function
makeOneNumber(number1, number2, number3);

