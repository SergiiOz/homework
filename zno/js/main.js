$(document).ready(function () {
    $('.slider').slick({
        autoplay: true,
        speed: 3000,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        // prevArrow: $('.btn-icon-arrow__slider-prev'), //use my custom icon
        // nextArrow: $('.btn-icon-arrow__slider-next'), //use my custom icom
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });

});


// scroll to 'main' section
let btnScroll = document.getElementsByClassName('js-btn-scroll')[0];
let main = document.getElementsByClassName('js-main')[0];

btnScroll.addEventListener('click', function () {
    main.scrollIntoView({ behavior: "smooth" });
});
