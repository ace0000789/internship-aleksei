function stickyHeader() {
  let prevScrollPos = window.pageYOffset;

  window.onscroll = function() {
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      document.querySelector('.header').style.top = '0';
    } else {
      document.querySelector('.header').style.top = '-100px';
    }

    prevScrollPos = currentScrollPos;
  };
}
export {stickyHeader};
