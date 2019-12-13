//find sum all numbers of array

let list = [1, 3, 7, 2,];

//sum from reduce
function getSumReduce(arr) {
    let result = arr.reduce(function (sum, item) {
        return sum + item;
    }, 0);

    return result;
}

//run function
getSumReduce(list);

//sum from for
// function getSumFor(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + sum[i];
//     }

//     return sum;
// }

// //sum from forEach
// function getSumForEach(arr) {
//     let sum = 0;
//     arr.forEach(function (item) {
//         sum = sum + item;
//     });

//     return sum;
// }

//=======================================

//example
// сделать конкатенацию всей букв массива
let word = ["t", "u", "z",];

function getSumReduce(arr) {
    let result = arr.reduce(function (accum, currentItem) {
        return accum + currentItem;
    }, "");

    return result;
}

//run function
getSumReduce(word);


//======================================

//example
// подсчитать сколько осталось жизней 'lifes' после получения повреждений 'demage'
let lifes = 100;

let demage = [4, 8, 12, 15];


function restOfLifes(arr, start) {
    //accum - це як аккуmулятор або sum = 0, curentItem - arr[i], start - початкове значення accum
    let result = arr.reduce(function (accum, curentItem) {
        return accum - curentItem;
    }, start);

    return result;
}

//run function
restOfLifes(demage, lifes);