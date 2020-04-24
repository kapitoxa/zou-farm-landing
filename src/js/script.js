document.addEventListener('DOMContentLoaded', function() {
    $('.testimnonials__wrapper').slick({
        speed: 1000,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        prevArrow: '.testimnonials__control_left',
        nextArrow: '.testimnonials__control_right'
    });

    $('.how-it-works__info').slick({
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        swipeToSlide: true,
        arrows: false,
        dots: true,
        dotsClass: 'how-it-works__steps',
        appendDots: $('.how-it-works__navigation'),
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data();   
            return `0${i + 1}`;
        }
    });
});