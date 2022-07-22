"use strict";

// import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Swiper } from 'swiper'
// const swiper = new Swiper('.swiper', {
//   slidesPerView: 1,
//   slidesPerColumn: 1,
//   spaceBetween: 0,
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });

/**
 * mainMenuTrigger - показ и скрытие мобльного меню
 */
var mainMenuTrigger = function mainMenuTrigger() {
  var menuTrigger = document.querySelector('.js-menuTrigger');
  var menuMove = document.querySelector('.js-menuMove'); // new

  var mobileMenu = document.querySelector('.js-mobileMenu');
  var mobileShadow = document.querySelector('.js-mobileShadow');

  var toggleMenu = function toggleMenu() {
    menuTrigger.classList.toggle('change');
    mobileMenu.classList.toggle('active');
    mobileShadow.classList.toggle('active');
    document.getElementsByTagName('body')[0].classList.toggle('scroll-less');
  };

  menuTrigger.addEventListener('click', toggleMenu);
  mobileShadow.addEventListener('click', toggleMenu);
};

mainMenuTrigger();
//# sourceMappingURL=script.js.map