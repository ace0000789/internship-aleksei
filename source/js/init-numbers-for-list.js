export function initNumbersForList() {

  const listItems = document.querySelectorAll('.grant__item');
  let number = 1;
  listItems.forEach((el)=> {
    const span = el.querySelector('.grant__number');
    span.innerText = number;
    number++;
  });

}
