"use strict";

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;if (!f && c) return c(i, !0);if (u) return u(i, !0);var a = new Error("Cannot find module '" + i + "'");throw a.code = "MODULE_NOT_FOUND", a;
        }var p = n[i] = { exports: {} };e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];return o(n || r);
        }, p, p.exports, r, e, n, t);
      }return n[i].exports;
    }for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }return o;
  }return r;
})()({ 1: [function (require, module, exports) {
    window.addEventListener('DOMContentLoaded', function () {

      var modal = require('../parts/modal.js');
      var tab = require('../parts/tab');
      var ajax = require('../parts/ajax.js');
      var calc = require('../parts/calc.js');
      var timer = require('../parts/timer.js');
      var img = require('../parts/img.js');

      modal();
      tab();
      ajax();
      calc();
      timer();
      img();

      // let tab = require('../parts/tab.js');
      // let modal = require('../parts/modal.js');
      // let ajax = require('../parts/ajax.js');
      // let slider = require('../parts/slider.js');
      // let calc = require('../parts/calc.js');
      // let timer = require('../parts/timer.js');

      // tab();
      // modal();
      // ajax();
      // slider();
      // calc();
      // timer();

    });
  }, { "../parts/ajax.js": 2, "../parts/calc.js": 3, "../parts/img.js": 4, "../parts/modal.js": 5, "../parts/tab": 6, "../parts/timer.js": 7 }], 2: [function (require, module, exports) {
    function ajax() {

      var message = new Object();
      message.loading = "Загрузка ...";
      message.success = "Спасибо! Скоро мы с вами свяжемся";
      message.failure = "Что-то пошло не так...";

      var mainForm = document.getElementsByClassName('main_form'),
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

      popupFormCalcEnd.addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });

      mainForm[0].addEventListener('keyup', function (e) {
        var target = e.target;
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

      mainForm[1].addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      mainForm[2].addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      mainForm[3].addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      mainForm[4].addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      mainForm[5].addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      popupForm.addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });
      form.addEventListener('keyup', function (e) {
        var target = e.target;
        onlyNumber(target);
      });

      function sendData(data) {

        data.appendChild(statusMessage);

        var request = new XMLHttpRequest();
        request.open("POST", 'server.php');

        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        var formData = new FormData(data);

        request.send(formData);

        request.onreadystatechange = function () {
          if (request.readyState < 4) {
            statusMessage.innerHTML = message.loading;
            console.log('загрузка');
          } else if (request.readyState === 4) {
            if (request.status == 200 && request.status < 300) {
              statusMessage.innerHTML = message.success;
              // Добавляем контент на страницу
              console.log('успешно');
            } else {
              statusMessage.innerHTML = message.failure;
              console.log('ошибка');
            }
          }
        };
        var input = data.getElementsByTagName('input');
        // console.log(input);
        for (var i = 0; i < input.length; i++) {
          input[i].value = '';
          // Очищаем поля ввода          
        }
        // console.log('функция сработала');
      }

      popupFormCalcEnd.addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(popupFormCalcEnd);
      });

      mainForm[0].addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(mainForm[0]);
      });
      mainForm[1].addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(mainForm[1]);
      });
      mainForm[2].addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(mainForm[2]);
      });
      mainForm[3].addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(mainForm[3]);
      });
      mainForm[5].addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(mainForm[5]);
      });
      popupForm.addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(popupForm);
      });
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        sendData(form);
      });
    }

    module.exports = ajax;
  }, {}], 3: [function (require, module, exports) {
    function calc() {

      var popupCalcCont = document.querySelector('.popup_calc_content'),
          balconIcons = popupCalcCont.querySelector('.balcon_icons'),
          imgMini = balconIcons.getElementsByTagName('img'),
          bigImg = popupCalcCont.querySelector('.big_img'),
          imgBig = bigImg.getElementsByTagName('img'),
          inputWidth = document.getElementById('width'),
          inputHeight = document.getElementById('height'),
          select = document.getElementById('view_type'),
          checkbox = document.getElementsByClassName('checkbox'),
          popCalcEnd = document.querySelector('.popup_calc_end'),
          popupFormCalcEnd = popCalcEnd.querySelector('.popup_form');

      // console.log(select.options[select.selectedIndex].value);

      popupFormCalcEnd.addEventListener('submit', function (event) {
        event.preventDefault();
        //AJAX
        var request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'aplication/x-www-form-urlencoded');

        var formData = new FormData(data);

        console.log(formData);

        request.send(formData);

        data.type = '';
        data.width = 0;
        data.height = 0;
        data.cold = false;
        data.warm = false;
        inputWidth.value = '';
        inputHeight.value = '';
        checkbox[0].checked = false;
        checkbox[1].checked = false;
      });

      select.addEventListener('change', function () {
        data.type = select.value;
        console.log(data);
      });

      inputWidth.addEventListener('keyup', function () {
        inputWidth.value = inputWidth.value.replace(/[^\d]/g, '');
        data.width = inputWidth.value;
        console.log(data);
      });
      inputHeight.addEventListener('keyup', function () {
        inputHeight.value = inputHeight.value.replace(/[^\d]/g, '');
        data.height = inputHeight.value;
        console.log(data);
      });

      function check(a, b) {

        if (checkbox[a].checked) {
          checkbox[b].checked = false;
        };
        // if (checkbox[1].checked) {
        //   checkbox[0].checked = false;
        // };
        for (var i = 0; i < checkbox.length; i++) {
          if (checkbox[0].checked) {
            data.cold = true;
          } else {
            data.cold = false;
          };
          if (checkbox[1].checked) {
            data.warm = true;
          } else {
            data.warm = false;
          };
        }
        console.log(data);
      };
      // check();

      checkbox[0].addEventListener('click', function () {
        check(0, 1);
      });
      checkbox[1].addEventListener('click', function () {
        check(1, 0);
      });

      var data = {
        type: String,
        width: 0,
        height: 0,
        cold: false,
        warm: false
      };

      // console.log(popupCalcCont);
      // console.log(balconIcons);
      // console.log(imgMini);
      // console.log(imgBig[0]);
      // console.log(data);


      popupCalcCont.addEventListener('click', function (e) {
        e.preventDefault();
        var target = e.target;

        // console.log(target);
        for (var i = 0; i < imgMini.length; i++) {
          if (target == imgMini[i]) {
            console.log('равно ' + imgMini[i].src);
            for (var t = 0; t < imgMini.length; t++) {
              imgMini[t].style.width = '60px';
            }
            imgMini[i].style.width = '150px';
            for (var _t = 0; _t < imgBig.length; _t++) {
              imgBig[_t].style.display = 'none';
            }
            imgBig[i].style.display = 'inline-block';

            break;
          }
          // console.log('тест ' + target);
        }
      });
    }

    module.exports = calc;
  }, {}], 4: [function (require, module, exports) {
    function img() {

      var worksWrap = document.querySelector('.works'),
          imgA = worksWrap.getElementsByTagName('a'),

      // img = worksWrap.getElementsByTagName('img');
      img = worksWrap.querySelectorAll('.mini');

      console.log(img);

      // const links = {
      //   link1 : '../../img/our_works/big_img/1.png',
      //   link2 : "../../img/our_works/big_img/2.png"
      // };

      var links = ['/JS/img/our_works/big_img/1.png', '/JS/img/our_works/big_img/2.png', '/JS/img/our_works/big_img/3.png', '/JS/img/our_works/big_img/4.png', '/JS/img/our_works/big_img/5.png', '/JS/img/our_works/big_img/6.png', '/JS/img/our_works/big_img/7.png', '/JS/img/our_works/big_img/8.png'];

      // console.log(links[0]);


      worksWrap.addEventListener('click', function (e) {
        e.preventDefault();
        var target = e.target;
        // div;

        console.log(target);

        for (var i = 0; i < img.length; i++) {
          if (target == img[i]) {
            console.log('эта картинка');

            var div = document.createElement('div'),
                _img = document.createElement('img');

            // img.src = "../../img/our_works/big_img/1.png";
            _img.src = links[i];
            console.log('номер картинка:' + i);

            div.classList.add('black');
            _img.classList.add('bigPic');

            if (target.className !== 'bigPic') {
              console.log('не нажали на картинку');
              worksWrap.appendChild(div);
              div.appendChild(_img);

              _img.style.display = 'block';
              _img.style.width = '500px';
              _img.style.margin = '0 auto';
              _img.style.marginTop = '5%';
              // img.style.top = '50%'
              // img.style.left = '50%'
              // img.style.transform = 'translate(-50%, -50%)';
              div.style.display = 'block';
              div.style.overflow = 'hidden';
              div.style.position = 'fixed';
              div.style.width = '100%';
              div.style.height = '100%';
              div.style.top = '50%';
              div.style.left = '50%';
              div.style.transform = 'translate(-50%, -50%)';
              div.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
              div.style.zIndex = '100';
              // div.style.backgroundImage = "url('../../img/our_works/big_img/1.png')";
            }
          }
        };

        if (target.classList.contains('black')) {
          var _div = worksWrap.getElementsByClassName('black')[0];
          // _div.remove();
          worksWrap.removeChild(_div);
        };

        // console.log(imgA);
      });
    }

    module.exports = img;
  }, {}], 5: [function (require, module, exports) {
    function modal() {
      var btnPopEng = document.getElementsByClassName('popup_engineer_btn')[0],
          popEng = document.querySelector('.popup_engineer'),
          popCalc = document.querySelector('.popup_calc'),
          btnPopCalc = popCalc.querySelector('.popup_calc_button'),
          popCalcProfile = document.querySelector('.popup_calc_profile'),
          btnPopCalcProfile = popCalcProfile.querySelector('.popup_calc_profile_button'),
          popCalcProfileClose = document.querySelector('.popup_calc_profile_close'),
          popCalcEnd = document.querySelector('.popup_calc_end'),
          popCalcEndClose = popCalcEnd.querySelector('.popup_calc_end_close'),
          popEngForm = popEng.querySelector('.form'),
          popup = document.querySelector('.popup'),
          popupClose = document.querySelectorAll('.popup_close'),
          popupCalcClose = document.querySelector('.popup_calc_close'),
          phoneLink = document.querySelectorAll('.phone_link'),
          btnCalc = document.querySelectorAll('.popup_calc_btn');

      // console.log(popupClose);
      console.log(btnPopCalc);

      btnPopCalc.addEventListener('click', function () {
        console.log(this);
        modalClose(popCalc);
        modalOpen(popCalcProfile);
      });

      btnPopCalcProfile.addEventListener('click', function () {
        console.log(this);
        modalClose(popCalcProfile);
        modalOpen(popCalcEnd);
      });

      // btnCalc.addEventListener('click', function() {
      //   // modalOpen(popCalc);
      //   console.log('нажал');
      // })

      function modalClose(pop) {
        pop.style.display = '';
      }

      function modalOpen(pop) {
        pop.style.display = 'block';
      }

      btnPopEng.addEventListener('click', function () {
        console.log(this);
        // popEng.style.display = 'block';
        // popup.style.display = 'block';
        modalOpen(popEng);
        modalOpen(popup);
      });

      phoneLink[0].addEventListener('click', function () {
        modalOpen(popup);
      });
      phoneLink[1].addEventListener('click', function () {
        event.preventDefault();
        modalOpen(popup);
      });
      popupClose[0].addEventListener('click', function (event) {

        modalClose(popup);
      });

      popupCalcClose.addEventListener('click', function (event) {

        modalClose(popCalc);
      });

      popCalcProfileClose.addEventListener('click', function (event) {

        modalClose(popCalcProfile);
      });

      popCalcEndClose.addEventListener('click', function (event) {

        modalClose(popCalcEnd);
      });

      //
      popupClose[1].addEventListener('click', function (event) {

        modalClose(popEng);
        modalClose(popup);
      });
      document.addEventListener('click', function (e) {
        // console.log(e.target);
        if (e.target == popEng) {
          modalClose(popEng);
          modalClose(popup);
        }

        // if (e.target == popCalc) {
        //   modalClose(popCalc);
        // }

        if (e.target == popup) {
          modalClose(popup);
        }

        if (e.target.classList.contains('popup_calc_btn')) {
          // console.log('совпадает ' );
          modalOpen(popCalc);
        }

        // if (e.target == popCalc) {
        //   modalClose(popCalc);
        // }
        // console.log(e.target.classList);
      });

      setTimeout(function () {
        modalOpen(popup);
      }, 60000);
    }

    module.exports = modal;
  }, {}], 6: [function (require, module, exports) {
    function tab() {

      var noClick = document.querySelectorAll('.no_click'),
          decor = document.querySelector('.decoration'),
          decorItem = document.getElementsByClassName('decoration_item'),
          decorA = document.querySelectorAll('.no_click>a'),
          decorContent = document.querySelectorAll('.decor_content');

      // console.log(noClick);
      // console.log(decorItem);
      // console.log(decorContent);

      function showTabClass(a) {
        for (var t = 0; t < noClick.length; t++) {
          noClick[t].classList.remove('after_click');
          decorContent[t].style.display = 'none';
        }
        noClick[a].classList.add('after_click');
        decorContent[a].style.display = 'block';
      }

      decor.addEventListener('click', function (event) {
        var target = event.target;
        // console.log('при нажатии ' + target);
        // console.log(target.className);
        if (target.parentElement.classList.contains('no_click')) {
          // console.log('содержит но клик');
          for (var i = 0; i < decorA.length; i++) {
            if (target == decorA[i]) {
              showTabClass(i);
              break;
            }
          }
        }
      });

      var glazingSlider = document.querySelector('.glazing_slider'),
          glazingSliderA = document.querySelectorAll('.glazing_block>a'),
          glazingRow = document.querySelectorAll('.glazing-row');

      // console.log(glazingRow);

      glazingSlider.addEventListener('click', function (event) {
        var target = event.target;
        if (target.parentElement.classList.contains('glazing_block')) {
          for (var i = 0; i < glazingSliderA.length; i++) {
            if (target == glazingSliderA[i]) {
              for (var t = 0; t < glazingSliderA.length; t++) {
                glazingSliderA[t].classList.remove('active');
                glazingRow[t].style.display = 'none';
              }
              glazingSliderA[i].classList.add('active');
              glazingRow[i].style.display = 'block';
              break;
            }
          }
        }
      });
    }

    module.exports = tab;
  }, {}], 7: [function (require, module, exports) {
    function timer() {

      var deadline = '2018-07-10';

      function getTimeRemaining(endtime) {
        var t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = 0,
            minutes = 0,
            hours = 0,
            days = 0,
            offset = new Date().getTimezoneOffset() / 60;
        if (t > 0) {
          // console.log('if');
          seconds = Math.floor(t / 1000 % 60);
          minutes = Math.floor(t / 1000 / 60 % 60);
          hours = Math.floor(t / (1000 * 60 * 60) + offset);
          days = Math.floor(t / (1000 * 60 * 60 * 24));
          // console.log(hours);
        } else {
          // console.log('else');
          seconds = 0;
          minutes = 0;
          hours = 0;
          days = 0;
        }
        return {
          'total': t,
          'days': days,
          'hours': hours,
          'minutes': minutes,
          'seconds': seconds
        };
      };

      function countNumber(i) {
        var a = String(i),
            b = 0;
        if (a.length == 1) {
          a = 0 + '' + i;
        } else {
          a = i;
        }
        return a;
      };

      function setClock(id, endtime) {

        var timer = document.getElementsByClassName(id)[0],
            days = timer.querySelector('.days'),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds');

        function updateClock() {
          var t = getTimeRemaining(endtime);
          // console.log('проверка' + t);
          // hours.innerHTML = '0' + t.hours,
          days.innerHTML = countNumber(t.days), hours.innerHTML = countNumber(t.hours), minutes.innerHTML = countNumber(t.minutes), seconds.innerHTML = countNumber(t.seconds);

          if (t.total <= 0) {
            clearInterval(timeInterval);
          }
        };

        var timeInterval = setInterval(updateClock, 1000);

        updateClock();
        // console.log('проверка тут');
      };

      setClock('eTimer', deadline);
    }

    module.exports = timer;
  }, {}] }, {}, [1]);