// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
//import 'swiper/css';

import { stickyHeader } from './stiky-header';
import { initMenu } from './init-menu';
import { initSubMenu } from './init-submenu';

window.addEventListener('DOMContentLoaded', () => {

  //iosVhFix();
  stickyHeader();
  initMenu();
  initSubMenu();



  window.addEventListener('load', () => {
    // const form = new Form();
    // window.form = form;
    //form.init();
  });
});
