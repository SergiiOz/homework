// task 1 (User Name)

//let userName = prompt("What is your name?");

// console.log("Hello, " + userName);


// ============================================

// task 2 (Years Old)

// const CURENTYEAR = 2019;
// let yearOfBirth = Number(prompt("Please, write your year of birth"));
// let yearsOld = curentYear - yearOfBirth;

// console.log("You are " + yearsOld);


// ============================================

// task 3 (Square Perimetr)

// let sideLength = Number(prompt("Please, write a side length, cm:"));
// let squarePerimetr = sideLength * 4;

// console.log("This square has perimetr: " + squarePerimetr + " cm");


// ============================================

// task 4 (Area of the circle)

// const PI = 3.1415;
// let radius = Number(prompt("Please, give me a circle radius: "));
// let areaOfCircle = PI * (radius * radius);

// console.log("Area of the circle equal: " + areaOfCircle);


// =============================================

// task 5 (Recomend speed)

// let distance = Number(prompt("Please, give me a distance beetween two cities, km "));
// let hoursForDistance = Number(prompt("How many hours would you like to drive this distance: ")); 2423423

// let recomentSpeed = distance / hoursForDistance;

// console.log("You need to drive at a speed: " + recomentSpeed + " km/h");


// =============================================

// task 6 (exchange US dollars)

// const EXCHANGERATE = 0.91;
// let inputCurrency = Number(prompt("How many dollars do you want to chage: "));
// let outputCurrency = EXCHANGERATE * inputCurrency;

// console.log("You will have: " + outputCurrency + " euro");


// ==============================================

// task 7 (memory usb-flash)

// let memoryFlash = Number(prompt("Please, write mamory usb-flash: "));
// let sizeFile = 820;

// let countFilesOnFlash = memoryFlash * 1024 / 820;

// console.log("The count of movies on the flash drive will be: " + countFilesOnFlash.toFixed(2));


// ==============================================






// ==============================================

// task 10 (deposit in bank)

let userMoney = Number(prompt("10 task: How many dollars Us you want to put in the bank: "));
let monthDeposit = 2;
let percentInYear = 5;
let percentInMonth = percentInYear / 12;

let sumBenefits = userMoney / 100 * (percentInMonth * monthDeposit);

console.log("You will get in two month the: " + sumBenefits.toFixed(2) + " dollars US");

