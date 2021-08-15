'use strict';

$('.slider').slick({

  prevArrow: '<div class="slideArrow prevArrow"></div>', 
  nextArrow: '<div class="slideArrow nextArrow"></div>',

  dots: true,
  customPaging: function (slider, i) {
    var title = $(slider.$slides[i]).data('title');
    return '<a class="pager__item"> ' + title + ' </a>';
  },

  autoplay: true,
  autoplaySpeed: 3500,
  speed: 1500
  
});