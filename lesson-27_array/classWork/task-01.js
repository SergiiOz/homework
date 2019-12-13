// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
    sum: true,
};


// function multiplayKey(obj) {
//     for (key in obj) {
//         if (typeof obj[key] === "number") {
//             obj[key] = obj[key] * 2;
//         }
//     }
// }


// let copyMenu = Object.assign({}, menu);

//create new object and each key multiply on 2
function multiplayKey(obj) {
    let copyObj = Object.assign({}, obj);

    for (key in copyObj) {
        if (typeof copyObj[key] === "number") {
            copyObj[key] = copyObj[key] * 2;
        }
    }

    return copyObj;
}


let menu2 = multiplayKey(Menu);
console.log(menu2);


