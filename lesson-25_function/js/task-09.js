// Написать функцию, которая принимает количество секунд, 
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».


//convert seconds to minutes
function convertSecondToMinutes(s) {
    result = Math.floor(s / 60);

    console.log(result);
    return result;
}

// convert minutes to hours
function convertMinuteToHours(min) {
    result = Math.floor(min / 60);

    console.log(result);
    return result;
}

// convert seconds to hours, minutes and seconds
function convertSecondToMinutesAndHours(sec) {

    let seconds = sec % 60;
    let minutes = convertSecondToMinutes(sec) % 60;
    let hours = convertMinuteToHours(convertSecondToMinutes(sec));

    result = String(hours) + " : " + String(minutes) + " : " + String(seconds);

    console.log(result);
    return result;

}