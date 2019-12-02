// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK
let getDayOfWeekend;

do {
    getDayOfWeekend = prompt("Do you want to see the next day of weekend? ");

} while (getDayOfWeekend.toUpperCase() !== "OK");