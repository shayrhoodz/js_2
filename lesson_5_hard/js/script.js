let time = document.querySelector('.get-time'),
    textDay = document.querySelector('.get-day'),
    inputDate =  new Date(),
    arrDate = [],
    flag = true;
    

// arrDate[0] = inputDate.getDate;




// console.log(day + hours + minutes + seconds + milliseconds);

function writeDate(a) {
  console.log(a);
  // date1 = 'ntcn';
  document.getElementById('date1').value = arrDate.join('/');
  document.getElementById('date2').value = arrDate.join('/');
  // document.getElementById('date2').value = 'тест';
  flag = false;
}

function diffDay(a, b) {
  // console.log(a + ' ' + b);
  // console.log(a);
  // console.log(b);
  let firstData1 = new Date(a[2], a[1], a[0]),
      lastData2 = new Date(b[2], b[1], b[0]);
  
  console.log(firstData1);
  console.log(lastData2);
  console.log( (firstData1 - lastData2) / (1000 * 3600 * 24) );
  document.getElementById('date3').value = Math.abs((firstData1 - lastData2) / (1000 * 3600 * 24));
};

function getTime() {
  let date = new Date(),
    day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear(),
    week = date.getDay(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds(),
    milliseconds = date.getMilliseconds();

  // console.log(hours + ':' + minutes + ':' + seconds);

  

  let d = countNumber(day);
      mh = countNumber(month),
      h = countNumber(hours),
      m = countNumber(minutes),
      s = countNumber(seconds);
  // console.log(hours);

  let temp = d + '' + day + '.' + mh + '' + month + '.'  + year;
  time.textContent = h + '' + hours + ':' + m + '' +  minutes + ':' + s + '' +  seconds + ' ' + temp;

  arrDate = temp.split('.');
  // console.log(arrDate);

  if (flag) {
    writeDate(arrDate);  
  };
  
  let date1 = document.getElementById('date1').value.split('/');
      date2 = document.getElementById('date2').value.split('/');

  diffDay(date1, date2);

  // console.log(date1);
  // console.log(date2);

  let w = getWeekName(week);
  textDay.textContent = w;

  // console.log(time);
  // console.log('проверка' + tst);
};

setInterval(getTime, 1000);


function getWeekName(w) {  
  
  switch (w) {
    case 1:
      return 'понедельник';
      break;
    case 2:
      return 'вторник';
      break;
    case 3:
      return 'среда';
      break;
    case 4:
      return 'четверг';
      break;
    case 5:
      return 'пятница';
      break;
    case 6:
      return 'суббота';
      break;  
    default:
      return 'воскресенье';
      break;
  }
};

// console.log(getWeekName(1));

// getTime();
// setTimeout(getTime, 100);


function countNumber(i) {
  let a = String(i);
  if(a.length == 1) {
    a = 0;
    // console.log("правда");
  } else {
      a = '';
      // console.log("ложь");
    }
  // console.log(a);
  // console.log(typeof(a));
  return a;
};

// countNumber(33);

// let b = countNumber(5);

// console.log('return ' + b);