import Swiper from 'swiper';
import {Autoplay, Controller, Pagination} from 'swiper/modules';

function initHeroSlider() {
  const sliderOne = new Swiper('[data-validate="swiper-hero"]', {
    modules: [Autoplay, Controller],

    autoplay: {
      delay: 3000,
    },

    grabCursor: true,
    autoHeight: true,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: false,
        simulateTouch: false,
      },
      768: {
        simulateTouch: true,
      },
    },
  });

  const sliderTwo = new Swiper('[data-validate="swiper-hero-pag-one"]', {
    modules: [Controller, Pagination],
    loop: true,

    pagination: {
      el: '[data-validate="swiper-hero-pagination-one"]',
      clickable: true,
      renderBullet(index, className) {
        return `<button class="${className}" type="button"><span class="visually-hidden">bullet.</span></button>`;
      },
    },
  });

  const sliderThree = new Swiper('[data-validate="swiper-hero-pag-two"]', {
    modules: [Controller, Pagination],
    loop: true,

    pagination: {
      el: '[data-validate="swiper-hero-pagination-two"]',
      clickable: true,
      renderBullet(index, className) {
        return `<button class="${className}" type="button"><span class="visually-hidden">bullet.</span></button>`;
      },
    },
  });

  const sliderFour = new Swiper('[data-validate="swiper-hero-pag-three"]', {
    modules: [Controller, Pagination],
    loop: true,

    pagination: {
      el: '[data-validate="swiper-hero-pagination-three"]',
      clickable: true,
      renderBullet(index, className) {
        return `<button class="${className}" type="button"><span class="visually-hidden">bullet.</span></button>`;
      },
    },
  });

  sliderOne.controller.control = [sliderTwo, sliderThree, sliderFour];
  sliderTwo.controller.control = sliderOne;
  sliderThree.controller.control = sliderOne;
  sliderFour.controller.control = sliderOne;

  return {
    sliderOne,
    sliderTwo,
    sliderThree,
    sliderFour
  };
}

export { initHeroSlider };
