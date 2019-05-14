$('.main-list__slider-box').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: ".main-list__previous-arrow",
    nextArrow: ".main-list__next-arrow",
    dots: true,
    responsive: [
        {
            breakpoint: 1599,
            settings: {
                slidesToShow: 4,
                centerPadding: '5px'
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                centerPadding: '0px'

            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
            }
        },{
            breakpoint: 639,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});

/*______________HIT-SLIDER___________*/

$('.main-list__slider-box-hit').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    prevArrow: ".main-list__previous-arrow-hit",
    nextArrow: ".main-list__next-arrow-hit",
    dots: true,
    responsive: [
        {
            breakpoint: 1599,
            settings: {
                slidesToShow: 4,
                centerPadding: '5px'
            }
        },
        {
            breakpoint: 1199,
            settings: {
                slidesToShow: 3,
                centerPadding: '0px'

            }
        },
        {
            breakpoint: 1023,
            settings: {
                slidesToShow: 2,
            }
        },{
            breakpoint: 639,
            settings: {
                slidesToShow: 1
            }
        }
    ]
});