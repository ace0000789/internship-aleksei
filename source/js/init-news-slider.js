import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';

const swiperNews = document.querySelector('[data-validate="swiper-news"]');
const buttonNext = document.querySelector('[data-validate="swiper-news-next"]');
const buttonPrev = document.querySelector('[data-validate="swiper-news-prev"]');
const paginationSlider = document.querySelector('[data-validate="swiper-news-pagination"]');

function initNewsSlider() {
  const sliderMySlider = new Swiper(swiperNews, {
    modules: [Navigation, Pagination, Grid],
    navigation: {
      nextEl: buttonNext,
      prevEl: buttonPrev,
    },

    pagination: {
      el: paginationSlider,
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
        watchSlidesProgress: true,
        grid: false,
      },
      768: {
        watchSlidesProgress: true,
        slidesPerView: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
        }
      },
      0: {
        watchSlidesProgress: true,
        slidesPerView: 1,
        spaceBetween: 20,
        grid: {
          rows: 2,
        },
      },
    },
  });

  return {
    sliderMySlider,
  };
}

export {initNewsSlider};
