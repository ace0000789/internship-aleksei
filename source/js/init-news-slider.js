import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

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
        return `<button type="button" class="${className}">${index + 1}</button>`;
      },
    },
    slidesPerView: 'auto',
    slidesPerGroup: 1,
    spaceBetween: 32,
  });


  return {
    sliderMySlider,
  };
}

export {initNewsSlider};
