// let item = document.getElementsByClassName('menu-item'),
//     menu = document.getElementsByClassName('menu');
// menu[0].insertBefore(item[2], item[1]);


let item = document.querySelectorAll('.menu-item'),
    item1 = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.getElementById('title'),
    adv = document.getElementsByClassName('adv');
    prompt1 = document.querySelector('.prompt');

    
// console.log(item1);

menu.insertBefore(item[2], item[1]);

li.classList.add("menu-item");
// li = document.getElementsByClassName('menu-item')[0];
// li = item[0];

li.textContent = 'Пятый пункт';

menu.appendChild(li);

document.body.style.backgroundImage = "url('./img/apple_true.jpg')";

title.textContent = 'Мы продаем только подлинную технику Apple'

adv[0].remove();

let a = prompt('Что вы думаете о техике Apple?');
prompt1.textContent = a;

console.log(item);
// console.log(menu);
// console.log(li);
// console.log(menu);
// console.log(item);
// console.log(adv);
// console.log(a);



