
// Написать функцию, которая принимает часы, минуты и секунды 
// и возвращает это время в секундах.


//convert minutes to seconds
function convertMinuteToSeconds(hour) {
    result = hour * 60;

    // console.log(result);
    return result;
}

//convert hours to minutes
function convertHourToMinutes(min) {
    result = min * 60;

    // console.log(result);
    return result;
}

function convertAllToSeconds(hours = 0, minutes = 0, seconds = 0) {

    result = convertMinuteToSeconds(convertHourToMinutes(hours)) + convertHourToMinutes(minutes) + seconds;

    console.log(result);
    return result;
}

//run function

convertAllToSeconds(10, 5, 30); //36330