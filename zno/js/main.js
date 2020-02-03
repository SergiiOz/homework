// scroll to 'main' section
let btnScroll = document.getElementsByClassName('js-btn-scroll')[0];
let main = document.getElementsByClassName('js-main')[0];

btnScroll.addEventListener('click', function () {
    main.scrollIntoView({ behavior: "smooth" });
});