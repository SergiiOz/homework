// Запросить 2 числа и найти только наибольший общий делитель.

let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2");
let btn = document.getElementById("btn");
let summ = 0;

btn.addEventListener("click", function () {

    let divider = Number(number1.value) > Number(number2.value) ? Number(number2.value) : Number(number1.value);

    while (divider > 0) {
        if (Number(number1.value) % divider === 0 && Number(number2.value) % divider === 0) {
            break;
        }

        divider = divider - 1;
    }

    alert("Max divider is: " + divider);

});



// // max divider
// let number1 = Number(prompt("Number 1"));
// let number2 = Number(prompt("Number 2"));
// let divider = number1 > number2 ? number2 : number1;


// while (divider > 0) {
//     if (number1 % divider === 0 && number2 % divider === 0) {
//         break;
//     }

//     divider = divider - 1;
// }

// alert("Max divider is: " + divider);


// If I want to find min divider
// min number
// let minGetNumber = number1 > number2 ? number2 : number1;
// let minDivider = 2;


// while (minDivider <= minGetNumber) {
//     if (number1 % minDivider === 0 && number2 % minDivider === 0) {
//         minDivider = minDivider + 1;
//         break;
//     }

//     minDivider = minDivider + 1;
// }

// alert("Min divider is: " + minDivider);


// Code below is an example

// for(let i = 2; i < minNumber; i++){

//     if(number1 % i === 0 && number2 % i === 0 ){
//         dividor = i;
//     }
// }






