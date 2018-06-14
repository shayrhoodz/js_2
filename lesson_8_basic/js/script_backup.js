//метод load ждет пока полностью страница загрузится
//метод DOMContentLoaded когда структура html уже построена

window.addEventListener('DOMContentLoaded', function () {
  
  let tab = document.getElementsByClassName('info-header-tab'),
      tabContent = document.getElementsByClassName('info-tabcontent'),
      info = document.getElementsByClassName('info-header')[0];
      info1 = document.getElementsByClassName('info-header');

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

  info.addEventListener('click', function (event) {
    let target = event.target;
    console.log('при нажатии' + target);
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
        seconds = Math.floor( (t/1000) % 60 ),
        minutes = Math.floor( (t/1000/60) % 60 ),
        hours = Math.floor( (t/(1000*60*60)) );

        console.log('0 ' + t);
        console.log('1 ' + seconds);
        console.log('1 ' + minutes);
        console.log('1 ' + hours);

    return {
      'total' : t,
      'hours' : hours,
      'minutes' : minutes,
      'seconds' : seconds
    };
  };

  function setClock(id, endtime) {
    
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
      let t = getTimeRemaining(endtime);
      console.log('проверка' + t);
      hours.innerHTML = t.hours,
      minutes.innerHTML = t.minutes,
      seconds.innerHTML = t.seconds;

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    };

    updateClock();
    // console.log('проверка тут');
    let timeInterval = setInterval(updateClock, 1000);

  };

  setClock('timer', deadline);

});