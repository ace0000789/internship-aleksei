export function initSubMenu() {
  const subButtons = document.querySelectorAll('[data-validate="header-subbutton"]');
  const subMenus = document.querySelectorAll('[data-validate="header-submenu"]');

  if (!subButtons || !subMenus) {
    return;
  }

  subButtons.forEach((subButton, index) => {
    const subMenu = subMenus[index]; // Получаем соответствующий subMenu по индексу

    subButton.addEventListener('click', () => {
      subMenuToggle(subMenu);
    });
  });

  function subMenuToggle(subMenu) {
    subMenu.classList.toggle('header__submenu-is-open');
    subMenu.classList.toggle('header__submenu-is-close');
  }
}
