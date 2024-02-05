import { stickyHeader } from './stiky-header';
import { initMenu } from './init-menu';
import { initAccordions } from './init-accordion';
import { initHeroSlider } from'./init-hero-slider';
import { initModals } from './modules/modals/init-modals';
import { scrollLock } from './utils/scroll-lock';
import { Form } from './vendor/form-validate/form';
import { CustomSelect } from './vendor/custom-select/custom-select';
import { initProgramsSlider } from './init-programs-slider';
import { initTabsNews } from './init-tabs-news';
import { initNewsSlider } from './init-news-slider';
import { initAddSlides } from './init-add-slides';
import { initClickElementAccordion } from './init-click-element-accordion';
import { initReviewsSlider } from './init-reviews-slider';

window.addEventListener('DOMContentLoaded', () => {

  //iosVhFix();
  initHeroSlider();
  initNewsSlider();
  initAddSlides();
  initReviewsSlider();
  initProgramsSlider();

  window.addEventListener('load', () => {
    stickyHeader();
    scrollLock();
    initClickElementAccordion();
    initAccordions();
    initModals();
    initMenu();
    initTabsNews();


    const select = new CustomSelect();
    select.init();

    const form = new Form();
    window.form = form;
    form.init();
  });
});
