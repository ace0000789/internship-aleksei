import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';

function initProgramsSlider() {
  const sliderMySlider = new Swiper('[data-validate="swiper-programs"]', {
    modules: [Navigation],

    navigation: {
      nextEl: '[data-validate="swiper-programs-next"]',
      prevEl: '[data-validate="swiper-programs-prev"]',
    },

    grabCursor: true,
    autoHeight: true,
    loop: false,
    breakpoints: {
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: false,
        simulateTouch: false,
        spaceBetween: 32,
      },
      768: {
        simulateTouch: true,
        slidesPerView: 2,
      },
      0: {
        simulateTouch: true,
        slidesPerView: 1,
      },
    },
  });

  return {
    sliderMySlider
  };
}

export { initProgramsSlider };
