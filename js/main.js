
$(function(){ 
  new WOW().init();
  $(".header-nav__open").click(()=>{
    $(".header-nav").slideToggle('open');
  })
  
  $('.process-cards').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.process-nav',
    swipe: false,
    vertical: true,
  });
  $('.process-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.process-cards',
    focusOnSelect: true,
    swipe: false
  });

  if($( window ).width() <= 1080){
    $(".process-card-close").removeClass("process-card-close")
    $('.process-nav').slick('unslick')
    $('.process-cards').slick('unslick')
    $('.intership-cards__item').addClass("wow fadeInLeft")
  }

  if($( window ).width() <= 480){
    $(".cost-table__title.month").text("зп мес. руб.")
    $(".cost-table__title.year").text("зп год руб.")
    $(".cost-table__last").text("найм руб.*")
    $(".wow").removeAttr("data-wow-delay")
  }

  $(window).on('resize', ()=>{
    if($( window ).width() <= 1080){
      $(".process-nav").hide();
      $('.process-cards').slick('unslick')
      $(".intership-cards__item").removeAttr("style")
      $(".intership-cards__text").removeAttr("style")
    }
  })

  $(".header-nav__item").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: ($($(this).attr('href')).offset().top - 50)
    }, 500);
  });
  
  if($( window ).width() >= 1080){
    $(window).on('scroll', function(e){
      if($(document).scrollTop() >= $(".intership-cards__way").offset().top - 500 && $(document).scrollTop() <= $(".intership-cards__way").offset().top + $(".intership-cards__way").height()){
        const height = $(".intership-cards__way").offset().top + $(".intership-cards__way").height();
        $(".intership-circle").css("offset-distance", (120 - ((height - $(document).scrollTop()) / height * 1000)) +'%')
        if ( (120 - (height - $(document).scrollTop()) / height * 1000) > 0 && (120 - (height - $(document).scrollTop()) / height * 1000) < 100){
          let percent = Math.floor(120 - (height - $(document).scrollTop()) / height * 1000)
          let percent_new;
          if (percent < 25 ){
            $(".intership-cards__item:nth-child(2)>p").css({
              "color": "#CC5039",
              "font-weight": "600"
            })
            $(".intership-cards__item:nth-child(2)").css('transform', 'scale(1.1)')
            $(".intership-cards__item:nth-child(3)>p").css({
              "color": "#000",
              "font-weight": "400"
            })
            $(".intership-cards__item:nth-child(3)").css('transform', 'scale(1)')
          }if (percent >= 25 && percent < 50){
            $(".intership-cards__item:nth-child(3)>p").css({
              "color": "#CC5039",
            "font-weight": "600"
          })
          $(".intership-cards__item:nth-child(3)").css('transform', 'scale(1.1)')
          $(".intership-cards__item:nth-child(2)>p").css({
            "color": "#000",
            "font-weight": "400"
          })
          $(".intership-cards__item:nth-child(2)").css('transform', 'scale(1)')
          $(".intership-cards__item:nth-child(4)>p").css({
            "color": "#000",
            "font-weight": "400"
          })
          $(".intership-cards__item:nth-child(4)").css('transform', 'scale(1)')
          }if (percent >= 50 && percent < 75){
            $(".intership-cards__item:nth-child(4)>p").css({
              "color": "#CC5039",
              "font-weight": "600"
            })
            $(".intership-cards__item:nth-child(4)").css('transform', 'scale(1.1)')
            $(".intership-cards__item:nth-child(3)>p").css({
              "color": "#000",
              "font-weight": "400"
            })
            $(".intership-cards__item:nth-child(3)").css('transform', 'scale(1)')
            $(".intership-cards__item:nth-child(5)>p").css({
              "color": "#000",
              "font-weight": "400"
            })
            $(".intership-cards__item:nth-child(5)").css('transform', 'scale(1)')
          }if (percent >= 75 && percent < 100){
          $(".intership-cards__item:nth-child(5)>p").css({
            "color": "#CC5039",
            "font-weight": "600"
          })
          $(".intership-cards__item:nth-child(5)").css('transform', 'scale(1.1)')
          $(".intership-cards__item:nth-child(4)>p").css({
            "color": "#000",
            "font-weight": "400"
          })
          $(".intership-cards__item:nth-child(4)").css('transform', 'scale(1)')
          }
        }
      }
    })
  }

  
  $(window).on('scroll', function(e){
    const heightComic = $(".comic").offset().top + $(".comic").height();
    if($(document).scrollTop() >= $(".comic").offset().top - 500 && $(document).scrollTop() <= heightComic){
      let percentComic = 102 - ((heightComic - $(document).scrollTop()) / 35)
      if(percentComic > 0 && percentComic <=25){
        $(".comic-replics-1").fadeIn()
        $(".mouth").css('transform', 'rotateX(0deg)')
        if($(".comic-woman").attr('style')){
          $(".comic-woman").css('left', 'calc(100% - 350px)');
          $(".comic-woman").css('animation', 'move-woman-left 0.5s linear 1 forwards' );
          $(".comic-cactus").css('animation', 'move-cactus-right 0.5s linear 1 forwards' )
        }

        $(".comic-replics-2").fadeOut(100)
        $(".comic-search").fadeOut(100);
      }
      if(percentComic > 25 && percentComic <=50){
        $(".comic-replics-2").fadeIn()
        $(".mouth").css('transform', 'rotateX(180deg)');
        $(".comic-cactus").fadeIn();
        if ($(".comic-woman").attr('style') == 'animation: 0.5s linear 0s 1 normal forwards running move-woman-left; left: calc(100% - 350px);'){
          $(".comic-woman").css('left', '100px' )
        }
        $(".comic-woman").css('animation', 'move-woman-right 0.5s linear 1 forwards' )
        $(".comic-cactus").css('animation', 'move-cactus-left 0.5s linear 1 forwards' )
        $(".comic-search").fadeIn(1000)
        $(".comic-replics-1").fadeOut(100)
        $(".comic-replics-3").fadeOut(100)
        $('.comic-people').fadeOut(100)
      }
      if(percentComic > 50 && percentComic <=75){
        $(".comic-replics-3").fadeIn(1000)
        $('.comic-people').fadeIn()
        if( $(".comic-woman").attr('style') == 'animation: 0.5s linear 0s 1 normal forwards running move-woman-right;' || $(".comic-woman").attr('style') == 'animation: 0.5s linear 0s 1 normal forwards running move-woman-right; left: 100px;'){
          $(".comic-woman").css('left', 'calc(100% - 350px)');
          $(".comic-woman").css('animation', 'move-woman-left 0.5s linear 1 forwards' )
        } 
        if($(".comic-woman").attr('style') == 'animation: 0.5s linear 0s 1 normal forwards running move-woman-right; left: calc(100% - 350px);' ){
          $(".comic-woman").css('left', 'calc(100% - 350px)');
          $(".comic-woman").css('animation', 'move-woman-right 0.5s linear 1 forwards' )
        }
        
        $(".comic-replics-2").fadeOut(100)
        $(".comic-replics-4").fadeOut(100)
        $(".comic-search").fadeOut(100)
        $(".comic-cactus").fadeOut(100);
        $('.comic-cost').fadeOut(100)
      }
      if(percentComic > 75 && percentComic <=100){
        $(".comic-replics-4").fadeIn()
        $('.comic-cost').fadeIn()
        if( $(".comic-woman").attr('style') == 'animation: 0.5s linear 0s 1 normal forwards running move-woman-left; left: calc(100% - 350px);'){
          $(".comic-woman").css('left', '100px');
          $(".comic-woman").css('animation', 'move-woman-right 0.5s linear 1 forwards' )
        } 
        $(".comic-replics-3").fadeOut(100)
        $('.comic-people').fadeOut(100)
        
      }
    }
      
  })

  
  $("#action-skills-1").slick({
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    infinite: true,
    fade: true,
    pauseOnHover: false,
    swipe: false
  })

  $("#phone").mask("+7 (999) 999-99-99");
  $("#phone-2").mask("+7 (999) 999-99-99");
  
  $("#form").on('submit', function(e){
    e.preventDefault()
    var fd = new FormData( document.getElementById("form") );
    $.ajax({
      url: './php/send.php',
      type: 'POST',
      contentType: false, 
      processData: false, 
      data: fd,
      success: function(msg){
        $("#form input").val('');
        alert("Спасибо за заявку!\nНаши специалисты скоро свяжутся с вами.")
      }
    });
  })
  $("#form-2").on('submit', function(e){
    e.preventDefault()
    var fd = new FormData( document.getElementById("form-2") );
    $.ajax({
      url: './php/send-2.php',
      type: 'POST',
      contentType: false, 
      processData: false, 
      data: fd,
      success: function(msg){
        $("#form-2 input").val('');
        alert("Спасибо за заявку!\nНаши специалисты скоро свяжутся с вами.")
      }
    });
  })
})


$(function () {
  let title = [], price = [], quant = [], priceCur, priceTotal = 0, elements = [];

  $('#comp-kqtegy8u a>div').addClass("TINKOFF_BTN_YELLOW");
  $('#comp-kqteh5ff a>div').addClass("TINKOFF_BTN_YELLOW");
  $('span[data-hook="CartItemDataHook.price"]').each(function (i) {
    priceCur = $(this).text();
    priceCur = priceCur.replace(',00 ₽', '')
    priceCur = priceCur.replace(/\u00a0/g, "")
    priceCur = priceCur.replace(' ', '');
    price.push(priceCur)
  })
  $('div[data-hook="CartItemDataHook.name"]').each(function (i) {
    title.push($(this).text())
  })
  $('div[data-hook="popover-element"] input').each(function (i) {
    quant.push($(this).val())
  })



  for (let i = 0; i < title.length; i++) {
    elements.push({
      name: title[i],
      price: price[i],
      quantity: quant[i]
    })
  }
  
  for (let i = 0; i < price.length; i++) {
    priceTotal += Number(price[i] * quant[i]);
  }

  if (priceTotal > 3000) {
    handleClickF();
    handleClickS();
  }


  $('div[data-hook="popover-element"] input').each(function(){
    $(this).click(() => {
      quant = [];
      $('div[data-hook="popover-element"] input').each(function (i) {
        quant.push($(this).val())
      })
      if (priceTotal > 3000) {
        handleClickF();
        handleClickS();
      }
    })
  })

  $('div[data-hook="popover-element"]').each(function(){
    $(this).click(() => {
      $('div[data-hook="popover-element"] input').each(function (i) {
        quant.push($(this).val())
      })
      if (priceTotal > 3000) {
        handleClickF();
        handleClickS();
      }
    })
  })

  function handleClickF() {
    return tinkoff.createDemoLink(
      {
        sum: priceTotal,
        items: elements,
        promoCode: 'installment_0_0_4_5',
        shopId: '5f974bc3-8350-4956-b56d-7f4d2c1060b5',
        showcaseId: 'd4e4fc52-4ba1-491e-8da1-c562d2a07930',
      }
    ).then((r) => {
      $('#comp-kqtegy8u a').attr('href', r);
    })
  }

  function handleClickS() {
    return tinkoff.createDemoLink(
      {
        sum: priceTotal,
        items: elements,
        promoCode: 'installment_0_0_6_6',
        shopId: '5f974bc3-8350-4956-b56d-7f4d2c1060b5',
        showcaseId: 'd4e4fc52-4ba1-491e-8da1-c562d2a07930',
      }
    ).then((r) => {
      $('#comp-kqteh5ff a').attr('href', r);
    })
  }

});

