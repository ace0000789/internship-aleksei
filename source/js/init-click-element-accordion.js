const infoItem = document.querySelectorAll('.faq__item');

export function initClickElementAccordion() {

  if (!infoItem || infoItem.length === 0) {
    return;
  }

  infoItem.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains('faq__button')) {
        return;
      }
      const buttons = el.querySelectorAll('.faq__button');
      buttons.forEach((btn) => {
        btn.click();
      });
    });
  });
}
