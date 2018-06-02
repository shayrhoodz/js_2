// let num = 20;

// function showFirstMessage(text) {
//   alert(text);
//   num = 10;
// }

// showFirstMessage("Hello World!");
// console.log(num);

// function calc(a,b) {
//   return a+b;
// }

// console.log(calc(4,5));
// console.log(calc(4,15));


//функциональное выражение
// let calc = function(a,b) {
//   return a+b;
// }

//строчная функция
// let calc = (a,b) => a+b;

// console.log(calc(4,5));
// console.log(calc(4,15));


let str = "test";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let str1 = "12.2";

console.log(Math.round(str1));
console.log(parseInt(str1));
console.log(parseFloat(str1));



// вызов фклфункции из функции
function leartnJS(lang, callback) {
  console.log('Я учу ' + lang);
  callback();
}

// leartnJS('JavaSctript', function(){
//   console.log('Я прошёл 3й урок!')
// });

leartnJS('JavaScript', done);

function done() {
  console.log('Я прошёл 3й урок!');
}