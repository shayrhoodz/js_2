let request = new XMLHttpRequest();
// 1) Создаем объект запроса

request.open("GET", 'server.php', true, login, password);
// 2) Настройка запроса

request.send()
// 3) Отправка запроса

request.status;
request.statusText;
request.responseText;
request.readyState;










// let option = {
//   width: 1366,
//   height: 768,
//   background: 'red',
//   font: {
//     size: "16px",
//     color: "#fff"
//   }
// }


// // расшифровать формат JSON
// // при помощи этой конструкции можно создавать глубокии копии объектов, будут содержать все методы и свойства подопотного
// console.log(JSON.parse(JSON.stringify(option)));


// // преобразование в формат JSON
// console.log(JSON.stringify(option));