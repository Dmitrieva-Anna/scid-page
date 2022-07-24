new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})

/**
 * mainMenuTrigger - показ и скрытие мобильного меню
 */
const mainMenuTrigger = () => {
  const menuTrigger = document.querySelector('.js-menuTrigger');
  const menuMove = document.querySelector('.js-menuMove');

  const mobileMenu = document.querySelector('.js-mobileMenu');
  const mobileShadow = document.querySelector('.js-mobileShadow');

  const toggleMenu = () => {
    menuTrigger.classList.toggle('change')
    mobileMenu.classList.toggle('active');
    mobileShadow.classList.toggle('active');
    document.getElementsByTagName('body')[0].classList.toggle('scroll-less')
  }

  menuTrigger.addEventListener('click', toggleMenu);
  mobileShadow.addEventListener('click', toggleMenu);
}

mainMenuTrigger();

const showElement = () => {
  const buttonServices = document.querySelector('.js-showList');
  const serviceCards = document.querySelectorAll('.services-operation__item-hidden');

  const showList = () => {
    serviceCards.forEach(card => card.classList.remove('services-operation__item-hidden'));
    buttonServices.classList.add('services-operation__hidden');
  }

  buttonServices.addEventListener('click', showList);
}

showElement();
