$(document).ready(function() {
  

  $('.main_btna').on('click', function () {
    console.log(1);

    // $('.modal').css(
    //   {
    //     'display': 'block'
    //   });
      
    overlayShow();
  });

  $('a:eq(8)').on('click', function () {
    overlayShow();
  });
  
  $('.main_btn').on('click', function () {
    overlayShow();
  });
  

  function overlayShow() {
      $('.overlay').animate(
        {
          opacity: 'toggle'
        }, 'slow');
      $('.modal').animate(
        {
          marginTop: 'show',
          height: 'show'
        }, '5000');
  };

  function overlayHide() {
    $('.modal').animate(
      {
        marginTop: 'hide',
        // opacity: 'toogle',
        height: 'hide'
      }, '5000');
    $('.overlay').animate(
      {
        opacity: 'toggle'
      }, 'slow');
  };

  $('.close').on('click', function () {

    // $('.modal').animate(
    //   {
    //     marginTop: 'hide',
    //     // opacity: 'toogle',
    //     height: 'hide'
    //   }, '5000');

    // $('.overlay').animate(
    //   {
    //     opacity: 'toggle'
    //   }, 'slow');

    overlayHide();

  });

});