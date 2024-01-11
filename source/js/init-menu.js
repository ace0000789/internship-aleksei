export function initMenu() {
  const header = document.querySelector('[data-validate="header"]');
  const headerButton = document.querySelector('[data-validate="header-button"]');
  const html = document.querySelector('[data-validate="html"]');
  const subMenu = document.querySelectorAll('[data-validate="header-submenu"]');

  if (!header || !headerButton) {
    return;
  }

  headerButton.addEventListener('click', toggleHeader);

  function toggleHeader() {
    if (header.classList.contains('is-closed')) {
      header.classList.remove('is-closed');
      header.classList.add('is-opened');
      html.classList.add('scroll-lock');
    } else {
      header.classList.add('is-closed');
      header.classList.remove('is-opened');
      html.classList.remove('scroll-lock');
      test();
    }
  }

  function test() {
    subMenu.forEach((el) => {
      el.classList.add('header__submenu-is-close');
      el.classList.remove('header__submenu-is-open');
    });
  }
}
