'use strict';


/**
 * menu
 */

const menu = document.querySelector('.header__menu ');
const showMenu = document.querySelector('.navBar__menu');
const overlay = document.querySelector('.overlay');

showMenu.addEventListener('click', function () {
    menu.classList.remove('_hidden');
    overlay.classList.remove('_hidden');
});

overlay.addEventListener('click', function () {
    menu.classList.add('_hidden');
    overlay.classList.add('_hidden');
});


/** 
 * accordion
 */

 const questionUnits = [].slice.call(document.querySelectorAll('.accordionItem'),0);  // corrected for IE

 questionUnits.forEach(function(question) {
     question.addEventListener('click', function () {
         this.classList.toggle('_activeQuestion');
     })
 });
 

 /** 
  * scroll
  */

  $(function(){
    $('.hero__button').on('click', function(event) {
      event.preventDefault();
      
      var sc = $(this).attr("href"),
          dn = $(sc).offset().top;
    //   /*
    //   * sc - в переменную заносим информацию о том, к какому блоку надо перейти
    //   * dn - определяем положение блока на странице
    //   */
      
      $('html, body').animate({scrollTop: dn}, 2300);
      
    });
  });
