// модуль

// этот подход в создании модулей, методы изначально являются приватными, скрытыми снаружи и мы выводим только те что нам необходимы  

let user = (function(){

  // приватные функции
  let privat = function() {
    console.log('I am Privat!');
  };

  let sayHello = function() {
    console.log('Hello!');
  }

  // с помощью return мы возвращаем те методы и свойства которые хотим получать из вне

  return {
    // общедоступные функции
    sayHello: sayHello,
    privat: privat
  }


}());

console.log(user.sayHello());
console.log(user.privat());





// объектный интерфейс, модуль записываем в переменную и в нем возвращаем методы доступные снаружи

// let user = (function(){

//   let privat = function() {
//     console.log('I am Privat!');
//   }

//   // с помощью return мы возвращаем те методы и свойства которые хотим получать из вне

//   return {
//     sayHello: function() {
//       console.log('Hello!');
//     }
//   }


// }());


// console.log(user.sayHello()); // будет ошибка, ткк функция приватная
// // console.log(user.privat()); // будет ошибка, ткк функция приватная





// анонимная самовызывающаяся функция (анонимна так как не имеет имени) (функция(){} () последние скобки позволяют вызвать функцию, внешние-наружные () являются фанкшион экспрешен если их не будет получим фанкшен декларейшен и будет ошибка так как не имеет своего имени)

// let number = 1;

// (function() {


//   let number = 2;
//   console.log(number);

//   return console.log(number + 3);


// }())

// console.log(number);







// инкапсуляция

// function User(name,age) {
//   this.name = name;
//   // this.age = age;
//   let userAge = age;

//   this.say = function () { 
//     alert(`Имя пользвоателя: ${this.name}, возраст: ${userAge} `);
//    };
//    // метод геттер позволяет получить параметры из приватных свойств
//    this.getAge = function() {
//      return userAge;
//    };
//    // метод сеттер позволяет устанавливать параметры в приватные свойства
//    this.setAge = function(age) {
     
//       if ( typeof age === 'number' && age>0 && age<110) {
//         userAge = age;
//       } else {
//         console.log('недопустимое значение');
//       }

//    };
// };

// let ivan  = new User('Ivan', 25);

// console.log(ivan.name);
// // console.log(ivan.userAge);
// console.log(ivan.getAge());
// ivan.setAge(23);
// console.log(ivan.getAge());

// ivan.say();







// без инкапсуляции мы можем изменять значения методов и свойств в объекте
// ivan.age = 30;
// ivan.name = 'Alex';

// ivan.say();