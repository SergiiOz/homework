
// 2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 

// Функция сложения 2-х объектов-дробей;

// Функция вычитания 2-х объектов-дробей;

// Функция умножения 2-х объектов-дробей;

// Функция деления 2-х объектов-дробей;

// Функция сокращения объекта-дроби.
// ========================================

//object 1
let numba1 = {
    top: 13,
    bottom: 17,
}

//object 2
let numba2 = {
    top: 7,
    bottom: 8,
}

function sumNumbas(a, b) {

    result = (a.top / a.bottom) + (b.top / b.bottom);

    console.log(result);
    return result;

}

function subtractNumbas(a, b) {
    result = (a.top / a.bottom) - (b.top / b.bottom);

    console.log(result);
    return result;

}

function divisionNumbas(a, b) {
    result = (a.top / a.bottom) / (b.top / b.bottom);

    console.log(result);
    return result;

}


function multiplyNumbas(a, b) {
    result = (a.top / a.bottom) * (b.top / b.bottom);

    console.log(result);
    return result;

}


sumNumbas(numba1, numba2);
subtractNumbas(numba1, numba2);
divisionNumbas(numba1, numba2);
multiplyNumbas(numba1, numba2);