
let lengthGallery = $('.gallery__item').length;

//count click
let count = 0;

//button next
$('.js-button__2').on('click', function () {

    if (count < lengthGallery - 1) {
        count++;
    } else {
        count = 0;
    }

    $('.gallery').css('transform', `translateX(${-400 * count}px)`);
});


//button prev
$('.js-button__1').on('click', function () {

    if (count != 0) {
        count--;
    } else {
        count = lengthGallery - 1;
    }

    $('.gallery').css('transform', `translateX(${-400 * count}px)`);
});

