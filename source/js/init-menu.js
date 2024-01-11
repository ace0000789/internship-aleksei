export function initMenu() {
  const header = document.querySelector('[data-validate="header"]');
  const headerButton = document.querySelector('[data-validate="header-button"]');
  const wrapper = document.querySelector('[data-validate="wrapper"]');
  const html = document.querySelector('[data-validate="html"]');

  if (!header || !headerButton || !wrapper) {
    return;
  }

  headerButton.addEventListener('click', toggleHeader);

  function toggleHeader() {
    if (header.classList.contains('is-closed')) {
      header.classList.remove('is-closed');
      header.classList.add('is-opened');
      wrapper.classList.add('is-bg');
      html.classList.add('scroll-lock');
    } else {
      header.classList.add('is-closed');
      header.classList.remove('is-opened');
      wrapper.classList.remove('is-bg');
      html.classList.remove('scroll-lock');
    }
  }
}
