function calc() {
  
          let persons = document.getElementsByClassName('counter-block-input')[0],
              restDays = document.getElementsByClassName('counter-block-input')[1],
              place = document.getElementById('select'),
              totalValue = document.getElementById('total'),
              personsSum = 0,
              daysSum = 0,
              total = 0;

          totalValue.innerHTML = 0;

          persons.addEventListener('change', function() {
            personsSum = +this.value;
            total = (daysSum + personsSum) * 4000;
            // totalValue.innerHTML = total;
            if (restDays.value == '' || persons.value == '') {
              totalValue.innerHTML = 0
            } else {
              totalValue.innerHTML = total;
            }

            if (personsSum == '' || personsSum == /[^\d]/g) {
              persons.value = '';
              // console.log('пустой или не тот символ'); 
            }

          });

          restDays.addEventListener('change', function() {
            daysSum = +this.value;
            total = (daysSum + personsSum) * 4000;
            // totalValue.innerHTML = total;
            if (restDays.value == '' || persons.value == '') {
              totalValue.innerHTML = 0
            } else {
                totalValue.innerHTML = total;
              }         

          });

          // restDays.onkeyup = numberTst;

          // function numberTst() {
          //   console.log('проверка ' + restDays.value);

          //   restDays.value = restDays.value.replace(/[^\d]/g, '')

          //   // if (restDays.value == /[^\d]/g) {
          //   //   restDays.value = '';
          //   // };

          // };

          persons.addEventListener('keyup', () => {
            console.log('проверка ' + persons.value);
            persons.value = persons.value.replace(/[^\d]/g, '')
          });
          
          restDays.addEventListener('keyup', () => {
            console.log('проверка ' + restDays.value);
            restDays.value = restDays.value.replace(/[^\d]/g, '')
          });


          place.addEventListener('change', function () {
            if (restDays.value == '' || persons.value == '') {
              totalValue = 0;
            } else {
                let a = total;
                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
            }
          });

}

module.exports = calc;