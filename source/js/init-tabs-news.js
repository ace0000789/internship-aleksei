import {Tabs} from './vendor/tabs';

let tabs;

const initTabsNews = () => {
  tabs = new Tabs();
  // Используйте в разработке экспортируемую переменную tabs, window сделан для бэкэнда
  window.tabs = tabs;
};

export {initTabsNews, tabs};
