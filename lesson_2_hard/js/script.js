week = ['Понедельник', 'Вторник',  'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

let date = new Date();
let day = date.getDay();


if(day !== 0) {
  day = day - 1;
} else {
    day = 6;
  };
// перераспределение дня недели, get Day начинается с воскресенья)

document.writeln('<h1>Дни недели</h1>');

for (var i = 0; i < week.length; i++) {

  if(i == day) {
    document.writeln('<i>' + week[i] + '</i><br>');
  } else if(week[i] == 'Суббота' || week[i] == 'Воскресенье') {
      document.writeln('<b>' + week[i] + '</b><br>');
    } else {
        document.writeln(week[i] + '<br>');
      }
};

console.log(week);
console.log(day);

arr = ['7453', '232442',  '64322', '566434', '39883', '49665', '12434'];

for (var u = 0; u < arr.length; u++) {

  let num = arr[u].toString().split('');
  if(num[0] == 3 || num[0] == 7) {
    console.log('Содержит 3 или 7: ' + arr[u]);  
  }  

};

// console.log(arr[0].split(''));