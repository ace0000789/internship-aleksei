import Swiper from 'swiper';
import {Autoplay, Controller, Pagination} from 'swiper/modules';

function initHeroSlider() {
  const sliderHero = document.querySelector('[data-validate="swiper-hero"]');

  const sliderPagOne = document.querySelector('[data-validate="swiper-hero-pag-one"]');
  const sliderPagTwo = document.querySelector('[data-validate="swiper-hero-pag-two"]');
  const sliderPagThree = document.querySelector('[data-validate="swiper-hero-pag-three"]');

  const paginationOne = document.querySelector('[data-validate="swiper-hero-pagination-one"]');
  const paginationTwo = document.querySelector('[data-validate="swiper-hero-pagination-two"]');
  const paginationThree = document.querySelector('[data-validate="swiper-hero-pagination-three"]');



  const sliderOne = new Swiper(sliderHero, {
    modules: [Autoplay, Controller],

    autoplay: {
      delay: 3000,
    },

    grabCursor: true,
    autoHeight: true,
    loop: true,
    breakpoints: {
      1200: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        centeredSlides: false,
        simulateTouch: false,
      },
      768: {
        simulateTouch: true,
      },
    },
  });

  const sliderTwo = new Swiper(sliderPagOne, {
    modules: [Controller, Pagination],
    loop: true,

    pagination: {
      el: paginationOne,
      clickable: true,
      renderBullet(index, className) {
        return `<button class="${className}" type="button"><span class="visually-hidden">bullet.</span></button>`;
      },
    },
  });

  const sliderThree = new Swiper(sliderPagTwo, {
    modules: [Controller, Pagination],
    loop: true,

    pagination: {
      el: paginationTwo,
      clickable: true,
      renderBullet(index, className) {
        return `<button class="${className}" type="button"><span class="visually-hidden">bullet.</span></button>`;
      },
    },
  });

  const sliderFour = new Swiper(sliderPagThree, {
    modules: [Controller, Pagination],
    loop: true,

    pagination: {
      el: paginationThree,
      clickable: true,
      renderBullet(index, className) {
        return `<button class="${className}" type="button"><span class="visually-hidden">bullet.</span></button>`;
      },
    },
  });

  sliderOne.controller.control = [sliderTwo, sliderThree, sliderFour];
  sliderTwo.controller.control = sliderOne;
  sliderThree.controller.control = sliderOne;
  sliderFour.controller.control = sliderOne;

  return {
    sliderOne,
    sliderTwo,
    sliderThree,
    sliderFour
  };
}

export { initHeroSlider };
