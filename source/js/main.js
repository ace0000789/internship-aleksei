// https://swiperjs.com/get-started#installation
// import Swiper from "swiper";
// import {Navigation, Pagination} from "swiper/modules";
//import 'swiper/css';

import { stickyHeader } from './stiky-header';
import { initMenu } from './init-menu';
import { initSubMenuProg } from './init-submenu-prog';

window.addEventListener('DOMContentLoaded', () => {

  //iosVhFix();
  stickyHeader();
  initMenu();
  initSubMenuProg();
  window.addEventListener('load', () => {
    // const form = new Form();
    // window.form = form;
    //form.init();
  });
});
