$(document).ready(function () {
    var modal = $('.modal');
    var modalBtn = $('[data-toggle=modal]');
    var closeBtn = $('.modal__close');

    modalBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });
    closeBtn.on('click', function () {
        modal.toggleClass('modal--visible');
    });

    document.addEventListener('keydown', (e) => {
        if (e.keyCode === 27) {
            modal.toggleClass('modal--visible');
        } 
    });

    $(document).click(function (e) {
        if ($(e.target).is('.modal')) {
            modal.toggleClass('modal--visible');
        }
    });

    $(document).scroll(function(){  //функция прокрутки страницы наверх
        if($(document).scrollTop() > 70) {
            $('.scroll-top').show();
        } else {
            $('.scroll-top').hide();
        }
    });
    
    $('.scroll-top').click(function(){
        $('html').animate({scrollTop: 0}, 1000);
        $('body').animate({scrollTop: 0}, 1000);
        console.log($('body').scrollTop);
        return false;
    });

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
    next.css('left', prev.width() + bullets.width() + 20); 

    var mySwiper1 = new Swiper ('.swiper-container-s2', {
        loop: true,
        preloadImages: false,
        lazy: true,
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
    
    var bullets1 = $('.swiper-pagination1');
    bullets1.css('left', prev1.width() + 15);

    $('.swiper-slide__href').on('click',  '.slids', function() {
        const index = $(this).data('index');
        mySwiper1.slideToLoop(index, false);
     });

    new WOW().init();

    // валидация формы
    $(".modal__form").validate({
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

    //   $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

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
