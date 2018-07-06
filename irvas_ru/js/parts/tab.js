function tab() {

  let noClick = document.querySelectorAll('.no_click'),
      decor = document.querySelector('.decoration'),
      decorItem = document.getElementsByClassName('decoration_item'),
      decorA = document.querySelectorAll('.no_click>a'),
      decorContent = document.querySelectorAll('.decor_content');

  // console.log(noClick);
  // console.log(decorItem);
  // console.log(decorContent);

  function showTabClass(a) {
    for (let t = 0; t < noClick.length; t++) {
      noClick[t].classList.remove('after_click');   
      decorContent[t].style.display = 'none';
    }
    noClick[a].classList.add('after_click');
    decorContent[a].style.display = 'block';
  }

  decor.addEventListener('click', (event) => {
    let target = event.target;
    // console.log('при нажатии ' + target);
    // console.log(target.className);
    if (target.parentElement.classList.contains('no_click')) {
      // console.log('содержит но клик');
      for (let i = 0; i < decorA.length; i++) {
        if (target == decorA[i]) {
          showTabClass(i);
          break;
        }        
      }      
    }
  });

  let glazingSlider = document.querySelector('.glazing_slider'),
      glazingSliderA = document.querySelectorAll('.glazing_block>a'),
      glazingRow = document.querySelectorAll('.glazing-row');

  // console.log(glazingRow);

  glazingSlider.addEventListener('click', (event) => {
    let target = event.target;
    if (target.parentElement.classList.contains('glazing_block')) {
      for (let i = 0; i < glazingSliderA.length; i++) {
        if (target == glazingSliderA[i]) {
          for (let t = 0; t < glazingSliderA.length; t++) {
            glazingSliderA[t].classList.remove('active');   
            glazingRow[t].style.display = 'none';
          }
          glazingSliderA[i].classList.add('active');
          glazingRow[i].style.display = 'block';
          break;
        }        
      }      
    }
  });

}

module.exports = tab;