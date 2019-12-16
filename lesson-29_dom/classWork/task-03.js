
//if click on the mouse: create 'li' element in 'ul' and add text from 'input'


//get access to button
let buttonAnother = document.getElementById("toggle-button-2");
//get access to value of input
let inputText = document.getElementById("first-name");
//get acces to 'ul'
let ul = document.getElementById("ul-list");


// let inputText = document.getElementById("first-name").value;

buttonAnother.addEventListener('click', function () {


    //create li element
    let li = document.createElement("li");

    //set text from 'input' in 'li' element
    li.innerHTML = inputText.value;

    //added element 'li' in 'ul'
    ul.appendChild(li);

    //clear text in input
    inputText.value = '';


});