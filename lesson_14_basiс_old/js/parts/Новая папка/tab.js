function tab() {
    
  let tab = document.getElementsByClassName('info-header-tab'),
      tabContent = document.getElementsByClassName('info-tabcontent'),
      info = document.getElementsByClassName('info-header')[0],
      infotab = document.querySelector('.info');      

  function hideTabContent(a) {
    for (let i = a; i < tabContent.length; i++) {
      tabContent[i].classList.remove('show');
      tabContent[i].classList.add('hide');
      
    }
  }

  hideTabContent(1);


  function showTabContent(b) {
    if( tabContent[b].classList.contains('hide')){
      hideTabContent(0);
      tabContent[b].classList.remove('hide');
      tabContent[b].classList.add('show');
    }
  }

  info.addEventListener('click', (event) => {
    let target = event.target;
    console.log('при нажатии' + target);
    console.log(target.className);
    if(target.className == 'info-header-tab') {
      for (let i = 0; i < tab.length; i++) {
        if (target == tab[i]) {
          console.log('в цикле' + tab[i] + ' | ' + i);
          showTabContent(i);
          break;          
        }        
      }
    };
  });

}

module.exports = tab;