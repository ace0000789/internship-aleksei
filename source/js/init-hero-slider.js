import Swiper from 'swiper';
import {Autoplay, Controller, Pagination} from 'swiper/modules';

function initHeroSlider() {
  const sliderOne = new Swiper('[data-validate="swiper-hero"]', {
    modules: [Autoplay, Controller],
    /*
    autoplay: {
      delay: 3000,
    },
    */
    grabCursor: true,
    autoHeight: true,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: false,
        simulateTouch: true, /// Отключить !!!!!!!!!!
      },
      768: {
        simulateTouch: true,

      },

      0: {

      },
    },
  });

  const sliderTwo = new Swiper('[data-validate="swiper-hero-pag"]', {
    modules: [Controller, Pagination],
    loop: true,

    pagination: {
      el: '[data-validate="swiper-hero-pagination"]',
      clickable: true,
      renderBullet(index, className) {
        return `<button class="${className}" type="button"><span class="visually-hidden">bullet.</span></button>`;
      },
    },
  });

  sliderOne.controller.control = sliderTwo;
  sliderTwo.controller.control = sliderOne;

  return {
    sliderOne,
    sliderTwo
  };
}

export { initHeroSlider };
