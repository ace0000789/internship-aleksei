export function initSubMenuNews() {
  const subButtonNews = document.querySelector('[data-validate="header-subbutton-news"]');
  const subMenuNews = document.querySelector('[data-validate="header-submenu-news"]');

  if (!subButtonNews || !subMenuNews) {
    return;
  }

  subButtonNews.addEventListener('click', toggleSubMenu);

  function toggleSubMenu() {
    if (subMenuNews.classList.contains('header__submenu-is-close')) {
      subMenuNews.classList.remove('header__submenu-is-close');
      subMenuNews.classList.add('header__submenu-is-open');
    } else {
      subMenuNews.classList.remove('header__submenu-is-open');
      subMenuNews.classList.add('header__submenu-is-close');
    }
  }
}
