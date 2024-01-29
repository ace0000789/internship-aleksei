import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';

function initReviewsSlider() {
  const reviewsSlider = document.querySelector('[data-validate="swiper-reviews"]');
  const nextSlide = document.querySelector('[data-validate="swiper-reviews-next"]');
  const prevSlide = document.querySelector('[data-validate="swiper-reviews-prev"]');
  const scroll = document.querySelector('[data-validate="swiper-reviews-scrollbar"]');

  const sliderMySlider = new Swiper(reviewsSlider, {
    modules: [Navigation, Scrollbar],
    navigation: {
      nextEl: nextSlide,
      prevEl: prevSlide,
    },

    scrollbar: {
      el: scroll,
      hide: false,
      dragSize: 392,
    },

    grabCursor: true,
    autoHeight: false,
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
        autoHeight: true,
      },
    },
  });

  return {
    sliderMySlider
  };
}

export { initReviewsSlider };
