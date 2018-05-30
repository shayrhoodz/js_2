mainList = {
  budget : Number,
  nameStore : String,
  shopGoods : ["One", "Two", "Three"],
  employers : {
  },
  open : true
};


mainList.budget = +prompt("Ваш бюджет за месяц?");
mainList.nameStore = prompt("Название Вашего магазина?");

mainList.shopGoods[0] = prompt("Какой тип товара будем продавать? первый");
mainList.shopGoods[1] = prompt("Какой тип товара будем продавать? второй");
mainList.shopGoods[2] = prompt("Какой тип товара будем продавать? третий");


 

console.log("Тут бюджет " + mainList.budget);
console.log("Тут название магазина " + mainList.nameStore);
console.log("Тип товаров " + mainList.shopGoods[0] + " | " 
  + mainList.shopGoods[1] + " | " + mainList.shopGoods[2] + " | " );

alert("Бюджет на день: " + mainList.budget / 30);

console.log("Проверка типа " + typeof(mainList.open));

