$(document).ready(function() {
    $('body').llamar('inicio');

    $('body').append('<button>Añadir</button>').click(function (e) { 
        e.preventDefault();
        var texto = prompt('Introduce el nombre de la seccion');
        var posicion = prompt('Introduce la posicion en la que deseas introducirla');
        $('#lista').llamar('addSection', `${texto}`, `${posicion}`);
        //$('#lista').llamar("addSection", `${texto}`);
    });
    
    
    // $('#lista').llamar("addSection", "h2");
    // $('#lista').llamar("addSection", "h3");
    // $('#lista').llamar("addSection", "h4");
    // $('li:eq(2)').llamar('addOption', 'h3-1');
    // $('li:eq(2)').llamar('addOption', 'h3-2');
    // $('li:eq(2)').llamar('addOption', 'h3-3');
    // $('li:eq(2)').llamar('addOption', 'h3-4');
    
    // $('li:eq(0)').llamar('addOption', 'h1-1');
    // $('li:eq(0)').llamar('addOption', 'h1-2');
    // $('li:eq(0)').llamar('addOption', 'h1-3');
    // $('li:eq(0)').llamar('addOption', 'h1-4');
    // //$('#lista').find('li:eq(0)').llamar("delSection");
    // $('#lista').find().llamar("delSection");

    // // Solo me falta probar que me borre
    // // $('li:eq(5)').llamar('delOption');
});