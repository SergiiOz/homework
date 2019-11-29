// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц,
// год, а также високосный год.


let dayOfBirth = Number(prompt('Write, the DAY of birth'));
let monthOfBirth = Number(prompt('Write, the MONTH of birth'));
let yearOfBirth = Number(prompt('Write, the YEAR of birth'));
let outputDay;
let outputMonth;
let outputYear;
let yearLeap;


// yearOfBirth is LEAP or isn't
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


// OUTPUT DAY
//month have 31 days
if (monthOfBirth === 1 || monthOfBirth === 3 || monthOfBirth === 5 || monthOfBirth === 7 || monthOfBirth === 8 || monthOfBirth === 10 || monthOfBirth === 12) {

    if (dayOfBirth >= 1 && dayOfBirth <= 30) {
        outputDay = dayOfBirth + 1;
        console.log(outputDay);

    } else if (dayOfBirth === 31) {
        outputDay = 1;
        console.log(outputDay);

    } else {
        console.log("Write number from 1 to 31");
    }

    // month have 30 days
} else if (monthOfBirth === 4 || monthOfBirth === 6 || monthOfBirth === 9 || monthOfBirth === 11) {
    outputDay = 1;
    console.log(outputDay);

    // month have 28 days or 29 days in leap-year
} else if (monthOfBirth === 2) {

    if (dayOfBirth >= 1 && dayOfBirth <= 27) {
        outputDay = dayOfBirth + 1;
        console.log(outputDay);

    } else if (dayOfBirth === 28 && yearLeap === true) {
        outputDay = dayOfBirth + 1;
        console.log(outputDay);
    } else {
        outputDay = 1;
        console.log(outputDay);
    }

} else {
    console.log("error");
}


// OUTPUT MONTH
if (dayOfBirth >= 1 && dayOfBirth <= 29) {
    outputMonth = monthOfBirth;
    console.log(outputMonth);
} else if (dayOfBirth === 31 && monthOfBirth === 1 || monthOfBirth === 3 || monthOfBirth === 5 || monthOfBirth === 7 || monthOfBirth === 8 || monthOfBirth === 10) {
    outputMonth = monthOfBirth + 1;
    console.log(outputMonth);

} else if (dayOfBirth === 31 && monthOfBirth === 12) {
    outputMonth = 1;
    console.log(outputMonth);

} else if (dayOfBirth === 30 && monthOfBirth === 4 || monthOfBirth === 6 || monthOfBirth === 9 || monthOfBirth === 11) {
    outputMonth = 1;
    console.log(outputMonth);

} else if (dayOfBirth === 28 && yearLeap === true) {
    outputMonth = monthOfBirth;
    console.log(outputMonth);

} else if (dayOfBirth === 29 && yearLeap === true) {
    outputMonth = monthOfBirth + 1;

} else {
    console.log('error');
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
