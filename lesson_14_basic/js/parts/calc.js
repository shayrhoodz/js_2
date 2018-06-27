function calc() {
  
          let persons = document.getElementsByClassName('counter-block-input')[0],
              restDays = document.getElementsByClassName('counter-block-input')[1],
              place = document.getElementById('select'),
              totalValue = document.getElementById('total'),
              personsSum = 0,
              daysSum = 0,
              total = 0;

          totalValue.innerHTML = 0;


          function totalPrice(par1, par2, par3) {
            if (par1 == '' || par2 == '' || par1 == 0 || par2 == 0) {
              console.log('все по 0');
              return 0;
            } else {
              console.log('Параметр 1 ' + par1);
              console.log('Параметр 2 ' + par2);
              return (par1 + par2) * 4000 * par3;
            }
          }

          persons.addEventListener('change', function() {
            
            personsSum = +this.value;
            
            totalValue.innerHTML = totalPrice(personsSum, daysSum, place.value);


            // console.log(" change 1 " + place.value);
            // total = (daysSum + personsSum) * 4000 * place.value;
            // // totalValue.innerHTML = total;
            // if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
            //   totalValue.innerHTML = 0
            // } else {
            //   totalValue.innerHTML = total;
            // }

            // if (personsSum == '' || personsSum == /[^\d]/g) {
            //   persons.value = '';
            //   // console.log('пустой или не тот символ'); 
            // }

          });

          restDays.addEventListener('change', function() {
            
            daysSum = +this.value;

            totalValue.innerHTML = totalPrice(personsSum, daysSum, place.value);


            // console.log(" change 2 " + place.value);
            // total = (daysSum + personsSum) * 4000 * place.value;
            // // totalValue.innerHTML = total;
            // if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
            //   totalValue.innerHTML = 0
            // } else {
            //     totalValue.innerHTML = total;
            //   }      
            
            // if (daysSum == '' || daysSum == /[^\d]/g) {
            //   restDays.value = '';
            //   // console.log('пустой или не тот символ'); 
            // }

          });

          persons.addEventListener('keyup', () => {
            // console.log('проверка ' + persons.value);
            persons.value = persons.value.replace(/[^\d]/g, '')
          });
          
          restDays.addEventListener('keyup', () => {
            // console.log('проверка ' + restDays.value);
            restDays.value = restDays.value.replace(/[^\d]/g, '')
          });


          place.addEventListener('change', function () {

            totalValue.innerHTML = totalPrice(personsSum, daysSum, place.value);

            // if (restDays.value == '' || persons.value == '') {
            //   totalValue = 0;
            //   console.log('поля пустые и общее 0');
            //   console.log(total);
            // } else {
            //     let a = total;
            //     totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            //   console.log('поля не пустые и будет коэффициент ' + this.options[this.selectedIndex].value);
            //   console.log(total);
            // }
          });

}

module.exports = calc;