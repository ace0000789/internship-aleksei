import {iosChecker} from './ios-checker';

export class ScrollLock {
  constructor() {
    this._iosChecker = iosChecker;
    this._lockClass = this._iosChecker() ? 'scroll-lock-ios' : 'scroll-lock';
    this._scrollTop = null;
    this._fixedBlockElements = document.querySelectorAll('[data-fix-block]');
  }

  _getScrollbarWidth() {
    return window.innerWidth - document.documentElement.clientWidth;
  }

  _getBodyScrollTop() {
    return (
      self.pageYOffset ||
      (document.documentElement && document.documentElement.ScrollTop) ||
      (document.body && document.body.scrollTop)
    );
  }

  disableScrolling() {
    this._scrollTop = document.body.dataset.scroll = document.body.dataset.scroll ? document.body.dataset.scroll : this._getBodyScrollTop();
    if (this._getScrollbarWidth()) {
      document.body.style.paddingRight = `${this._getScrollbarWidth()}px`;
      this._fixedBlockElements.forEach((block) => {
        block.style.paddingRight = `${this._getScrollbarWidth()}px`;
      });
    }
    document.body.style.top = `-${this._scrollTop}px`;
    document.body.classList.add(this._lockClass);
  }

  enableScrolling() {
    document.body.classList.remove(this._lockClass);
    window.scrollTo(0, +document.body.dataset.scroll);
    document.body.style.paddingRight = null;
    document.body.style.top = null;
    this._fixedBlockElements.forEach((block) => {
      block.style.paddingRight = null;
    });
    document.body.removeAttribute('data-scroll');
    this._scrollTop = null;
  }
}

window.scrollLock = new ScrollLock();


export function scrollLock() {
  // Получаем элементы <body> и <html>
  const bodyElement = document.querySelector('body');
  const htmlElement = document.querySelector('html');

  // Создаем новый наблюдатель мутаций
  const observer = new MutationObserver((mutationsList) => {
    for (const mutation of mutationsList) {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        // Проверяем, содержит ли класс 'scroll-lock'
        const hasScrollLockClass = bodyElement.classList.contains('scroll-lock');

        // Добавляем или удаляем класс 'scroll-lock' на <html> в зависимости от наличия класса на <body>
        if (hasScrollLockClass) {
          htmlElement.classList.add('scroll-lock');
        } else {
          htmlElement.classList.remove('scroll-lock');
        }
      }
    }
  });

  // Настраиваем наблюдатель на отслеживание изменений атрибута 'class' элемента <body>
  observer.observe(bodyElement, { attributes: true });
}
