function stickyHeader() {
  let prevScrollPos = window.pageYOffset;

  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;
    const header = document.querySelector('.header');

    if (!header) {
      return;
    }

    if (prevScrollPos > currentScrollPos) {
      header.style.top = '0';
    } else {
      header.style.top = '-100px';
    }

    prevScrollPos = currentScrollPos;
  };
}
export {stickyHeader};
