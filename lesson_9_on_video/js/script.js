let btn = document.getElementsByTagName('button')[0];


btn.addEventListener('click', () => {
  console.log(this); // получим window
});
// btn.addEventListener('click', function () {
//   // console.log(this); // получим сам объект
//   this.style.backgroundColor = 'red';
// });




// 1) Просто вызов функции - window/undefined
// 2) Метод - this = объект
// 3) Конструктор (new) = this = созданный объект
// 4) Указание конкретного контекста - call, apply, bind


// function count(number) {
//   return this * number;
// };

// let double = count.bind(2);

// console.log(double(3));
// console.log(double(10));


// //4)
// let user = {
//   name: 'John'
// };

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// };

// console.log(sayName.call(user, ' Smith'));
// console.log(sayName.apply(user, [' Snow']));





// function User(name, id) {
//   this.name = name;
//   this.id = id;
//   this.human = true;
//   this.hello = function(){
//     alert('Hello ' + this.name);
//   };
// };

// User.prototype.exit = function(name) {
//   alert('Пользователь' + this.name + ' ушел');
// };

// let ivan = new User('Ivan', 23);
// let alex = new User('Alex', 30);

// console.log(ivan);
// console.log(alex);

// ivan.hello();
// alex.hello();



// ivan.exit();

// "use strict" // строгий режим
// num = 5;
// console.log(num);
// 'use strict'
// function showThis(a,b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     // return this.a + this.b; // будет брать параметры с window а не showThis
//     return a + b; // будет брать параметры с внешней функции
//   };
//   console.log(sum()); // показать результат
// };

// showThis(4,5);
// showThis(5,5);

// let obj = {
//     a: 20,
//     b: 15,
//     sum: function () {
//       function shout() {
//         console.log(this);
//       }
//     shout();
//     }
//   };

// obj.sum();

// // если функция вызывается как функция а не как метод внутри объекта, контекст выполнения всегда будет window