export function initMenu() {
  const header = document.querySelector('[data-validate="header"]');
  const headerButton = document.querySelector('[data-validate="header-button"]');
  const html = document.querySelector('[data-validate="html"]');

  if (!header || !headerButton || !html) {
    return;
  }

  headerButton.addEventListener('click', toggleHeader);
  html.addEventListener('click', closeMenu);

  function toggleHeader() {
    if (header.classList.contains('is-closed')) {
      header.classList.remove('is-closed');
      header.classList.add('is-opened');
      html.classList.add('scroll-lock');
    } else {
      header.classList.add('is-closed');
      header.classList.remove('is-opened');
      html.classList.remove('scroll-lock');
    }
  }

  function closeMenu(event) {
    if (
      !event.target.closest('[data-validate="header-menu"]') &&
      !event.target.closest('[data-validate="header-button"]')
    ) {
      header.classList.add('is-closed');
      header.classList.remove('is-opened');
      html.classList.remove('scroll-lock');
    }
  }

}
