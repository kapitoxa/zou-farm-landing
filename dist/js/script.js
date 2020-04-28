document.addEventListener('DOMContentLoaded', function() {
    $('.testimnonials__wrapper').slick({
        speed: 1000,
        slidesToShow: 2,
        centerMode: true,
        variableWidth: true,
        swipeToSlide: true,
        prevArrow: '.testimnonials__control_left',
        nextArrow: '.testimnonials__control_right',
        responsive: [
            {
                breakpoint: 575,
                settings: {
                    dots: true,
                }
            }
        ]
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
            return `0${i + 1}`;
        }
    });

    const nav = document.querySelector('.header__nav');
    const hamburger = document.querySelector('.header__hamburger');

    hamburger.addEventListener('click', function() {
        if (nav.classList.contains('header__nav_active')) {
            document.body.style.overflow = '';
        } else {
            window.scrollTo(0, 0);
            document.body.style.overflow = 'hidden';
        }
        nav.classList.toggle('header__nav_active');
        hamburger.classList.toggle('header__hamburger_active');
    });

    const menuItems = document.querySelectorAll('.header__menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('header__nav_active');
            hamburger.classList.remove('header__hamburger_active');
        });
    });
});