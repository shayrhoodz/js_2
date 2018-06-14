// let btns = document.getElementsByTagName('button'),
//     btn_block = document.querySelector('.btn-block');


// btn_block.addEventListener('click', function (event) {
//   // if (event.target && event.target.tagName == 'BUTTON') { //проверка на тег (тег писать большими буквами)
//   // if (event.target && event.target.nodeName == 'BUTTON') { //тоже самое что и выше (тег писать большими буквами)
//   // if (event.target && event.target.className == 'first') { //проверка есть ли класс у данного объекта
//   if (event.target && event.target.matches('button.first')) { //метод сотрудников google) (ищем в кнопке класс first)
//     console.log('Hello!');
//   }
// });

// при таком вызове будет ошибка
// btns.addEventListener('click', function () {
//   console.log('Hello!');
// });







// let timerId = setTimeout(log, 2000);

// function log() {
//   console.log('Hello!');
//   timerId = setTimeout(log, 2000);
// }


// myAnimation();

// let requestId = requestAnimationFrame(myAnimation)

// function myAnimation() {
  //   console.log('сработала функция');
  //   let elem = document.querySelector(".box"),
  //       pos = 0;
  //       // id = setInterval(frame, 10);
  
  //   function frame() {
    //     console.log('сработала функция 1');
    //     if (pos == 250) {
//       // clearInterval(id);
//       cancelAnimationFrame(requestId);
//     } else {
  //         pos++;
  //         elem.style.top = pos + 'px';
  //         elem.style.left = pos + 'px';
  //       }
  //   };


let str = document.querySelector(".str"),
    bck = document.querySelector(".bck"),
    stp = document.querySelector(".stp");
  
let elem = document.querySelector(".box"),
    pos = 0,
    fl1 = 0,
    fl2 = 0;

function frame() {
  console.log('сработала функция 1');
  if (pos >= 300) {
    fl1 = 0;
    cancelAnimationFrame(requestId1);
  } else {
      fl1 = 1;
      console.log('теест');
      // pos++;
      pos = pos + 2;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
      requestId1 = requestAnimationFrame(frame);
    }

  // if (fl == 1) {
  //   pos--;
  //   elem.style.top = pos + 'px';
  //   elem.style.left = pos + 'px';
  //   requestId = requestAnimationFrame(frame);
  // } else {
  //     fl = 0;
  //     cancelAnimationFrame(requestId);
  //   }
  
  

  // if (fl == 1 && pos == 0) {
  //   fl = 0;
  //   cancelAnimationFrame(requestId);
  // } else {
  //     pos--;
  //     elem.style.top = pos + 'px';
  //     elem.style.left = pos + 'px';
  //     requestId = requestAnimationFrame(frame);
  // }
  
};

function frame1() {
  console.log('сработала функция 2');
  if (pos <= 0) {
    fl2 = 0;
    cancelAnimationFrame(requestId2);
  } else {
      fl2 = 1;
      console.log('теест');
      // pos--;
      pos = pos - 2;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
      requestId2 = requestAnimationFrame(frame1);
    }
};

str.addEventListener('click', () => {
  // cancelAnimationFrame(requestId2);
  requestId1 = requestAnimationFrame(frame);
});
bck.addEventListener('click', () => {
  // cancelAnimationFrame(requestId1);
  requestId2 = requestAnimationFrame(frame1);
});
stp.addEventListener('click', () => {
  if (fl1 == 1) {
    fl1 = 0;
    cancelAnimationFrame(requestId1);
  };

  if (fl2 == 1) {
    fl2 = 0;
    cancelAnimationFrame(requestId2);
  };

});
