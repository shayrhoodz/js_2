function timer() {

  let deadline = '2018-07-10';

  function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = 0,
        minutes = 0,
        hours = 0,
        days = 0,
        offset = new Date().getTimezoneOffset() / 60;
        if (t > 0) {
          // console.log('if');
          seconds = Math.floor( (t/1000) % 60 );
          minutes = Math.floor( (t/1000/60) % 60 );
          hours = Math.floor( (t/(1000*60*60)) + offset );
          days = Math.floor( (t/(1000*60*60*24)) );
          // console.log(hours);
        } else {
            // console.log('else');
            seconds = 0;
            minutes = 0;
            hours = 0;
            days = 0;
          }
        return {
          'total' : t,          
          'days' : days,
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

  function setClock(id, endtime) {
    
    let timer = document.getElementsByClassName(id)[0],
        days = timer.querySelector('.days'),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds');

    function updateClock() {
      let t = getTimeRemaining(endtime);
      // console.log('проверка' + t);
      // hours.innerHTML = '0' + t.hours,
      days.innerHTML = countNumber(t.days),
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

  setClock('eTimer', deadline);







}

module.exports = timer;