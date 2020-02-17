$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        speed: 3000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        // prevArrow: $('.btn-icon-arrow__slider-prev'), //use my custom icon
        // nextArrow: $('.btn-icon-arrow__slider-next'), //use my custom icom

    });

});


// scroll to 'main' section
let btnScroll = document.getElementsByClassName('js-btn-scroll')[0];
let main = document.getElementsByClassName('js-main')[0];

btnScroll.addEventListener('click', function () {
    main.scrollIntoView({ behavior: "smooth" });
});
