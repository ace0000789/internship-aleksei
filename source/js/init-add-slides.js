export function initAddSlides() {
  function copyLastSlides() {
    const windowWidth = window.innerWidth;
    const slider = document.querySelector('.news__slider');
    const slidesWrapper = slider.querySelector('.news__list');
    const slides = slidesWrapper.querySelectorAll('.swiper-slide');

    if (!windowWidth || !slider || !slidesWrapper || !slides) {
      return;
    }

    slidesWrapper.querySelectorAll('.copied-slide').forEach((slide) => {
      slide.remove();
    });

    if (windowWidth >= 768 && windowWidth <= 1439) {

      const lastSlide1 = slides[slides.length - 2].cloneNode(true);
      const lastSlide2 = slides[slides.length - 1].cloneNode(true);

      lastSlide1.classList.add('copied-slide');
      lastSlide2.classList.add('copied-slide');

      slidesWrapper.appendChild(lastSlide1);
      slidesWrapper.appendChild(lastSlide2);
    }
  }

  window.addEventListener('DOMContentLoaded', copyLastSlides);
  window.addEventListener('resize', copyLastSlides);
}
