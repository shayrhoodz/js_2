function modal() {
  
  let more = document.querySelector('.more'),
      overlay = document.querySelector('.overlay'),
      close = document.querySelector('.popup-close'),
      descrbtn = document.getElementsByClassName('description-btn');

  // console.log(infotab);

  // infotab.addEventListener('mouseover', () => {
  //   // console.log('навел');
  // });
  // infotab.addEventListener('mouseover', () => {
  //   // console.log('убрал');
  // });


  function tst() {
    for (let i = 0; i < descrbtn.length; i++) {
      // console.log('тест');
      descrbtn[i].addEventListener('click', function () {
        this.classList.add('more-splash');
        overlay.style.display = 'block';
        document.body.style.overflow = 'hidden';
      });
    };
  };
  
  setInterval(tst, 1000);
  // tst();

  // descrbtn[1].addEventListener('click', function () {
  //   this.classList.add('more-splash');
  //   overlay.style.display = 'block';
  //   document.body.style.overflow = 'hidden';
  //   console.log(descrnumb);
  // });

  more.addEventListener('click', function () {
    console.log(this);
    this.classList.add('more-splash');
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    overlay.style.display = 'none';
    more.classList.remove('more-splash');
    document.body.style.overflow = '';
  });

}

module.exports = modal;