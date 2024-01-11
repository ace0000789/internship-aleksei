export function initSubMenuProg() {
  const subButtonProg = document.querySelector('[data-validate="header-subbutton-prog"]');
  const subMenuProg = document.querySelector('[data-validate="header-submenu-prog"]');

  if (!subButtonProg || !subMenuProg) {
    return;
  }

  subButtonProg.addEventListener('click', toggleSubMenu);

  function toggleSubMenu() {
    if (subMenuProg.classList.contains('header__submenu-is-close')) {
      subMenuProg.classList.remove('header__submenu-is-close');
      subMenuProg.classList.add('header__submenu-is-open');
    } else {
      subMenuProg.classList.remove('header__submenu-is-open');
      subMenuProg.classList.add('header__submenu-is-close');
    }
  }
}
