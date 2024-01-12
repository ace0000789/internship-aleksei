// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
//import 'swiper/css';

import { stickyHeader } from './stiky-header';
import { initMenu } from './init-menu';
import { initAccordions } from './init-accordion';

window.addEventListener('DOMContentLoaded', () => {

  //iosVhFix();
  stickyHeader();
  initMenu();
  initAccordions();



  window.addEventListener('load', () => {
    // const form = new Form();
    // window.form = form;
    //form.init();
  });
});
