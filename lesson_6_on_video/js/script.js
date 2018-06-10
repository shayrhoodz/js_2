let btn = document.getElementsByTagName('button');
let overlay = document.querySelector('.overlay');
let link = document.getElementsByTagName('a');

link[0].addEventListener('click', function(event) {
  event.preventDefault(); // отменяет стандартное поведение браузера
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

//события
btn[0].addEventListener('click', function(event) {
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});
//сначала отработает внутренний элемент, а потом его родитель и выше...
overlay.addEventListener('click', function(event) {
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});



btn[1].addEventListener('mouseenter', function(event) {
  console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});
// btn[0].addEventListener('click', function() {
//   alert('Вы нажали первую кнопку!');
// });
// btn[0].addEventListener('mouseleave', function() {
//   console.log('Вы убрали мышь!');
// });

// //наведение мышкой на объект
// btn[1].addEventListener('mouseenter', function() {
//   console.log('Вы навели на кнопку №2');
// });

// //снятие наведения мышки с объекта
// btn[1].addEventListener('mouseleave', function() {
//   console.log('Вы убрали наведение с кнопки №2');
// });



// btn[0].onclick = function() {
//   alert('Вы нажали первую книгу');  
// }