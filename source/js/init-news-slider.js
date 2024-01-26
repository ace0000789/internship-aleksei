import Swiper from 'swiper';
import { Pagination, Navigation } from 'swiper/modules';

function initNewsSlider() {
  const sliderMySlider = new Swiper('[data-validate="swiper-news"]', {
    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '[data-validate="swiper-news-next"]',
      prevEl: '[data-validate="swiper-news-prev"]',
    },
    centeredSlides: false,
    slidesPerGroup: 1, // Исправлено на slidesPerGroup: 1
    pagination: {
      el: '[data-validate="swiper-news-pagination"]',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button type="button" class="${className}">${index + 1}</button>`;
      },
    },
    speed: 700,
    grabCursor: true,
    autoHeight: true,
    loop: false,
    breakpoints: {
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        spaceBetween: 32,
      },
      768: {
        
      },
      320: {
        slidesPerGroup: 2,
      },
    },
  });

  return {
    sliderMySlider,
  };
}

export { initNewsSlider }
