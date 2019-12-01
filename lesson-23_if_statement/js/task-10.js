// Запросить дату (день, месяц, год) и вывести следующую за ней дату. Учтите возможность перехода на следующий месяц,
// год, а также високосный год.


let dayOfBirth = Number(prompt('Write, the DAY of birth, from 1 to 31'));
let monthOfBirth = Number(prompt('Write, the MONTH of birth, form 1 to 12'));
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
//Check period between 1 and 31 
if (dayOfBirth <= 0 || dayOfBirth > 31) {

    if (monthOfBirth <= 0 || monthOfBirth > 12) {
        alert("Error! write DAY from 1 to 31 and write MONTH from 1 to 12 ");

    } else {
        alert("Error! write DAY from 1 to 31");
    }

    // Day 1 - 27 
} else if (dayOfBirth > 0 && dayOfBirth <= 27) {

    if (monthOfBirth <= 0 || monthOfBirth > 12) {
        alert("Error! write MONTH from 1 to 12");

    } else {
        outputDay = dayOfBirth + 1;
        outputMonth = monthOfBirth;
    }

    // Day 28
} else if (dayOfBirth === 28) {

    if (monthOfBirth <= 0 || monthOfBirth > 12) {
        alert("Error! write MONTH from 1 to 12");

    } else if (monthOfBirth === 2 && yearLeap === true) {
        outputDay = dayOfBirth + 1;
        outputMonth = monthOfBirth;

    } else if (monthOfBirth === 2 && yearLeap === false) {
        outputDay = 1;
        outputMonth = monthOfBirth + 1;

    } else {
        outputDay = dayOfBirth + 1;
        outputMonth = monthOfBirth;

    }

    // Day 29
} else if (dayOfBirth === 29) {

    if (monthOfBirth <= 0 || monthOfBirth > 12) {
        alert("Error! write MONTH from 1 to 12");

    } else if (monthOfBirth === 2 && yearLeap === true) {
        outputDay = 1;
        outputMonth = monthOfBirth + 1;

    } else if (monthOfBirth === 2 && yearLeap === false) {
        outputMonth = "Error! Entered year is not a leap year. This month doesn't have 29 days.";

    } else {
        outputDay = dayOfBirth + 1;
        outputMonth = monthOfBirth;
    }

    // Day 30
} else if (dayOfBirth === 30) {

    if (monthOfBirth <= 0 || monthOfBirth > 12) {
        alert("Error! write MONTH from 1 to 12");

    } else if (monthOfBirth === 4 || monthOfBirth === 6 || monthOfBirth === 9 || monthOfBirth === 11) {
        outputDay = 1;
        outputMonth = monthOfBirth + 1;

    } else if (monthOfBirth === 2) {
        outputMonth = "Error! This month doesn't have 30 days";

    } else {
        outputDay = dayOfBirth + 1;
        outputMonth = monthOfBirth;
    }

    // Day 31
} else if (dayOfBirth === 31) {

    if (monthOfBirth <= 0 || monthOfBirth > 12) {
        alert("Error! write MONTH from 1 to 12");

    } else if (monthOfBirth === 1 || monthOfBirth === 3 || monthOfBirth === 5 || monthOfBirth === 7 || monthOfBirth === 8 || monthOfBirth === 10) {
        outputDay = 1;
        outputMonth = monthOfBirth + 1;

    } else if (monthOfBirth === 12) {
        outputDay = 1;
        outputMonth = 1;

    } else {
        outputMonth = "Error! This month doesn't have 31 days";

    }

    // ERROR
} else {
    alert("Error!");
}



//OUTPUT YEAR
if (dayOfBirth === 31 && monthOfBirth === 12) {
    outputYear = yearOfBirth + 1;

} else {
    outputYear = yearOfBirth;
}

// OUTPUT
alert(`Your birthday: ${dayOfBirth} : ${monthOfBirth} : ${yearOfBirth}
    Next date after your birthday: ${outputDay} : ${outputMonth} : ${outputYear}`);

