
// get acced to #parent
let parents = document.getElementById("parent");

//show in console, content 'text'
for (let i = 0; i < parents.children.length; i++) {
    console.log(parents.children[i].textContent);
}

//get access to contant with class name "text"
let text = document.getElementsByClassName("text");



//change color text, where was class 'text'
for (let i = 0; i < text.length; i++) {
    text[i].style.color = 'red';
}