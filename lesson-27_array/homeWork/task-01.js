let shoppingList = [
    {
        apple: 3,
        bought: true,
    },
    {
        orange: 2,
        bought: false,
    },
    {
        bread: 1,
        bought: true,
    },
    {
        milk: 3,
        bought: true,
    },
];

//sort array: first not bought item, second bought
function sortListFirstNotBought(arr) {
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].bought === false) {
            newArray.unshift(arr[i]);
        } else {
            newArray.push(arr[i]);
        }
    }

    return newArray;
}

//display in console all list 
function displayList(arr) {

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

//run function
displayList(sortListFirstNotBought(shoppingList));