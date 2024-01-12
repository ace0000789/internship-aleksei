import Swiper from 'swiper';
import {Pagination, Autoplay} from 'swiper/modules';

function initHeroSlider() {
  const myImageSlider = new Swiper('[data-validate="swiper-hero"]', {
    modules: [Pagination, Autoplay],

    pagination: {
      el: '[data-validate="swiper-hero-pagination"]',
      clickable: true,
      renderBullet(index, className) {
        return `<button class="${className}" type="button"><span class="visually-hidden">bullet.</span></button>`;
      },
    },
    /*
    autoplay: {
      delay: 3000,
    },
    */
    grabCursor: true,
    autoHeight: true,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: false,
        simulateTouch: true, /// Отключить !!!!!!!!!!
      },
      768: {
        simulateTouch: true,

      },

      0: {

      },
    },
  });
  return myImageSlider;
}

export { initHeroSlider };
