$(document).ready(function() {
  

  $('.main_btna').on('click', function () {
    console.log(1);

    // $('.modal').css(
    //   {
    //     'display': 'block'
    //   });
      
    overlayShow();
    // overlayShowAlt(); 

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
          height: 'show',
          width: 'show'
        }, '5000');
  };

  function overlayShowAlt() {
    $('.overlay').fadeIn();
    $('.modal').slideDown();
  };

  function overlayHideAlt() {
    $('.modal').slideUp();
    $('.overlay').fadeOut();
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

    overlayHide();
    // overlayHideAlt();

  });

  let input = $('input'),
      btn = $('button:eq(1)');

  btn.on('click', function () {

    if (input[0].value == '' || input[1].value == '' || input[2].value == '' || !input[3].checked) {
      console.log(true);
    } else {
        console.log(false);

        // $.ajax({
        //   url: 'server.php',
        //   success: function(data){
        //     // alert('Load was performed.');
        //     alert(data);
        //     console.log(data);            
        //   }        
        // });

        $.get(
          "/server.php",
          {
            param1: input[0].value,
            param2: input[1].value,
            param3: input[2].value
          },
          onAjaxSuccess
        );
        function onAjaxSuccess(data) {
          alert(data);
          // console.log(data);
        };

        for (let i = 0; i < input.length; i++) {
          input[i].value = '';                 
          input[i].checked = false;         
        }

        overlayHide();

      }

    // e.preventDefault();
    // console.log('123');
    
    // $.get(

    //   "/server.php",
    //   {
    //     param1: "param pam pam",
    //     param2: 2
    //   },
    //   onAjaxSuccess
    // );

    // function onAjaxSuccess(data) {
    //   // alert(data);
    //   console.log(data);
    // };

    // $.ajax({
    //   url: 'server.php',
    //   success: function(data){
    //     // alert('Load was performed.');
    //     alert(data);
    //     console.log(data);
    //   }
    // });

  });


  console.log(input);
  console.log(btn);


});