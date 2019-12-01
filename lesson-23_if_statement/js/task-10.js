// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц,
// год, а также високосный год.


let dayOfBirth = Number(prompt('Write, the DAY of birth'));
let monthOfBirth = Number(prompt('Write, the MONTH of birth'));
let yearOfBirth = Number(prompt('Write, the YEAR of birth'));
let outputDay;
let outputMonth;
let outputYear;
let yearLeap;


// CHECK yearOfBirth is LEAP or isn't
if (yearOfBirth % 4 !== 0) {
    yearLeap = false;

} else if (yearOfBirth % 100 === 0) {

    if (yearOfBirth % 400 === 0) {
        yearLeap = true;

    } else {
        yearLeap = false;
    }

} else {
    yearLeap = true;
}


// OUTPUT DAY  and  OUTPUT MONTH
if (dayOfBirth > 0 && dayOfBirth <= 27) {
    outputDay = dayOfBirth + 1;
    outputMonth = monthOfBirth;
    console.log(outputMonth);

} else if (dayOfBirth === 28) {

    if (monthOfBirth === 2 && yearLeap === true) {
        outputDay = dayOfBirth + 1;
        outputMonth = monthOfBirth;
        console.log(outputMonth);

    } else if (monthOfBirth === 2 && yearLeap === false) {
        outputDay = 1;
        outputMonth = monthOfBirth + 1;
        console.log(outputMonth);

    } else {
        outputDay = dayOfBirth + 1;
        outputMonth = monthOfBirth;
        console.log(outputMonth);
    }

} else if (dayOfBirth === 29) {

    if (monthOfBirth === 2 && yearLeap === true) {
        outputDay = 1;
        outputMonth = 1;
        console.log(outputMonth);

    } else if (monthOfBirth === 2 && yearLeap === false) {
        outputMonth = "You wrong, entered year is not a leap year";
        console.log("You wrong, entered year is not a leap year");

    } else {
        outputDay = dayOfBirth + 1;
        outputMonth = monthOfBirth;
        console.log(outputMonth);
    }

} else if (dayOfBirth === 30) {

    if (monthOfBirth === 4 || monthOfBirth === 6 || monthOfBirth === 9 || monthOfBirth === 11) {
        outputDay = 1;
        outputMonth = 1;
        console.log(outputMonth);
    } else {
        outputDay = dayOfBirth + 1;
        outputMonth = monthOfBirth;
        console.log(outputMonth);
    }

} else if (dayOfBirth === 31) {

    if (monthOfBirth === 1 || monthOfBirth === 3 || monthOfBirth === 5 || monthOfBirth === 7 || monthOfBirth === 8 || monthOfBirth === 10) {
        outputDay = 1;
        outputMonth = monthOfBirth + 1;
        console.log(outputMonth);

    } else if (monthOfBirth === 12) {
        outputMonth = 1;
        console.log(outputMonth);

    } else {
        outputDay = 1;
        outputMonth = 1;
        console.log(outputMonth);
    }

} else {
    console.log("error!");
}



//OUTPUT YEAR
if (dayOfBirth === 31 && monthOfBirth === 12) {
    outputYear = yearOfBirth + 1;
    console.log(outputYear);
} else {
    outputYear = yearOfBirth;
    console.log(outputYear);
}



console.log(`Your birthday: ${dayOfBirth} : ${monthOfBirth} : ${yearOfBirth}`);
console.log(`Next date after your birthday: ${outputDay} : ${outputMonth} : ${outputYear}`);
