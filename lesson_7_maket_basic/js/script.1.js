let time = document.querySelector('.get-time'),
    textDay = document.querySelector('.get-day'),
    inputDate =  new Date(),
    arrDate = [],
    flag = true;
    
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

  let d = countNumber(day);
      mh = countNumber(month),
      h = countNumber(hours),
      m = countNumber(minutes),
      s = countNumber(seconds);
  // console.log(hours);

  let temp = d + '' + day + '.' + mh + '' + month + '.'  + year;
  time.textContent = h + '' + hours + ':' + m + '' +  minutes + ':' + s + '' +  seconds;

};

setInterval(getTime, 1000);

function countNumber(i) {
  let a = String(i);
  if(a.length == 1) {
    a = 0;
  } else {
      a = '';
    }
  return a;
};
