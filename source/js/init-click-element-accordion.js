const infoItem = document.querySelectorAll('.faq__item');
const button = document.querySelector('faq__button');

export function initClickElementAccordion() {

  if (!infoItem || infoItem.length === 0 || button) {
    return;
  }

  infoItem.forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target.classList.contains(button)) {
        return;
      }
      const buttons = el.querySelectorAll('.faq__button');
      buttons.forEach((btn) => {
        btn.click();
      });
    });
  });
}
