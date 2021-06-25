'use strict';

$('.headSlider').slick({

    prevArrow: '<div class="itemNav__arrow itemNav__arrow_left"></div>',    // навигация стрелки
    nextArrow: '<div class="itemNav__arrow"></div>',

    appendArrows: $('.sliderItem__nav'),

    dots: true,
    appendDots: $('.itemNav__bullets'),

    autoplay: true,
    autoplaySpeed: 3500
});