export function initSubMenu() {

  const subButton = document.querySelector('[data-validate="header-subbutton"]');
  const subMenu = document.querySelector('[data-validate="header-submenu"]');


  subButton.addEventListener('click', subMenuToggle);

  function subMenuToggle() {
    if (subMenu.classList.contains('header__submenu-is-close')) {
      subMenu.classList.remove('header__submenu-is-close');
      subMenu.classList.add('header__submenu-is-open');
    } else {
      subMenu.classList.add('header__submenu-is-close');
      subMenu.classList.remove('header__submenu-is-open');
    }
  }
}
