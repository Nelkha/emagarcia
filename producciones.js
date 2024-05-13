window.addEventListener('load', function () {
    // Instancia de Glider para carousel__lista
    const gliderLista = new Glider(document.querySelector('.carousel__lista'), {
        slidesToShow: 1,
        dots: '.carousel__indicadores',
        draggable: true,
        arrows: {
            prev: '.btn-left-2', // Botón izquierdo de carousel__lista
            next: '.btn-right-2', // Botón derecho de carousel__lista
        }
    });

    // Instancia de Glider para carousel__lista__tablet
    const gliderTablet = new Glider(document.querySelector('.carousel__lista__tablet'), {
        slidesToShow: 1,
        dots: '.carousel__indicadores',
        draggable: true,
        arrows: {
            prev: '.btn-left-1', // Botón izquierdo de carousel__lista__tablet
            next: '.btn-right-1', // Botón derecho de carousel__lista__tablet
        }
    });

    // Instancia de Glider para carousel__lista__escritorio
    const gliderEscritorio = new Glider(document.querySelector('.carousel__lista__escritorio'), {
        slidesToShow: 3,
        dots: '.carousel__indicadores',
        draggable: true,
        arrows: {
            prev: '.btn-left-1', // Botón izquierdo de carousel__lista__escritorio
            next: '.btn-right-1', // Botón derecho de carousel__lista__escritorio
        }
    });

    // Agrega controladores de eventos para los botones de navegación de carousel__lista
    document.querySelector('.btn-left-2').addEventListener('click', function() {
        gliderLista.scrollItem(-1); // Desplaza carousel__lista hacia el elemento anterior
    });

    document.querySelector('.btn-right-2').addEventListener('click', function() {
        gliderLista.scrollItem(1); // Desplaza carousel__lista hacia el siguiente elemento
    });

    // Agrega controladores de eventos para los botones de navegación de carousel__lista__tablet
    document.querySelector('.btn-left-1').addEventListener('click', function() {
        gliderTablet.scrollItem(-1); // Desplaza carousel__lista__tablet hacia el elemento anterior
    });

    document.querySelector('.btn-right-1').addEventListener('click', function() {
        gliderTablet.scrollItem(1); // Desplaza carousel__lista__tablet hacia el siguiente elemento
    });

    // Agrega controladores de eventos para los botones de navegación de carousel__lista__escritorio
    document.querySelector('.btn-left-1').addEventListener('click', function() {
        gliderEscritorio.scrollItem(-1); // Desplaza carousel__lista__escritorio hacia el elemento anterior
    });

    document.querySelector('.btn-right-1').addEventListener('click', function() {
        gliderEscritorio.scrollItem(1); // Desplaza carousel__lista__escritorio hacia el siguiente elemento
    });
});

/*VIDEOS MUSICALES-----------------------------------------------------------------------------*/

window.addEventListener('load', function () {
    // Instancia de Glider para carousel__lista
    const gliderLista = new Glider(document.querySelector('.Vid_Musicales__lista'), {
        slidesToShow: 1,
        dots: '.carousel__indicadores',
        draggable: true,
        arrows: {
            prev: '.btn-left-4', // Botón izquierdo de carousel__lista
            next: '.btn-right-4', // Botón derecho de carousel__lista
        }
    });

    // Instancia de Glider para carousel__lista__tablet
    const gliderTablet = new Glider(document.querySelector('.Vid_Musicales__lista__tablet'), {
        slidesToShow: 1,
        dots: '.carousel__indicadores',
        draggable: true,
        arrows: {
            prev: '.btn-left-3', // Botón izquierdo de carousel__lista__tablet
            next: '.btn-right-3', // Botón derecho de carousel__lista__tablet
        }
    });

    // Instancia de Glider para carousel__lista__escritorio
    const gliderEscritorio = new Glider(document.querySelector('.Vid_Musicales__lista__escritorio'), {
        slidesToShow: 3,
        dots: '.carousel__indicadores',
        draggable: true,
        arrows: {
            prev: '.btn-left-3', // Botón izquierdo de carousel__lista__escritorio
            next: '.btn-right-3', // Botón derecho de carousel__lista__escritorio
        }
    });

    // Agrega controladores de eventos para los botones de navegación de carousel__lista
    document.querySelector('.btn-left-4').addEventListener('click', function() {
        gliderLista.scrollItem(-1); // Desplaza carousel__lista hacia el elemento anterior
    });

    document.querySelector('.btn-right-4').addEventListener('click', function() {
        gliderLista.scrollItem(1); // Desplaza carousel__lista hacia el siguiente elemento
    });

    // Agrega controladores de eventos para los botones de navegación de carousel__lista__tablet
    document.querySelector('.btn-left-3').addEventListener('click', function() {
        gliderTablet.scrollItem(-1); // Desplaza carousel__lista__tablet hacia el elemento anterior
    });

    document.querySelector('.btn-right-3').addEventListener('click', function() {
        gliderTablet.scrollItem(1); // Desplaza carousel__lista__tablet hacia el siguiente elemento
    });

    // Agrega controladores de eventos para los botones de navegación de carousel__lista__escritorio
    document.querySelector('.btn-left-3').addEventListener('click', function() {
        gliderEscritorio.scrollItem(-1); // Desplaza carousel__lista__escritorio hacia el elemento anterior
    });

    document.querySelector('.btn-right-3').addEventListener('click', function() {
        gliderEscritorio.scrollItem(1); // Desplaza carousel__lista__escritorio hacia el siguiente elemento
    });
});
