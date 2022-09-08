$(function(){

  $('.drawer__open').on('click', function (e) {
    e.preventDefault();
   $(this).toggleClass('is-open');
   $('.drawer__menu').toggleClass('is-open');
   //ここにドロワーの記述
   return false;
  });

  $( window ).on( 'scroll', function() {
    if( $( this ).scrollTop() > $( '#top' ).outerHeight() / 2 ) {
      $( 'header' ).addClass( 'is-scrolled' );
    } else {
      $( 'header' ).removeClass( 'is-scrolled' );
    }
  });

  $('a[href^="#"]').on('click',function(e){
    e.preventDefault();
    // hrefで指定されたidを取得
    let href = $(this).attr("href");
    let target = $(href === "#" ? 'html' : href);
    // headerの高さを取得
    let header = $('header').innerHeight();
    // ページのトップを基準にターゲットの位置を取得
    let position = $(target).offset().top - header;
    console.log(position);
    $('.drawer__open').toggleClass('is-open');
    $('.drawer__menu').toggleClass('is-open');
    $("html, body").animate({
        scrollTop: position
     },00
    );
    return false;
  });

  new WOW().init();

    $('input , checkbox' ).on('change', function(){
      var name = $('input[type="text"]').val();
      var mail = $('input[type="email"]').val();
      console.log(name);
      console.log(mail);

      if( 
      name !== "" &&
      mail !== "")
      {
        $('.contact-btn').prop('disabled' , false);
      } else{
        $('.contact-btn').prop('disabled' , true);
      }

    })

  //googleフォーム
  let $form = $( '#js-form' )
  $form.submit(function(e) { 
    $.ajax({ 
     url: $form.attr('action'), 
     data: $form.serialize(), 
     type: "POST", 
     dataType: "xml", 
     statusCode: { 
        0: function() { 
          //送信に成功したときの処理 
          $form.slideUp()
          $( '#js-success' ).slideDown()
        }, 
        200: function() { 
          //送信に失敗したときの処理 
          $form.slideUp()
          $( '#js-error' ).slideDown()
        }
      } 
    });
    return false; 
  }); 

  
})