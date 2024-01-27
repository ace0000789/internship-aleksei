import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

function initNewsSlider() {
  const sliderMySlider = new Swiper('[data-swiper="news"]', {
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
        slidesPerView: 'auto',
        spaceBetween: 30,

        grid: {
          rows: 2,
        }
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


