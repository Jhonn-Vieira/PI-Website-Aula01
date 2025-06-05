$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });


    //animação de scroll
    //utiliza a biblioteca ScrollReveal

    ScrollReveal().reveal('#cta', {
        origin: "left",
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#tecnologias_row-1', {
        origin: "right",
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#tecnologias_row-2', {
        origin: "left",
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#qualidades_row-1', {
        origin: "left",
        duration: 1500,
        distance: '20%'
    });

     ScrollReveal().reveal('#qualidades_row-2', {
        origin: "right",
        duration: 1500,
        distance: '20%'
    });
});