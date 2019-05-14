/*main-slider*/
$('.main__story-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".main__previous-arrow",
    nextArrow: ".main__next-arrow",
    //fade: true,
    asNavFor: '.main__image-slider'
});
$('.main__image-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.main__story-slider',
    arrows: false,
    dots: false,
    //focusOnSelect: true
});