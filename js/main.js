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
});
