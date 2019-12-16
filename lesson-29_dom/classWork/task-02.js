//count click on mouse,

//get access to button
let button = document.getElementById("toggle-button-1");
//get access to text
let words = document.getElementById("text-content");
//variable count
let counter = 0;

//count click
button.addEventListener('click', function () {

    counter++;

    //display counter
    words.textContent = counter;

});
