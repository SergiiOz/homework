// Запросить у пользователя год и проверить, високосный он или нет. 
// Високосный год либо кратен 400, либо кратен 4 и при этом не кратен 100.

let getYear = Number(prompt("Task-04: Write a year: "));
let result;

if (getYear % 4 !== 0) {
    result = "The year isn't leap";
} else if (getYear % 100 === 0) {
    if (getYear % 400 === 0) {
        result = "This is Leap-Year";
    } else {
        result = "The year isn't leap";
    }

} else {
    result = "This is Leap-Year";
}

alert(result);