//=include ../components/header/header.js
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qcyIsIm1haW4uanMiLCIuLi9jb21wb25lbnRzL21haW4vbWFpbi5qcyIsIi4uL2NvbXBvbmVudHMvbWFpbi1saXN0L21haW4tbGlzdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBRGhDQTtBRUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBRnBKQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIiLCIvLz1pbmNsdWRlIC4uL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5qc1xyXG4vLz1pbmNsdWRlIC4uL2NvbXBvbmVudHMvbWFpbi9tYWluLmpzXHJcbi8vPWluY2x1ZGUgLi4vY29tcG9uZW50cy9tYWluLWxpc3QvbWFpbi1saXN0LmpzXHJcbiIsIi8qbWFpbi1zbGlkZXIqL1xyXG4kKCcubWFpbl9fc3Rvcnktc2xpZGVyJykuc2xpY2soe1xyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBwcmV2QXJyb3c6IFwiLm1haW5fX3ByZXZpb3VzLWFycm93XCIsXHJcbiAgICBuZXh0QXJyb3c6IFwiLm1haW5fX25leHQtYXJyb3dcIixcclxuICAgIC8vZmFkZTogdHJ1ZSxcclxuICAgIGFzTmF2Rm9yOiAnLm1haW5fX2ltYWdlLXNsaWRlcidcclxufSk7XHJcbiQoJy5tYWluX19pbWFnZS1zbGlkZXInKS5zbGljayh7XHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgIGFzTmF2Rm9yOiAnLm1haW5fX3N0b3J5LXNsaWRlcicsXHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgZG90czogZmFsc2UsXHJcbiAgICAvL2ZvY3VzT25TZWxlY3Q6IHRydWVcclxufSk7IiwiJCgnLm1haW4tbGlzdF9fc2xpZGVyLWJveCcpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBwcmV2QXJyb3c6IFwiLm1haW4tbGlzdF9fcHJldmlvdXMtYXJyb3dcIixcclxuICAgIG5leHRBcnJvdzogXCIubWFpbi1saXN0X19uZXh0LWFycm93XCIsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgcmVzcG9uc2l2ZTogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTU5OSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc1cHgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTE5OSxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcclxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICcwcHgnXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjMsXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogNjM5LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBdXHJcbn0pO1xyXG5cclxuLypfX19fX19fX19fX19fX0hJVC1TTElERVJfX19fX19fX19fXyovXHJcblxyXG4kKCcubWFpbi1saXN0X19zbGlkZXItYm94LWhpdCcpLnNsaWNrKHtcclxuICAgIHNsaWRlc1RvU2hvdzogNSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBhcnJvd3M6IHRydWUsXHJcbiAgICBwcmV2QXJyb3c6IFwiLm1haW4tbGlzdF9fcHJldmlvdXMtYXJyb3ctaGl0XCIsXHJcbiAgICBuZXh0QXJyb3c6IFwiLm1haW4tbGlzdF9fbmV4dC1hcnJvdy1oaXRcIixcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICByZXNwb25zaXZlOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxNTk5LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzVweCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiAxMTk5LFxyXG4gICAgICAgICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxyXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzBweCdcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyMyxcclxuICAgICAgICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0se1xyXG4gICAgICAgICAgICBicmVha3BvaW50OiA2MzksXHJcbiAgICAgICAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF1cclxufSk7Il19
