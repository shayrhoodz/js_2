function ajax() {

  let message = new Object();
      message.loading = "Загрузка ...";
      message.success = "Спасибо! Скоро мы с вами свяжемся";
      message.failure = "Что-то пошло не так...";

  let mainForm = document.getElementsByClassName('main_form'),
      form = document.getElementsByClassName('form')[7],
      popupForm = document.querySelector('.popup_form'),
      popCalcEnd = document.querySelector('.popup_calc_end'),
      popupFormCalcEnd = popCalcEnd.querySelector('.popup_form'),
      statusMessage = document.createElement('div');

      statusMessage.classList.add('status');

  // console.log(mainForm);
  // console.log(popupForm);
  console.log(popupFormCalcEnd);

  // function getChar(event) {
  //   if (event.which == null) {
  //     if (event.keyCode < 32) return null;
  //     return String.fromCharCode(event.keyCode) // IE
  //   }

  //   if (event.which != 0 && event.charCode != 0) {
  //     if (event.which < 32) return null;
  //     return String.fromCharCode(event.which) // остальные
  //   }

  //   return null; // специальная клавиша
  // }

  function onlyNumber(target) {
    if (target.getAttribute('name') == 'user_phone') {
      target.value = target.value.replace(/[^\d]/g, '');
    };
  }

  popupFormCalcEnd.addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });

  mainForm[0].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
    // if (target.getAttribute('name') == 'user_phone') {
    //   target.value = target.value.replace(/[^\d]/g, '');
    // };
    // console.log(target.getAttribute('name'));
    // if (target.classList.contains('form_input')) {
    //   console.log('ввод данных');
    // }


    // if (target.getAttribute('name') == 'user_phone') {
    //   console.log('равен юзерфоне');
    //   let chr = getChar(e);
    //   // if (typeof(chr) == 'number') {
    //   //   console.log('цифра');
    //   // }
    //   if (parseInt(chr)) {
    //     console.log('число');
    //   } else {
    //       let tst = target.value.substring(0, target.value.length - 1);
    //       console.log('символ' + tst);
    //       target.value = '';
    //       // target.value.slice(-1);
    //       target.value = tst;

    //     }
    //   console.log(chr + ' ' + typeof(chr));
    // }
  });

  mainForm[1].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  mainForm[2].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  mainForm[3].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  mainForm[4].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  mainForm[5].addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  popupForm.addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });
  form.addEventListener('keyup', (e) => {
    let target = e.target;
    onlyNumber(target);
  });

  function sendData(data) {    

    data.appendChild(statusMessage);

    let request = new XMLHttpRequest();
    request.open("POST", 'server.php');

    request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

    let formData = new FormData(data);

    request.send(formData);

    request.onreadystatechange = function() {
      if (request.readyState < 4) {
        statusMessage.innerHTML = message.loading;
        console.log('загрузка');
      } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 300) {
            statusMessage.innerHTML = message.success;
            // Добавляем контент на страницу
            console.log('успешно');
          }
          else {
            statusMessage.innerHTML = message.failure;
            console.log('ошибка');
          }
        }
    }
    let input = data.getElementsByTagName('input')
    // console.log(input);
    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
      // Очищаем поля ввода          
    }
    // console.log('функция сработала');
  }

  popupFormCalcEnd.addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(popupFormCalcEnd);    
  });

  mainForm[0].addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(mainForm[0]);    
  });
  mainForm[1].addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(mainForm[1]);    
  });
  mainForm[2].addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(mainForm[2]);    
  });
  mainForm[3].addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(mainForm[3]);    
  });
  mainForm[5].addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(mainForm[5]);    
  });
  popupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(popupForm);    
  });
  form.addEventListener('submit', function(event) {
    event.preventDefault();
    //AJAX
    sendData(form);    
  });

}

module.exports = ajax;