let open_btn = document.getElementById('open-btn'),
    name_value = document.getElementsByClassName('name-value')[0],
    budget_value = document.getElementsByClassName('budget-value')[0],
    goods_value = document.getElementsByClassName('goods-value')[0],
    items_value = document.getElementsByClassName('items-value')[0],
    employers_value = document.getElementsByClassName('employers-value')[0],
    discount_value = document.getElementsByClassName('discount-value')[0],
    isopen_value = document.getElementsByClassName('isopen-value')[0],

    goods_item = document.getElementsByClassName('goods-item'),
    btn = document.getElementsByTagName('button'),
    goods_btn = document.getElementsByTagName('button')[1],
    budget_btn = document.getElementsByTagName('button')[2],
    employers_btn = document.getElementsByTagName('button')[3],
    choose_item = document.querySelector('.choose-item'),
    time_value = document.querySelector('.time-value'),
    main = document.getElementsByClassName('main-info')[0],
    count_budget_value = document.querySelector('.count-budget-value'),
    hire_employers_item = document.querySelectorAll('.hire-employers-item');

let money,
    name,
		price;




open_btn.addEventListener ('click', () => {
	
	if (time_value.value == '') {
		alert('Поле "Сколько сейчас времени" пустое!');
	} else {
			money = +prompt("Ваш бюджет за месяц?", '');

			while (isNaN(money) || money == "" || money == null) {
					money = +prompt("Ваш бюджет за месяц?", '');
			}

			budget_value.textContent = money;

			budget_btn.removeAttribute("disabled");

			if (money > 30000) {
				mainList.discount = true;
			}
			
			name_value.textContent = prompt("Название Вашего магазина?", '').toUpperCase();
			// name = prompt("Название Вашего магазина?", '').toUpperCase();

			if (mainList.discount == true) {
				discount_value.style.backgroundColor = 'green';
				alert('У вас имеется скидка!');
			} else {
					discount_value.style.backgroundColor = 'red';		
				};
			
			if (mainList.open == true) {
				isopen_value.style.backgroundColor = 'green';
			} else {
					isopen_value.style.backgroundColor = 'red';		
				};		
		};
});

goods_btn.addEventListener ('click', () => {
	for (let i = 0; i < goods_item.length; i++) {	
		let a = goods_item[i].value;		
		if ((typeof(a)) === 'string' && (typeof(a)) != null && a.length < 50) {
			console.log('Все верно' + i);
			mainList.shopGoods[i] =  a;
			goods_value.textContent = mainList.shopGoods;
		} else {
				i = i - 1;
			}	
	}
});


// проверка полей на пустоту для кнопок
function refresh() {
	
	for (let i = 0; i < goods_item.length; i++) {
		if (goods_item[i].value != "" && mainList.open) {
			// console.log("заполнен хоть один");
			goods_btn.removeAttribute("disabled");
		} else {
				// console.log("не заполнен хоть один");
			}
	};

	for (let i = 0; i < hire_employers_item.length; i++) {
		if (hire_employers_item[i].value != "" && mainList.open && isNaN(hire_employers_item[i].value)) {
			// console.log("заполнен хоть один");
			employers_btn.removeAttribute("disabled");
		} else {
				// console.log("не заполнен хоть один");
			};
		if (!/^[0-9 ,.\-:"()]*?$/.test(hire_employers_item[i].value)) {
			// console.log("истинно");
		} else {
				// console.log("ложно");
				hire_employers_item[i].value = '';
			};
		
		
	};
	
	
};

setInterval(refresh, 1000);

choose_item.addEventListener('change', () => {
	let items = choose_item.value;
	if (items != "" && isNaN(items)) {
		mainList.shopItems = items.split(",");
		mainList.shopItems.sort();
		
		items_value.textContent = mainList.shopItems;

	}
});

time_value.addEventListener('change', () => {
	let time = time_value.value;
	if(time < 0) {
		time_value.value = '';
		console.log('Такого просто не может быть');
		alert('Введите корректное время (от 0 до 23)');		
		mainList.open = false;
	} else if(time > 8 && time < 20) {
			console.log('Время работать!');
			mainList.open = true;
		} else if(time < 24) {
				console.log('Уже слишком поздно!');
				mainList.open = false;
			} else {
					console.log('В сутках только 24 часа');
					alert('Введите корректное время (от 0 до 23)');
					time_value.value = '';
					mainList.open = false;
				};
	
	// if (mainList.open == true) {
	// 	isopen_value.style.backgroundColor = 'green';
	// } else {
	// 		isopen_value.style.backgroundColor = 'red';		
	// };

});

budget_btn.addEventListener('click', () => {
	
	if (budget_value.textContent != '') {
		count_budget_value.value = money / 30;
	}

});

employers_btn.addEventListener('click', () => {
	employers_value.textContent = '';
	for (let i = 0; i < hire_employers_item.length; i++) {

		let name = hire_employers_item[i].value;
		mainList.employers[i] = name;		
		employers_value.textContent += mainList.employers[i] + ', ';
	}; 
});



const mainList = {
	budget : money,
	nameStore : name,
	shopGoods : [],
	employers : {},
	open : false,
	discount: false,
	shopItems: [],
	makeDiscount: function makeDiscount() {
		if (mainList.discount == true) {
			mainList.budget = (mainList.budget/100)*80;
		}
	}
};
	

if (mainList.open == false) {
	count_budget_value.setAttribute("readonly","true");
	goods_btn.setAttribute("disabled","true");
	budget_btn.setAttribute("disabled","true");
	employers_btn.setAttribute("disabled","true");
}
  
//value если обращаемся к элементу через querySelector
//textContent если обращаемся к элементу через getElementsByClassName