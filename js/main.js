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

    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
    });
    
    var next = $('.swiper-button-next__second');
    var prev = $('.swiper-button-prev__second');
    var bullets = $('.swiper-pagination__second');

    bullets.css('left', prev.width() + 15);
    next.css('left', prev.width() + bullets.width() + 20);
    console.log(next);

    var next1 = $('.swiper-button-next__first');
    var prev1 = $('.swiper-button-prev__first');
    var bullets1 = $('.swiper-pagination__first');

    bullets1.css('left', prev1.width() + 15);
    next1.css('left', prev1.width() + bullets1.width() + 20);

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
          userPhone: "required",
          userEmail: {
            required: true,
            email: true
          }
        }, 
        messages: {
            userName: {
                required: "Имя обязательно",
                minlength: "Имя не короче двух букв",
                maxlength: "Имя не длиннее 15 букв"
            },
            userPhone: "Телефон обязателен",
            userEmail: {
              required: "Обязательно укажите email",
              email: "Введите в формате name@domain.com"
            }
        }
      });

      $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
});
