mainList = {
  budget : Number,
  nameStore : String,
  shopGoods : [],
  employers : {},
  open : false
};


mainList.budget = +prompt("Ваш бюджет за месяц?");
mainList.nameStore = prompt("Название Вашего магазина?");
let time = 19;

for (let i = 0; i < 5; i++) {

  let a = prompt("Какой тип товара будем продавать? " + i);
  
  if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
    console.log('Все верно' + i);
    mainList.shopGoods[i] =  a;
  } else {
    // ?? домашнее  задание
    i = i - 1;
  }

}

// let i = 0;

// while (i < 5) {

//   let a = prompt("Какой тип товара будем продавать?" + i);
  
//   if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
//     console.log('Все верно');
//     mainList.shopGoods[i] =  a;
//   } else {
//     // ?? домашнее  задание
//     i = i - 1;
//   }
//   i++;

// }


// do {

//   let a = prompt("Какой тип товара будем продавать?" + i);
  
//   if ((typeof(a)) === 'string' && (typeof(a)) !== null && a != '' && a.length < 50) {
//     console.log('Все верно');
//     mainList.shopGoods[i] =  a;
//   } else {
//     // ?? домашнее  задание
//     i = i - 1;
//   }
//   i++;

// }

// while (i < 5);

if(time < 0) {
  console.log('Такого просто не может быть');
} else if(time > 8 && time < 20) {
  console.log('Время работать!');
  } else if(time < 24) {
    console.log('Уже слишком поздно!');
    } else {
      console.log('В сутках только 24 часа');
    }


 

// console.log("Тут бюджет " + mainList.budget);
// console.log("Тут название магазина " + mainList.nameStore);
// console.log("Тип товаров " + mainList.shopGoods[0] + " | " 
//   + mainList.shopGoods[1] + " | " + mainList.shopGoods[2] + " | " );

alert("Бюджет на день: " + mainList.budget / 30);

console.log(mainList);


