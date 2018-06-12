let btns = document.getElementsByTagName('button'),
    btn_block = document.querySelector('.btn-block');


btn_block.addEventListener('click', function (event) {
  // if (event.target && event.target.tagName == 'BUTTON') { //проверка на тег (тег писать большими буквами)
  // if (event.target && event.target.nodeName == 'BUTTON') { //тоже самое что и выше (тег писать большими буквами)
  // if (event.target && event.target.className == 'first') { //проверка есть ли класс у данного объекта
  if (event.target && event.target.matches('button.first')) { //метод сотрудников google) (ищем в кнопке класс first)
    console.log('Hello!');
  }
});

// при таком вызове будет ошибка
// btns.addEventListener('click', function () {
//   console.log('Hello!');
// });







// let timerId = setTimeout(log, 2000);

// function log() {
//   console.log('Hello!');
//   timerId = setTimeout(log, 2000);
// }

let btn = document.querySelector(".btn");

// myAnimation();

// let requestId = requestAnimationFrame(myAnimation)

function myAnimation() {
  console.log('сработала функция');
  let elem = document.querySelector(".box"),
      pos = 0,
      id = setInterval(frame, 10);

      function frame() {
        console.log('сработала функция 1');
        if (pos == 250) {
          clearInterval(id);
          // cancelAnimationFrame(requestId);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
          }
      }
}
btn.addEventListener('click', () => {
  let requestId = requestAnimationFrame(myAnimation);
});

// btn.addEventListener('click', myAnimation);