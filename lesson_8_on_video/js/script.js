let box = document.querySelector('.box'),
    width = box.clientWidth,
    height = box.clientHeight,
    btn = document.getElementsByTagName('button')[0];




// btn.onclick = function() {
//   // box.style.height = box.scrollHeight + 'px';
//   console.log(box.scrollTop);
// };

console.log(document.documentElement.scrollTop); // сколько пикселей прокручено на странице

// document.documentElement.scrollTop = 0; // вернет страницу к началу

console.log(document.documentElement.clientWidth); // размер какой виден пользователю (консоль тоже отнимаем размер)
console.log(document.documentElement.clientHeight);

// window.scrollBy(0,0); // смещает страницу по координатам от текущего положения (по горизонтали, по вертикали)

window.scrollTo(0,0); // перемещает страницу в ту границу куда указали от начала страницы

// console.log(box.getBoundingClientRect());
// console.log(box.getBoundingClientRect().top); // если надо получить конкретный параметр
// console.log(width);
// console.log(height);

