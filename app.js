
window.addEventListener('load', function () {

    new Glider(document.querySelector('.carousel__lista'), {

        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        rewind:true,
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        }
    });

});