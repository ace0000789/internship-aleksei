import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';

function initProgramsSlider() {
  const sliderMySlider = new Swiper('[data-validate="swiper-programs"]', {
    modules: [Navigation, Scrollbar],

    navigation: {
      nextEl: '[data-validate="swiper-programs-next"]',
      prevEl: '[data-validate="swiper-programs-prev"]',
    },

    scrollbar: {
      el: '[data-validate="swiper-programs-scrollbar"]',
      hide: false,
      dragSize: 392,
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
        watchSlidesProgress: true,
      },
      768: {
        simulateTouch: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        watchSlidesProgress: true,
      },
      0: {
        simulateTouch: true,
        slidesPerView: 1,
        watchSlidesProgress: true,
      },
    },
  });

  return {
    sliderMySlider
  };
}

export { initProgramsSlider };
