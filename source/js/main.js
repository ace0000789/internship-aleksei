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

import { initProgramsSlider } from './init-programs-slider'

window.addEventListener('DOMContentLoaded', () => {

  //iosVhFix();
  stickyHeader();
  initMenu();
  initAccordions();
  initHeroSlider();
  initProgramsSlider();


  window.addEventListener('load', () => {
    initModals();

    const select = new CustomSelect();
    select.init();

    const form = new Form();
    window.form = form;
    form.init();
  });
});
/*
//.forEach() // метод перебора массива

const fruits = ['banana', 'apple', 'lemon', 'orange'];
fruits.forEach((value) => {
  console.log(value);
});

//.map() // Метод преобразования массива в другой (callback)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const squares = nums.map(function (z) {
  return z * z
})
console.log(squares)


const titles = ['Die hard', 'Terminator']; // find - метод поиска в массиве
const favoriteFilmTitle = titles.find((title) => title.includes('hard'));
console.log(favoriteFilmTitle); // 'Die hard'

const numbers = [11, 12, 13, 15, 100]; // метод every проверяет если все элементы соответствуеют условию вернет true
const isEveryNumberOverTen = numbers.every((value) => {
  return value > 10;
});
console.log(isEveryNumberOverTen);


const array1 = [1, 2, 3, 4]; // reduce -- перебирает массив (cумма)
const initialValue = 0;
const sumWithInitial = array1.reduce(
(accumulato, currentValue) => accumulato + currentValue, initialValue
);
console.log(sumWithInitial);
*/
