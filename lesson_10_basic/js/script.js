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

});