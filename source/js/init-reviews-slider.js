import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';

function initReviewsSlider() {
  const sliderMySlider = new Swiper('[data-validate="swiper-reviews"]', {
    modules: [Navigation, Scrollbar],
    navigation: {
      nextEl: '[data-validate="swiper-reviews-next"]',
      prevEl: '[data-validate="swiper-reviews-prev"]',
    },

    scrollbar: {
      el: '[data-validate="swiper-reviews-scrollbar"]',
      hide: false,
      dragSize: 392,
    },

    grabCursor: true,
    autoHeight: true,
    loop: false,
    breakpoints: {
      1440: {
        slidesPerView: 2,
        slidesPerGroup: 1,
        simulateTouch: false,
        spaceBetween: 32,
        watchSlidesProgress: true,
      },
      768: {
        simulateTouch: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        scrollbar: {
          dragSize: 324,
        },
        watchSlidesProgress: true,
      },
      0: {
        simulateTouch: true,
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        watchSlidesProgress: true,
      },
    },
  });

  return {
    sliderMySlider
  };
}

export { initReviewsSlider };
