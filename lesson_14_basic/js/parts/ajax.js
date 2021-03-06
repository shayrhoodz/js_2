function ajax() {
  
  let message = new Object();
  message.loading = "Загрузка ...";
  message.success = "Спасибо! Скоро мы с вами свяжемся";
  message.failure = "Что-то пошло не так...";

  let form = document.getElementsByClassName('main-form')[0],
      formContact = document.getElementById('form'),
      input = form.getElementsByTagName('input'),
      inputContact = formContact.getElementsByTagName('input'),
      statusMessage = document.createElement('div');
      statusMessage.classList.add('status');

      // console.log(inputContact);

      form.addEventListener('submit', function(event) {
        event.preventDefault();
        form.appendChild(statusMessage);


        // AJAX
        let request = new XMLHttpRequest();
        request.open("POST", 'server.php');

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(form);

        request.send(formData);

        request.onreadystatechange = function() {
          if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
          } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 300) {
                statusMessage.innerHTML = message.success;
                // Добавляем контент на страницу
              }
              else {
                statusMessage.innerHTML = message.failure;
              }
            }
        }
        input[0].value = '';
        // for (let i = 0; i < input.length; i++) {
        //   input[i].value = '';
        //   // Очищаем поля ввода          
        // }
      });


      formContact.addEventListener('submit', function(event) {
        event.preventDefault();
        formContact.appendChild(statusMessage);


        // AJAX
        let request = new XMLHttpRequest();
        request.open("POST", 'server.php');

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        let formData = new FormData(formContact);

        request.send(formData);

        request.onreadystatechange = function() {
          if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
          } else if (request.readyState === 4) {
              if (request.status == 200 && request.status < 300) {
                statusMessage.innerHTML = message.success;
                // Добавляем контент на страницу
              }
              else {
                statusMessage.innerHTML = message.failure;
              }
            }
        }
        for (let i = 0; i < inputContact.length; i++) {
          inputContact[i].value = '';
          // Очищаем поля ввода          
        }
      });

}

module.exports = ajax;