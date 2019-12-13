// .Создать массив CSS - стилей(цвет, размер шрифта, выравнивание, подчеркивание и т.д.).
// Каждый элемент массива – это объект, состоящий из двух свойств: название стиля и значение стиля.
// Написать функцию, которая принимает массив стилей и текст, 
// и выводит этот текст с помощью document.write() в тегах < p ></p >, 
// добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.

let css = [
    { name: "font-size", value: "20px", },
    { name: "color", value: "red", },
    { name: "text-align", value: "justify", },
    { name: "font-style", value: "italic", },
    { name: "text-decoration", value: "underline", },
];


function transformListToStyle(arr) {
    return arr.reduce(function (accum, item) {
        return accum + `${item.name}: ${item.value}; `
    }, '');
}

let result = transformListToStyle(css);

//display our result
document.write(`<p style="${result}">Result our work: task-03</p>`)






