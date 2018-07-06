function img() {

  let worksWrap = document.querySelector('.works'),
      imgA = worksWrap.getElementsByTagName('a'),
      // img = worksWrap.getElementsByTagName('img');
      img = worksWrap.querySelectorAll('.mini');

  console.log(img);

  // const links = {
  //   link1 : '../../img/our_works/big_img/1.png',
  //   link2 : "../../img/our_works/big_img/2.png"
  // };

  let links = [
              '../../img/our_works/big_img/1.png',
              '../../img/our_works/big_img/2.png',
              '../../img/our_works/big_img/3.png',
              '../../img/our_works/big_img/4.png',
              '../../img/our_works/big_img/5.png',
              '../../img/our_works/big_img/6.png',
              '../../img/our_works/big_img/7.png',
              '../../img/our_works/big_img/8.png'
              ]

  // console.log(links[0]);

  
  worksWrap.addEventListener('click', (e) => {
    e.preventDefault();
    let target = e.target;
        // div;
    
    console.log(target);

    for (let i = 0; i < img.length; i++) {
      if (target == img[i]) {
        console.log('эта картинка');
        
        let div = document.createElement('div'),
            img = document.createElement('img');

        // img.src = "../../img/our_works/big_img/1.png";
        img.src = links[i];
        console.log('номер картинка:' + i);

        div.classList.add('black');
        img.classList.add('bigPic');

        if (target.className !== 'bigPic') {
          console.log('не нажали на картинку');
          worksWrap.appendChild(div);
          div.appendChild(img);
  
          img.style.display = 'block';
          img.style.width = '500px';
          img.style.margin = '0 auto';
          img.style.marginTop = '5%';
          // img.style.top = '50%'
          // img.style.left = '50%'
          // img.style.transform = 'translate(-50%, -50%)';
          div.style.display = 'block';
          div.style.overflow = 'hidden';
          div.style.position = 'fixed';
          div.style.width = '100%';
          div.style.height = '100%';
          div.style.top = '50%';
          div.style.left = '50%';
          div.style.transform = 'translate(-50%, -50%)';
          div.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
          div.style.zIndex = '100';
          // div.style.backgroundImage = "url('../../img/our_works/big_img/1.png')";
        }
        
      }      
    };

    if (target.classList.contains('black')) {
      let div = worksWrap.getElementsByClassName('black')[0];
      div.remove();
    };


    // console.log(imgA);

  });

}

module.exports = img;