export function initSubMenu() {

  const subButton = document.querySelector('[data-validate="header-subbutton"]');
  const subMenu = document.querySelector('[data-validate="header-submenu"]');

  subButton.addEventListener('click', () => {
    subMenu.classList.add('header__submenu-is-open');
  });

  document.addEventListener('click', (event) => {
    if (!subButton.contains(event.target) && !subMenu.contains(event.target)) {
      subMenu.classList.remove('header__submenu-is-open');
    }
  });


  
}
