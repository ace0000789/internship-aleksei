import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';

function initProgramsSlider() {
  const programSleder = document.querySelector('[data-validate="swiper-programs"]');
  const nextSlide = document.querySelector('[data-validate="swiper-programs-next"]');
  const prevSlide = document.querySelector('[data-validate="swiper-programs-prev"]');
  const scroll = document.querySelector('[data-validate="swiper-programs-scrollbar"]');

  const sliderMySlider = new Swiper(programSleder, {
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
    autoHeight: true,
    loop: false,
    breakpoints: {
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: false,
        simulateTouch: false,
        spaceBetween: 32,
        watchSlidesProgress: true,
      },
      768: {
        simulateTouch: true,
        slidesPerView: 2,
        spaceBetween: 30,
        scrollbar: {
          dragSize: 324,
        },
        watchSlidesProgress: true,
      },
      0: {
        simulateTouch: true,
        slidesPerView: 1,
        spaceBetween: 40,
        centeredSlides: true,
        watchSlidesProgress: true,
      },
    },
  });

  return {
    sliderMySlider
  };
}

export { initProgramsSlider };
