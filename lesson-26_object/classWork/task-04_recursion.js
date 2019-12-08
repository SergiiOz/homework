let i = 0;

//recursion
function incrementI() {

    i = i + 1;

    if (i <= 100) {
        incrementI();
    }
    console.log(i);
}

//run function
incrementI();

