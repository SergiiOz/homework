// Определить количество цифр в введенном числе.

let getNumber = Number(prompt("Write numbers"));
let i;
// let count = 0;

for( i = 0; getNumber > 1; i++){
    getNumber = getNumber / 10;
    // count = count + 1;
}

console.log("This summ has " + i + " numbers");