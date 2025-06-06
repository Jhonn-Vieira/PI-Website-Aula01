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
        distance: '20%',
        delay: 300
        
    });

    ScrollReveal().reveal('#tecnologias_row-3', {
        origin: "left",
        duration: 2000,
        distance: '20%'
        
    });
    ScrollReveal().reveal('#tecnologias_row-4', {
        origin: "right",
        duration: 2000,
        distance: '20%',
        delay: 300
        
    });
    ScrollReveal().reveal('#tecnologias_row-5', {
        origin: "left",
        duration: 2000,
        distance: '20%',
        delay: 500
        
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