// Запросить у пользователя сумму покупки и вывести сумму к оплате со скидкой:
// от 200 до 300 – скидка будет 3%, от 300 до 500 – 5%, от 500 и выше – 7%.

let summPurchase = Number(prompt("Task-7: Write summ your purchase: "));
let discountBronze = 3;
let discountSilver = 5;
let discountGold = 7;
let totalToPay;

if (summPurchase >= 200 && summPurchase < 300) {
    totalToPay = summPurchase / 100 * (100 - discountBronze);

} else if (summPurchase >= 300 && summPurchase < 500) {
    totalToPay = summPurchase / 100 * (100 - discountSilver);

} else if (summPurchase >= 500) {
    totalToPay = summPurchase / 100 * (100 - discountGold);

} else {
    alert("You don't have discount");
}

alert("Total summ to pay equal: " + totalToPay + " usd");