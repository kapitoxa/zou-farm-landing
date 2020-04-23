document.addEventListener('DOMContentLoaded', function() {
    $('.testimnonials__wrapper').slick({
        speed: 1000,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        prevArrow: '.testimnonials__control_left',
        nextArrow: '.testimnonials__control_right'
    });
});