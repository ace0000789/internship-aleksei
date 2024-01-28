// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
//import 'swiper/css';

import { stickyHeader } from './stiky-header';
import { initMenu } from './init-menu';
import { initAccordions } from './init-accordion';
import { initHeroSlider } from'./init-hero-slider';
import { initModals } from './modules/modals/init-modals';
import { Form } from './vendor/form-validate/form';
import { CustomSelect } from './vendor/custom-select/custom-select';
import { initProgramsSlider } from './init-programs-slider';
import { initNumbersForList } from './init-numbers-for-list';
import { initTabsNews } from './init-tabs-news';
import { initNewsSlider } from './init-news-slider';
import { initAddSlides } from './init-add-slides';


window.addEventListener('DOMContentLoaded', () => {

  //iosVhFix();
  stickyHeader();
  initMenu();
  initAccordions();
  initHeroSlider();
  initProgramsSlider();
  initNumbersForList();
  initTabsNews();
  initNewsSlider();
  initAddSlides();

  window.addEventListener('load', () => {
    initModals();

    const select = new CustomSelect();
    select.init();

    const form = new Form();
    window.form = form;
    form.init();
  });
});
