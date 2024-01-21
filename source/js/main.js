// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
//import 'swiper/css';

import { stickyHeader } from './stiky-header';
import { initMenu } from './init-menu';
import { initAccordions } from './init-accordion';
import { initHeroSlider } from'./init-hero-slider';
import { initModals } from './modules/modals/init-modals';
import { Form } from './modules/form-validate/form';

window.addEventListener('DOMContentLoaded', () => {

  //iosVhFix();
  stickyHeader();
  initMenu();
  initAccordions();
  initHeroSlider();


  window.addEventListener('load', () => {
    initModals();

    const form = new Form();
    window.form = form;
    form.init();
  });
});
