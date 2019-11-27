// Запросить у пользователя его возраст и определить, кем он является: ребенком (0–2), подростком (12–18), взрослым
//     (18_60) или пенсионером (60– ...).

let age = Number(prompt("Please, write - how old are you? "));

if (age >= 0 && age <= 12) {

    alert("You are a child");

} else if (age > 12 && age <= 18) {

    alert("You are a teenager");

} else if (age > 18 && age <= 60) {

    alert("You are an adult");
} else {

    alert("You are a retiree");
}