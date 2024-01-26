import Swiper from 'swiper';
import {Pagination, Navigation} from 'swiper/modules';

function initNewsSlider() {
  const sliderMySlider = new Swiper('[data-validate="swiper-news"]', {

    modules: [Navigation, Pagination],

    navigation: {
      nextEl: '[data-validate="swiper-news-next"]',
      prevEl: '[data-validate="swiper-news-prev"]',
    },

    pagination: {
      el: '[data-validate="swiper-news-pagination"]',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${ className }">${ index + 1 }</span>`;
      },
    },

    grabCursor: true,
    autoHeight: true,
    loop: false,
    breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: false,
        simulateTouch: false,
      },
      768: {
        simulateTouch: true,
      },
    },
  });


  return {
    sliderMySlider
  };
}

export { initNewsSlider };
