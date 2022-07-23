"use strict";

// import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import { Swiper } from 'swiper'
new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); // {
//   const swiper = new Swiper('.swiper', {
//     slidesPerView: 1,
//     slidesPerColumn: 1,
//     spaceBetween: 0,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
//   });
//   console.log(swiper);
// }

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

var showElement = function showElement() {
  var buttonServices = document.querySelector('.js-showList');
  var serviceCards = document.querySelectorAll('.services-operation__item-hidden');

  var showList = function showList() {
    serviceCards.forEach(function (card) {
      return card.classList.remove('services-operation__item-hidden');
    });
    buttonServices.classList.add('services-operation__hidden');
  };

  buttonServices.addEventListener('click', showList);
};

showElement();
//# sourceMappingURL=script.js.map
