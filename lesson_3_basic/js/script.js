mainList = {
  budget : Number,
  nameStore : String,
  shopGoods : [],
  employers : {},
  open : false,
  discount: false
};


//запись сотрудников в базу
function writeEmployee() {

  for (let i = 0; i < 4; i++) {

    let a = prompt("Имя сотрудника");
    if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
      mainList.employers[i] = (i + 1) + ' - ' + a;    
    } else {
      i = i - 1;
      }
  }
    
}
// writeEmployee();


function start() {
  mainList.budget = +prompt("Ваш бюджет за месяц?");

  while (isNaN(mainList.budget) || mainList.budget == "" || mainList.budget == null) {
    mainList.budget = +prompt("Ваш бюджет за месяц?");
  }

  mainList.nameStore = prompt("Название Вашего магазина?").toUpperCase();
  time = 19;
}

// start();

function chooseGoods() {
  for (let i = 0; i < 5; i++) {

    let a = prompt("Какой тип товара будем продавать? " + i);
    
    if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
      console.log('Все верно' + i);
      mainList.shopGoods[i] =  a;
    } else {
      // ?? домашнее  задание
      i = i - 1;
    }

    workTime(23);
  }
}

// chooseGoods();


function workTime(time) {
  if(time < 0) {
    console.log('Такого просто не может быть');
  } else if(time > 8 && time < 20) {
    console.log('Время работать!');
    } else if(time < 24) {
      console.log('Уже слишком поздно!');
      } else {
        console.log('В сутках только 24 часа');
        }
}

workTime(23);
 

// console.log("Тут бюджет " + mainList.budget);
// console.log("Тут название магазина " + mainList.nameStore);
// console.log("Тип товаров " + mainList.shopGoods[0] + " | " 
//   + mainList.shopGoods[1] + " | " + mainList.shopGoods[2] + " | " );

function moneyForDay() {
  alert("Бюджет на день: " + mainList.budget / 30);
}

moneyForDay();

function discoundPrice(price) {
  let percent = 20, // процент
      amoundPercent = Number; // сумма от процента
  
  amoundPercent = price * percent / 100;
  console.log("Сумма со кидкой: " + (price - amoundPercent));
}

if(mainList.discount) {
  discoundPrice(100);
};


console.log(mainList);



