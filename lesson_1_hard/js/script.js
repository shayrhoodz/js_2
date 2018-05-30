var names = 33721;
var op = 1;

var arr = names.toString().split('');

for (var i = 0; i < arr.length; i++) {
  // console.log( 'Вам сообщение ' + arr[i] );
  op = op * +arr[i];
  // console.log( 'Вам сообщение 1 ' + op);
}

console.log( 'Произведение числа ' + op );

var degree = Math.pow(op,3)

console.log( 'Степень 3 ' + degree );

var arr1 = degree.toString().split('');
var op1 = '';

for (var i = 0; i < 2; i++) {
  op1 = op1 + arr1[i];
}

console.log( 'Первые две цифры ' + op1 );

alert('Первые две цифры ' + op1);