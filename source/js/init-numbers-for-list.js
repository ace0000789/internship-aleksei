export function initNumbersForList() {
  const listItems = document.querySelectorAll('.grant__item');

  if (!listItems.length) {
    return;
  }

  let number = 1;
  listItems.forEach((el)=> {
    const span = el.querySelector('.grant__number');
    span.innerText = number;
    number++;
  });
}
