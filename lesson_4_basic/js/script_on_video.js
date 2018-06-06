let soldier = {
  health: 400,
  armor: 100
}

let john = {
  health: 100
}

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);




// let first = [1, 15, 20, 3];

// // функция сортировки массива с числами
// function sortNumber(a,b) {
//   return a - b;
// }

// let i = first.sort(sortNumber);


// let first = ["qq", "aa", "zzz", "q"];



// let i = first.sort(); // вывод содержимого массива по алфавиту

// let i = first.join(","); // отправить массив куда нибудь одной строчкой

// let i = prompt("", "");
// first = i.split(","); // записать данные в массив

// console.log(i);



// let first = [1,"second",3,4,5];

// first[99] = 99;

// console.log(first.length);



// first.forEach(function(item,i,arr) {
//   console.log(i + ": " + item + "(массив: " + arr + ")")
// });


// for (let i = 0; i < arr.length; i++) {
//   alert(arr[i]);
// }


// arr.pop(); // удаление последнего элемента в массиве

// console.log(arr.pop());

// arr.push(6); // добавить элемент в массив в конец

// arr.shift(); // удаляет первый элемент массива

// arr.unshift(0); // добавляет элемент массива в начало


// console.log(arr);




// // let option = new Object();
// let option = {
//   name: "test",
//   width: 1024,
//   height: 1024
// }

// option.bool = false; // запись нового параметра
// option.color = {
//   border: "black",
//   background: "red"
// }

// delete option.bool;

// for( let key in option) {
//   console.log('Свойство ' + key + " имеет значение " + option[key]);
// }
// console.log(Object.keys(option).length);