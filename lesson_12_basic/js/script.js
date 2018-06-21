//метод load ждет пока полностью страница загрузится
//метод DOMContentLoaded когда структура html уже построена

window.addEventListener('DOMContentLoaded', () => {
  
  let tab = document.getElementsByClassName('info-header-tab'),
      tabContent = document.getElementsByClassName('info-tabcontent'),
      info = document.getElementsByClassName('info-header')[0],
      infotab = document.querySelector('.info');      

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
      
    }
  }

  hideTabContent(1);


  function showTabContent(b) {
    if( tabContent[b].classList.contains('hide')){
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (event) => {
    let target = event.target;
    console.log('при нажатии' + target);
    console.log(target.className);
    if(target.className == 'info-header-tab') {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          console.log('в цикле' + tab[i] + ' | ' + i);
          showTabContent(i);
          break;          
        }        
      }
    };
  });


  let deadline = '2018-06-14';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = 0,
        minutes = 0,
        hours = 0,
        offset = new Date().getTimezoneOffset() / 60;

    // console.log(t);
    // console.log(offset);
    // console.log(hours);

    if (t > 0) {
      // console.log('if');
      seconds = Math.floor( (t/1000) % 60 );
      minutes = Math.floor( (t/1000/60) % 60 );
      hours = Math.floor( (t/(1000*60*60)) + offset );
      console.log(hours);
    } else {
        // console.log('else');
        seconds = 0;
        minutes = 0;
        hours = 0;
      }
      
    // seconds = Math.floor( (t/1000) % 60 ),
    // minutes = Math.floor( (t/1000/60) % 60 ),
    // hours = Math.floor( (t/(1000*60*60)) );

    // console.log('0 ' + t);
    // console.log('1 ' + seconds);
    // console.log('1 ' + minutes);
    // console.log('1 ' + hours);

    return {
      'total' : t,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
  };

  function countNumber(i) {
    let a = String(i),
        b = 0;
    if(a.length == 1) {
      a = 0 + '' + i;
    } else {
        a = i;
      }
    return a;
  };

  // abc = countNumber(11);

  // console.log(abc);

  function setClock(id, endtime) {
    
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
      let t = getTimeRemaining(endtime);
      // console.log('проверка' + t);
      // hours.innerHTML = '0' + t.hours,
      hours.innerHTML = countNumber(t.hours),
      minutes.innerHTML = countNumber(t.minutes),
      seconds.innerHTML = countNumber(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    };

    let timeInterval = setInterval(updateClock, 1000);

    updateClock();
    // console.log('проверка тут');

  };

  setClock('timer', deadline);

  // modal

  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descrbtn = document.getElementsByClassName('description-btn');

  // console.log(infotab);

  // infotab.addEventListener('mouseover', () => {
  //   // console.log('навел');
  // });
  // infotab.addEventListener('mouseover', () => {
  //   // console.log('убрал');
  // });


  function tst() {
    for (let i = 0; i < descrbtn.length; i++) {
      // console.log('тест');
      descrbtn[i].addEventListener('click', function () {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    };
  };
  
  setInterval(tst, 1000);
  // tst();

  // descrbtn[1].addEventListener('click', function () {
  //   this.classList.add('more-splash');
  //   overlay.style.display = 'block';
  //   document.body.style.overflow = 'hidden';
  //   console.log(descrnumb);
  // });

  more.addEventListener('click', function () {
    console.log(this);
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

  //form
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
        for (let i = 0; i < input.length; i++) {
          input[i].value = '';
          // Очищаем поля ввода          
        }
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

      //Slider

      let slideIndex = 1,
          slides = document.getElementsByClassName('slider-item'),
          prev = document.querySelector('.prev'),
          next = document.querySelector('.next'),
          dotsWrap = document.querySelector('.slider-dots'),
          dots = document.getElementsByClassName('dot');

          showSlides(slideIndex);

          function showSlides(n) {
            
            if (n > slides.length) {
              slideIndex = 1;              
            };
            if (n < 1) {
              slideIndex = slides.length;
            };

            for (let i = 0; i < slides.length; i++) {
              slides[i].style.display = 'none';                          
            };

            for (let i = 0; i < dots.length; i++) {
              dots[i].classList.remove('dot-active');              
            };

            slides[slideIndex - 1].style.display = 'block';
            dots[slideIndex - 1].classList.add('dot-active');
          };

          function plusSlides (n) {
            showSlides(slideIndex += n)
          }

          function currentSlide(n) {
            showSlides(slideIndex = n)
          }

          prev.addEventListener('click', function(){
            plusSlides(-1);
          });

          next.addEventListener('click', function(){
            plusSlides(1);
          });

          // поиск на какой элемент нажали
          dotsWrap.addEventListener('click', function(event) {
            for (let i = 0; i < dots.length + 1; i++) {
              if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
                currentSlide(i);
                console.log(i);
                console.log(dots[i]);
              }
              
            }
          });


          // calc

          let persons = document.getElementsByClassName('counter-block-input')[0],
              restDays = document.getElementsByClassName('counter-block-input')[1],
              place = document.getElementById('select'),
              totalValue = document.getElementById('total'),
              personsSum = 0,
              daysSum = 0,
              total = 0;

          totalValue.innerHTML = 0;

          persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum) * 4000;
            // totalValue.innerHTML = total;
            if (restDays.value == '' || persons.value == '') {
              totalValue.innerHTML = 0
            } else {
              totalValue.innerHTML = total;
            }

            if (personsSum == '' || personsSum == /[^\d]/g) {
              persons.value = '';
              // console.log('пустой или не тот символ'); 
            }

          });

          restDays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum + personsSum) * 4000;
            // totalValue.innerHTML = total;
            if (restDays.value == '' || persons.value == '') {
              totalValue.innerHTML = 0
            } else {
              totalValue.innerHTML = total;
            }

            if (daysSum == '' || personsSum == /[^\d]/g) {
              restDays.value = '';
              // console.log('пустой или не тот символ'); 
            }

          });

          place.addEventListener('change', function () {
            if (restDays.value == '' || persons.value == '') {
              totalValue = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
          });

          // function numberDetect () {

          //   console.log(this);
            
          //   if (!/^[a-zA-Z0-9 ,.\-:"()]*?$/.this) {
          //     console.log(1);
          //   } else {
          //       console.log(0);
          //     }
            
            
          //   // this.value = this.value.replace(/[^\d]/g, '')
          //   // console.log(this);
          // }

          // let q = 23;
          // numberDetect.call(q);

});