import Swiper from 'swiper';
import { Grid, Navigation, Pagination } from 'swiper/modules';

function initNewsSlider() {
  const sliderMySlider = new Swiper('[data-validate="swiper-news"]', {
    modules: [Navigation, Pagination, Grid],
    navigation: {
      nextEl: '[data-validate="swiper-news-next"]',
      prevEl: '[data-validate="swiper-news-prev"]',
    },

    pagination: {
      el: '[data-validate="swiper-news-pagination"]',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button type="button" class="${className}">${index + 1}</button>`;
      },
    },

    breakpoints: {
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 1,
        spaceBetween: 32,
      },
      768: {

        slidesPerView: 2,
        grid: {
          rows: 2,
        },
        spaceBetween: 30,
      },
      0: {

      },
    },
  });


  return {
    sliderMySlider,
  };
}

export {initNewsSlider};
