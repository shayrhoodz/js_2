mainList = {
  budget : Number,
  nameStore : String,
  shopGoods : [],
  employers : {},
  open : false,
  discount: false,
  shopItems: [],
  chooseGoods: function chooseGoods() {
    for (let i = 0; i < 5; i++) {
  
      let a = prompt("Какой тип товара будем продавать? " + i, '');
      
      if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '' && a.length < 50) {
        console.log('Все верно' + i);
        mainList.shopGoods[i] =  a;
      } else {
        // ?? домашнее  задание
        i = i - 1;
        }
  
    }
  },
  workTime: function workTime(time) {
    if(time < 0) {
      console.log('Такого просто не может быть');
    } else if(time > 8 && time < 20) {
      console.log('Время работать!');
      mainList.open = true;
      } else if(time < 24) {
        console.log('Уже слишком поздно!');
        } else {
          console.log('В сутках только 24 часа');
          }
  },
  dayBudget: function dayBudget() {
    alert("Бюджет на день: " + mainList.budget / 30);
  },
  makeDiscount: function makeDiscount() {
    if (mainList.discount == true) {
      mainList.budget = (mainList.budget/100)*80;
    }
  },
  hireEmployers: function hireEmployers() {
    for (let i = 0; i < 4; i++) {
      let a = prompt("Имя сотрудника", '');
      if ((typeof(a)) === 'string' && (typeof(a)) != null && a != '') {
        mainList.employers[i] = (i + 1) + ' - ' + a;    
      } else {
        i = i - 1;
        }
    }      
  },
  chooseShopItems: function chooseShopItems() {
    let items = prompt("Перечислите через запятую товары", "");

    while ((typeof(items)) !== 'string' && (typeof(items)) != null && items != '') {
      items = prompt("Перечислите через запятую товары", "");
    }
    mainList.shopItems = items.split(",");
    mainList.shopItems.push(prompt("Подождите, еще ", ""));
    mainList.shopItems.sort();
    mainList.shopItems.forEach(function(item,i,arr) {
      // alert(i + ": " + item + "(массив: " + arr + ")")
      document.writeln("У нас вы можете купить: " + (i + 1) + " " + item + "<br>");
    });
    for( let key in mainList.shopItems) {
      console.log("Наш магазин включает в себя: " + key + " " + mainList.shopItems[key]);
    }    
  }
};



function start() {
  mainList.budget = +prompt("Ваш бюджет за месяц?", '');

  while (isNaN(mainList.budget) || mainList.budget == "" || mainList.budget == null) {
    mainList.budget = +prompt("Ваш бюджет за месяц?", '');
  }

  mainList.nameStore = prompt("Название Вашего магазина?", '').toUpperCase();
  time = 19;
}

// start();


console.log(mainList);



