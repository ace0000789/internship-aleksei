import Swiper from 'swiper/bundle';
import {Pagination, Navigation} from 'swiper/modules';

function initNewsSlider() {
  const sliderMySlider = new Swiper('[data-validate="swiper-news"]', {

    modules: [Navigation, Pagination],
    navigation: {
      nextEl: '[data-validate="swiper-news-next"]',
      prevEl: '[data-validate="swiper-news-prev"]',
    },
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    slidesPerGroup: 1,
    slidesPerView: 3,
    spaceBetween: 10,
    pagination: {
      el: '[data-validate="swiper-news-pagination"]',
      clickable: true,
      renderBullet: function (index, className) {
        return `<span class="${ className }">${ index + 1 }</span>`;
      },
    },
    speed: 700,
    grabCursor: true,
    autoHeight: true,
    loop: false,
    /*breakpoints: {
      1200: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: false,
        simulateTouch: false,
      },
      768: {
        simulateTouch: true,
      },
    },*/
  });


  return {
    sliderMySlider
  };
}

export { initNewsSlider };
