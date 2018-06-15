
let age = document.getElementById('age');
  
  function showUser(surname, name) {
    alert("Пользователь " + surname + " " + name + ", его возраст " + this.value);
    console.log(this);
  };
  
  // console.log(showUser.call(age, 'one', 'two'));

  // showUser();
  showUser.call(age, 'one', 'two');


