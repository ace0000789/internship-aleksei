const baseSuccessCallback = (event) => {
  event.preventDefault();

  const url = 'https://echo.htmlacademy.ru/';

  if (event.target.dataset.form === 'modal') {
    const formData = new FormData(event.target);

    fetch(url, {
      method: 'POST',
      body: formData,
    }).then((response) => response.text()).then((data) => {
      document.body.innerHTML = `<pre>${data}</pre>`;
    }).catch(() => {
      document.body.innerHTML = 'Ошибка: не удалось отправить форму на сервер';
    });
  } else if (event.target.dataset.form === 'feedback') {
    const formData2 = new FormData(event.target);

    fetch(url, {
      method: 'POST',
      body: formData2,
    }).then((response) => response.text()).then((data) => {
      document.body.innerHTML = `<pre>${data}</pre>`;
    }).catch(() => {
      document.body.innerHTML = 'Ошибка: не удалось отправить форму на сервер';
    });
  }
};

const baseErrorCallback = (event) => {
  event.preventDefault();

};

export const callbacks = {
  base: {
    reset: true,
    resetTimeout: 500,
    successCallback: baseSuccessCallback,
    errorCallback: baseErrorCallback,
  },
};
