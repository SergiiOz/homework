// Запросить у пользователя длину окружности и периметр квадрата. Определить, может ли такая окружность
// поместиться в указанный квадрат.

let circumferenceCircle = Number(prompt("Task-08: Write the circumference of a circle "));
let squarePerimetr = Number(prompt("Write the perimetr of a square "));
const PI = 3.14;

//We need know diameter the circle
let diameterCircle = circumferenceCircle / PI;
//We need know length side of the Square
let sideSquare = squarePerimetr / 4;

if (diameterCircle <= sideSquare) {
    alert("We write the circle into the square ");

} else if (diameterCircle > sideSquare) {
    alert("We CAN'T write this circle into the square");

} else {
    alert("Wrong! Try again");
}