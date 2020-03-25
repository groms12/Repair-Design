$(document).ready(function () {
    var modal = $('.modal');
    var modalBtn = $('[data-toggle=modal]');
    var closeBtn = $('.modal__close');

    new WOW().init();

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    document.addEventListener('keydown', function (e) {
        if (e.keyCode === 27) {
            modal.toggleClass('modal--visible');
        } 
    });

    $(document).click(function (e) {
        if ($(e.target).is('.modal')) {
            modal.toggleClass('modal--visible');
        }
    });

    // якорные ссылки в меню плавная прокрутка
    $(document).ready(function(){
        $(".menu").on("click","a", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    // плавная прокрутка кнопки листайте вниз
        $(".hero__scroll-down").on("click", function (event) {
            event.preventDefault();
            var id  = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({scrollTop: top}, 1500);
        });
    });

    $(document).scroll(function(){  //функция прокрутки страницы наверх
        if($(document).scrollTop() > 70) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }
    });
    
    // плавная прокрутка кнопки наверх
    $('.scroll-top').click(function(){
        $('html').animate({scrollTop: 0}, 1000);
        $('body').animate({scrollTop: 0}, 1000);
        // console.log($('body').scrollTop);
        return false;
    });


    // создание слайдеров
    var mySwiper = new Swiper ('.swiper-container-s1', {
        loop: true,
        preloadImages: false,
        lazy: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });

    var next = $('.swiper-button-next');
    var prev = $('.swiper-button-prev');
    var bullets = $('.swiper-pagination');

    bullets.css('left', prev.width() + 15);
    next.css('left', prev.width() + bullets.width() + 20); // воздух между элементами навигации

    var mySwiper1 = new Swiper ('.swiper-container-s2', {
        loop: true,
        preloadImages: false,
        lazy: true,
        slideToClickedSlide: true,
        pagination: {
            el: '.swiper-pagination1',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next1',
          prevEl: '.swiper-button-prev1',
        },
    });

    // 6 шагов перелистывание
    $('.slide-1').click(function(e) {
            e.preventDefault();
            $(".menu-swiper .active").removeClass('active');
            $(this).addClass('active');
            mySwiper1.slideTo( '1', 1000,false );
            $('.section-title__part1').removeClass('section-title__part--nonactive');
            $('.section-title__part2').addClass('section-title__part--nonactive');
            $('.section-title__part3').addClass('section-title__part--nonactive');
            $('.section-title__part4').addClass('section-title__part--nonactive');
            $('.section-title__part5').addClass('section-title__part--nonactive');
            $('.section-title__part6').addClass('section-title__part--nonactive');
            $('.slide-2').removeClass('swiper-slide__text--active');
            $('#btn2').removeClass('slids--active');
            $('.slide-3').removeClass('swiper-slide__text--active');
            $('#btn3').removeClass('slids--active');
            $('.slide-4').removeClass('swiper-slide__text--active');
            $('#btn4').removeClass('slids--active');
            $('.slide-5').removeClass('swiper-slide__text--active');
            $('#btn5').removeClass('slids--active');
            $('.slide-6').removeClass('swiper-slide__text--active');
            $('#btn6').removeClass('slids--active');
            $('.slide-1').addClass('swiper-slide__text--active');
            $('#btn1').addClass('slids--active');
    });

    $('.slide-2').click(function(e) {
        e.preventDefault();
        $(".menu-swiper .active").removeClass('active');
        $(this).addClass('active');
        mySwiper1.slideTo( '2',1000,false );
        $('.section-title__part2').removeClass('section-title__part--nonactive');
        $('.section-title__part1').addClass('section-title__part--nonactive');
        $('.section-title__part3').addClass('section-title__part--nonactive');
        $('.section-title__part4').addClass('section-title__part--nonactive');
        $('.section-title__part5').addClass('section-title__part--nonactive');
        $('.section-title__part6').addClass('section-title__part--nonactive');
        $('.slide-1').removeClass('swiper-slide__text--active');
        $('#btn1').removeClass('slids--active');
        $('.slide-3').removeClass('swiper-slide__text--active');
        $('#btn3').removeClass('slids--active');
        $('.slide-4').removeClass('swiper-slide__text--active');
        $('#btn4').removeClass('slids--active');
        $('.slide-5').removeClass('swiper-slide__text--active');
        $('#btn5').removeClass('slids--active');
        $('.slide-6').removeClass('swiper-slide__text--active');
        $('#btn6').removeClass('slids--active');
        $('.slide-2').addClass('swiper-slide__text--active');
        $('#btn2').addClass('slids--active');
    });

    $('.slide-3').click(function(e) {
        e.preventDefault();
        $(".menu-swiper .active").removeClass('active');
        $(this).addClass('active');
        mySwiper1.slideTo( '3',1000,false );
        $('.section-title__part3').removeClass('section-title__part--nonactive');
        $('.section-title__part2').addClass('section-title__part--nonactive');
        $('.section-title__part1').addClass('section-title__part--nonactive');
        $('.section-title__part4').addClass('section-title__part--nonactive');
        $('.section-title__part5').addClass('section-title__part--nonactive');
        $('.section-title__part6').addClass('section-title__part--nonactive');
        $('.slide-1').removeClass('swiper-slide__text--active');
        $('#btn1').removeClass('slids--active');
        $('.slide-2').removeClass('swiper-slide__text--active');
        $('#btn2').removeClass('slids--active');
        $('.slide-4').removeClass('swiper-slide__text--active');
        $('#btn4').removeClass('slids--active');
        $('.slide-5').removeClass('swiper-slide__text--active');
        $('#btn5').removeClass('slids--active');
        $('.slide-6').removeClass('swiper-slide__text--active');
        $('#btn6').removeClass('slids--active');
        $('.slide-3').addClass('swiper-slide__text--active');
        $('#btn3').addClass('slids--active');
    });

    $('.slide-4').click(function(e) {
        e.preventDefault();
        $(".menu-swiper .active").removeClass('active');
        $(this).addClass('active');
        mySwiper1.slideTo( '4',1000,false );
        $('.section-title__part4').removeClass('section-title__part--nonactive');
        $('.section-title__part2').addClass('section-title__part--nonactive');
        $('.section-title__part3').addClass('section-title__part--nonactive');
        $('.section-title__part1').addClass('section-title__part--nonactive');
        $('.section-title__part5').addClass('section-title__part--nonactive');
        $('.section-title__part6').addClass('section-title__part--nonactive');
        $('.slide-1').removeClass('swiper-slide__text--active');
        $('#btn1').removeClass('slids--active');
        $('.slide-2').removeClass('swiper-slide__text--active');
        $('#btn2').removeClass('slids--active');
        $('.slide-3').removeClass('swiper-slide__text--active');
        $('#btn3').removeClass('slids--active');
        $('.slide-5').removeClass('swiper-slide__text--active');
        $('#btn5').removeClass('slids--active');
        $('.slide-6').removeClass('swiper-slide__text--active');
        $('#btn6').removeClass('slids--active');
        $('.slide-4').addClass('swiper-slide__text--active');
        $('#btn4').addClass('slids--active');
    });

    $('.slide-5').click(function(e) {
        e.preventDefault();
        $(".menu-swiper .active").removeClass('active');
        $(this).addClass('active');
        mySwiper1.slideTo( '5',1000,false );
        $('.section-title__part5').removeClass('section-title__part--nonactive');
        $('.section-title__part2').addClass('section-title__part--nonactive');
        $('.section-title__part3').addClass('section-title__part--nonactive');
        $('.section-title__part4').addClass('section-title__part--nonactive');
        $('.section-title__part1').addClass('section-title__part--nonactive');
        $('.section-title__part6').addClass('section-title__part--nonactive');
        $('.slide-1').removeClass('swiper-slide__text--active');
        $('#btn1').removeClass('slids--active');
        $('.slide-2').removeClass('swiper-slide__text--active');
        $('#btn2').removeClass('slids--active');
        $('.slide-3').removeClass('swiper-slide__text--active');
        $('#btn3').removeClass('slids--active');
        $('.slide-4').removeClass('swiper-slide__text--active');
        $('#btn4').removeClass('slids--active');
        $('.slide-6').removeClass('swiper-slide__text--active');
        $('#btn6').removeClass('slids--active');
        $('.slide-5').addClass('swiper-slide__text--active');
        $('#btn5').addClass('slids--active');
    });

    $('.slide-6').click(function(e) {
        e.preventDefault();
        $(".menu-swiper .active").removeClass('active');
        $(this).addClass('active');
        mySwiper1.slideTo( '6',1000,false );
        $('.section-title__part6').removeClass('section-title__part--nonactive');
        $('.section-title__part2').addClass('section-title__part--nonactive');
        $('.section-title__part3').addClass('section-title__part--nonactive');
        $('.section-title__part4').addClass('section-title__part--nonactive');
        $('.section-title__part5').addClass('section-title__part--nonactive');
        $('.section-title__part1').addClass('section-title__part--nonactive');
        $('.slide-1').removeClass('swiper-slide__text--active');
        $('#btn1').removeClass('slids--active');
        $('.slide-2').removeClass('swiper-slide__text--active');
        $('#btn2').removeClass('slids--active');
        $('.slide-3').removeClass('swiper-slide__text--active');
        $('#btn3').removeClass('slids--active');
        $('.slide-4').removeClass('swiper-slide__text--active');
        $('#btn4').removeClass('slids--active');
        $('.slide-5').removeClass('swiper-slide__text--active');
        $('#btn5').removeClass('slids--active');
        $('.slide-6').addClass('swiper-slide__text--active');
        $('#btn6').addClass('slids--active');
    });

    mySwiper1.on('slideChange', function () {
        if(this.activeIndex === 0) {  
            $('.section-title__part6').removeClass('section-title__part--nonactive');
            $('.section-title__part2').addClass('section-title__part--nonactive');
            $('.section-title__part3').addClass('section-title__part--nonactive');
            $('.section-title__part4').addClass('section-title__part--nonactive');
            $('.section-title__part5').addClass('section-title__part--nonactive');
            $('.section-title__part1').addClass('section-title__part--nonactive');
            $('.slide-1').removeClass('swiper-slide__text--active');
            $('#btn1').removeClass('slids--active');
            $('.slide-2').removeClass('swiper-slide__text--active');
            $('#btn2').removeClass('slids--active');
            $('.slide-3').removeClass('swiper-slide__text--active');
            $('#btn3').removeClass('slids--active');
            $('.slide-4').removeClass('swiper-slide__text--active');
            $('#btn4').removeClass('slids--active');
            $('.slide-5').removeClass('swiper-slide__text--active');
            $('#btn5').removeClass('slids--active');
            $('.slide-6').addClass('swiper-slide__text--active');
            $('#btn6').addClass('slids--active');       
        };
        if(this.activeIndex === 1) {  
            $('.section-title__part1').removeClass('section-title__part--nonactive');
            $('.section-title__part2').addClass('section-title__part--nonactive');
            $('.section-title__part3').addClass('section-title__part--nonactive');
            $('.section-title__part4').addClass('section-title__part--nonactive');
            $('.section-title__part5').addClass('section-title__part--nonactive');
            $('.section-title__part6').addClass('section-title__part--nonactive');
            $('.slide-2').removeClass('swiper-slide__text--active');
            $('#btn2').removeClass('slids--active');
            $('.slide-3').removeClass('swiper-slide__text--active');
            $('#btn3').removeClass('slids--active');
            $('.slide-4').removeClass('swiper-slide__text--active');
            $('#btn4').removeClass('slids--active');
            $('.slide-5').removeClass('swiper-slide__text--active');
            $('#btn5').removeClass('slids--active');
            $('.slide-6').removeClass('swiper-slide__text--active');
            $('#btn6').removeClass('slids--active');
            $('.slide-1').addClass('swiper-slide__text--active');
            $('#btn1').addClass('slids--active');         
        };
        if(this.activeIndex === 2) {            
            $('.section-title__part2').removeClass('section-title__part--nonactive');
            $('.section-title__part1').addClass('section-title__part--nonactive');
            $('.section-title__part3').addClass('section-title__part--nonactive');
            $('.section-title__part4').addClass('section-title__part--nonactive');
            $('.section-title__part5').addClass('section-title__part--nonactive');
            $('.section-title__part6').addClass('section-title__part--nonactive');
            $('.slide-1').removeClass('swiper-slide__text--active');
            $('#btn1').removeClass('slids--active');
            $('.slide-3').removeClass('swiper-slide__text--active');
            $('#btn3').removeClass('slids--active');
            $('.slide-4').removeClass('swiper-slide__text--active');
            $('#btn4').removeClass('slids--active');
            $('.slide-5').removeClass('swiper-slide__text--active');
            $('#btn5').removeClass('slids--active');
            $('.slide-6').removeClass('swiper-slide__text--active');
            $('#btn6').removeClass('slids--active');
            $('.slide-2').addClass('swiper-slide__text--active');
            $('#btn2').addClass('slids--active');
        };
        if(this.activeIndex === 3) {   
            $('.section-title__part3').removeClass('section-title__part--nonactive');
            $('.section-title__part2').addClass('section-title__part--nonactive');
            $('.section-title__part1').addClass('section-title__part--nonactive');
            $('.section-title__part4').addClass('section-title__part--nonactive');
            $('.section-title__part5').addClass('section-title__part--nonactive');
            $('.section-title__part6').addClass('section-title__part--nonactive');
            $('.slide-1').removeClass('swiper-slide__text--active');
            $('#btn1').removeClass('slids--active');
            $('.slide-2').removeClass('swiper-slide__text--active');
            $('#btn2').removeClass('slids--active');
            $('.slide-4').removeClass('swiper-slide__text--active');
            $('#btn4').removeClass('slids--active');
            $('.slide-5').removeClass('swiper-slide__text--active');
            $('#btn5').removeClass('slids--active');
            $('.slide-6').removeClass('swiper-slide__text--active');
            $('#btn6').removeClass('slids--active');
            $('.slide-3').addClass('swiper-slide__text--active');
            $('#btn3').addClass('slids--active');         
        };
        if(this.activeIndex === 4) { 
            $('.section-title__part4').removeClass('section-title__part--nonactive');
            $('.section-title__part2').addClass('section-title__part--nonactive');
            $('.section-title__part3').addClass('section-title__part--nonactive');
            $('.section-title__part1').addClass('section-title__part--nonactive');
            $('.section-title__part5').addClass('section-title__part--nonactive');
            $('.section-title__part6').addClass('section-title__part--nonactive');
            $('.slide-1').removeClass('swiper-slide__text--active');
            $('#btn1').removeClass('slids--active');
            $('.slide-2').removeClass('swiper-slide__text--active');
            $('#btn2').removeClass('slids--active');
            $('.slide-3').removeClass('swiper-slide__text--active');
            $('#btn3').removeClass('slids--active');
            $('.slide-5').removeClass('swiper-slide__text--active');
            $('#btn5').removeClass('slids--active');
            $('.slide-6').removeClass('swiper-slide__text--active');
            $('#btn6').removeClass('slids--active');
            $('.slide-4').addClass('swiper-slide__text--active');
            $('#btn4').addClass('slids--active');           
        };
        if(this.activeIndex === 5) {  
            $('.section-title__part5').removeClass('section-title__part--nonactive');
            $('.section-title__part2').addClass('section-title__part--nonactive');
            $('.section-title__part3').addClass('section-title__part--nonactive');
            $('.section-title__part4').addClass('section-title__part--nonactive');
            $('.section-title__part1').addClass('section-title__part--nonactive');
            $('.section-title__part6').addClass('section-title__part--nonactive');
            $('.slide-1').removeClass('swiper-slide__text--active');
            $('#btn1').removeClass('slids--active');
            $('.slide-2').removeClass('swiper-slide__text--active');
            $('#btn2').removeClass('slids--active');
            $('.slide-3').removeClass('swiper-slide__text--active');
            $('#btn3').removeClass('slids--active');
            $('.slide-4').removeClass('swiper-slide__text--active');
            $('#btn4').removeClass('slids--active');
            $('.slide-6').removeClass('swiper-slide__text--active');
            $('#btn6').removeClass('slids--active');
            $('.slide-5').addClass('swiper-slide__text--active');
            $('#btn5').addClass('slids--active');          
        };
        if(this.activeIndex === 6) { 
            $('.section-title__part6').removeClass('section-title__part--nonactive');
            $('.section-title__part2').addClass('section-title__part--nonactive');
            $('.section-title__part3').addClass('section-title__part--nonactive');
            $('.section-title__part4').addClass('section-title__part--nonactive');
            $('.section-title__part5').addClass('section-title__part--nonactive');
            $('.section-title__part1').addClass('section-title__part--nonactive');
            $('.slide-1').removeClass('swiper-slide__text--active');
            $('#btn1').removeClass('slids--active');
            $('.slide-2').removeClass('swiper-slide__text--active');
            $('#btn2').removeClass('slids--active');
            $('.slide-3').removeClass('swiper-slide__text--active');
            $('#btn3').removeClass('slids--active');
            $('.slide-4').removeClass('swiper-slide__text--active');
            $('#btn4').removeClass('slids--active');
            $('.slide-5').removeClass('swiper-slide__text--active');
            $('#btn5').removeClass('slids--active');
            $('.slide-6').addClass('swiper-slide__text--active');
            $('#btn6').addClass('slids--active');           
        };
        if(this.activeIndex === 7) {  
            $('.section-title__part1').removeClass('section-title__part--nonactive');
            $('.section-title__part2').addClass('section-title__part--nonactive');
            $('.section-title__part3').addClass('section-title__part--nonactive');
            $('.section-title__part4').addClass('section-title__part--nonactive');
            $('.section-title__part5').addClass('section-title__part--nonactive');
            $('.section-title__part6').addClass('section-title__part--nonactive');
            $('.slide-2').removeClass('swiper-slide__text--active');
            $('#btn2').removeClass('slids--active');
            $('.slide-3').removeClass('swiper-slide__text--active');
            $('#btn3').removeClass('slids--active');
            $('.slide-4').removeClass('swiper-slide__text--active');
            $('#btn4').removeClass('slids--active');
            $('.slide-5').removeClass('swiper-slide__text--active');
            $('#btn5').removeClass('slids--active');
            $('.slide-6').removeClass('swiper-slide__text--active');
            $('#btn6').removeClass('slids--active');
            $('.slide-1').addClass('swiper-slide__text--active');
            $('#btn1').addClass('slids--active');         
        };
    });

    // валидация формы
    $('.modal__form').validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15
          },
          userPhone: {
              required: true,
              minlength: 18,
          },
          userEmail: {
            required: true,
            email: true
          },
          policyCheckbox: {
            required: true,
          }
        }, 
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длиннее 15 букв"
            },
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Минимум 10 цифр",
            },
            userEmail: {
              required: "Обязательно укажите email",
              email: "Введите в формате name@domain.com"
            },
            policyCheckbox: {
                required: "Обязательно согласие",
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    alert("Форма отправлена, мы свяжемся с вами в ближайшее время");
                    modal.removeClass('modal--visible');
                }
            });
          }
      });

      $(".footer__form").validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15
          },
          userPhone: {
              required: true,
              minlength: 18,
          },
          userEmail: {
            required: true,
            email: true
          },
          policyCheckbox: {
            required: true,
          }
        }, 
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длиннее 15 букв"
            },
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Минимум 10 цифр",
            },
            userEmail: {
              required: "Обязательно укажите email",
              email: "Введите в формате name@domain.com"
            },
            policyCheckbox: {
                required: "Обязательно согласие",
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    alert("Форма отправлена, мы свяжемся с вами в ближайшее время");
                }
            });
          }
      });

      $(".control__form").validate({
        errorClass: "invalid",
        errorElement: "div",
        rules: {
          userName: {
              required: true,
              minlength: 2,
              maxlength: 15
          },
          userPhone: {
              required: true,
              minlength: 18,
          },
          userEmail: {
            required: true,
            email: true
          },
          policyCheckbox: {
            required: true,
          }
        }, 
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длиннее 15 букв"
            },
            userPhone: {
                required: "Телефон обязателен",
                minlength: "Минимум 10 цифр",
            },
            userEmail: {
              required: "Обязательно укажите email",
              email: "Введите в формате name@domain.com"
            },
            policyCheckbox: {
                required: "Обязательно согласие",
            }
        },
        submitHandler: function(form) {
            $.ajax({
                type: "POST",
                url: "send.php",
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    alert("Форма отправлена, мы свяжемся с вами в ближайшее время");
                }
            });
          }
      });

    $('[type=tel]').mask('+7 (000) 000-00-00');

      // подключение видео с ютуб
      var player;
      $('.video__play').on('click',function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          height: '460',
          width: '100%',
          videoId: 'cu_l1JNB5ds',
          events: {
            'onReady': videoPlay,
          }
        });
      });

      function videoPlay(event){
          event.target.playVideo();
      }
});
