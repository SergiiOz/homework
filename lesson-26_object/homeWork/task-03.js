// 3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

// Функция вывода времени на экран;

// Функция изменения времени на переданное количество секунд;

// Функция изменения времени на переданное количество минут;

// Функция изменения времени на переданное количество часов. 

// Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».

//============================================================

let time = {

    hours: 01,
    minutes: 10,
    seconds: 27,
}


function displayTime() {
    console.log(`${time.hours} : ${time.minutes} : ${time.seconds}`);
}

//convert seconds to minutes
function convertSecondToMinutes(s) {
    result = Math.floor(s / 60);

    return result;
}

// convert minutes to hours
function convertMinuteToHours(min) {
    result = Math.floor(min / 60);

    return result;
}

function changeTimeIfAddSeconds(sec) {

    let seconds = (time.seconds + sec) % 60;
    let minutes = (time.minutes + convertSecondToMinutes(time.seconds + sec)) % 60;
    let hours = time.hours + convertMinuteToHours(time.minutes + convertSecondToMinutes(time.seconds + sec));

    return (time.seconds = seconds, time.minutes = minutes, time.hours = hours);
}



function changeTimeIfAddMinutes(min) {
    //return minutes and hours...
    let minutes = (time.minutes + min) % 60;
    let hours = time.hours + convertMinuteToHours(time.minutes + min);

    return (time.minutes = minutes, time.hours = hours);
}




//run function

displayTime();

