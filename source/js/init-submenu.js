export function initSubMenu() {
  const subButtons = document.querySelectorAll('[data-validate="header-subbutton"]');
  const subMenus = document.querySelectorAll('[data-validate="header-submenu"]');

  subButtons.forEach((subButton, index) => {
    subButton.removeEventListener('click', () => {
      subMenuToggle(index);
    });

    subButton.addEventListener('click', () => {
      subMenuToggle(index);
    });
  });

  function subMenuToggle(index) {
    const subMenu = subMenus[index];
    subMenu.classList.toggle('header__submenu-is-open');
    subMenu.classList.toggle('header__submenu-is-close');
  }
}
