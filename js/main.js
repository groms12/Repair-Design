// document.addEventListener("DOMContentLoaded", function(event) { 
//     const modal = document.querySelector('.modal');
//     const modalBtn = document.querySelectorAll('[data-toggle="modal"]');
//     const closeBtn = document.querySelector('.modal__close');
//     const toggleModal = () => {
//         modal.classList.toggle('modal--visible');
//     };

//     modalBtn.forEach(element => {
//         element.addEventListener('click', toggleModal);
//     });

//     closeBtn.addEventListener('click', toggleModal)

//     document.addEventListener('keydown', (e) => {
//         if (e.keyCode === 27) {
//             modal.classList.toggle('modal--visible');
//         } 
//     });
// })

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
        // $('html').animate({scrollTop: "-=50px"}, 1000);
        $('body').animate({scrollTop: "-=50px"}, 1000);
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

    var next1 = $('.swiper-button-next__first');
    var prev1 = $('.swiper-button-prev__first');
    var bullets1 = $('.swiper-pagination__first');

    bullets1.css('left', prev1.width() + 15);
    next1.css('left', prev1.width() + bullets1.width() + 20);
});
