$(document).ready(function() {
    var nombreMenu = prompt('Introduce el nombre de tu menu');
    $('body').llamar('inicio', `${nombreMenu}`);

    $('body').append('<button>Añadir</button>');
    $('button:eq(0)').attr('id', 'boton1');
    $('#boton1').click(function () { 
        var texto = prompt('Introduce el nombre de la seccion');
        var id = prompt('Introduce el identificador de la seccion');
        $(`#${nombreMenu}`).llamar('addSection', `${texto}`, `${id}`);
    });
    
    $('body').append('<button>Añadir Subseccion</button>');
    $('button:eq(1)').attr('id', 'boton2');
    $('#boton2').click(function () { 
        var idSeccion = prompt('Identificador de seccion para crear subseccion');
        var contenido = prompt('Introduce el titulo de la subseccion');
        var idSub = prompt('Introduce el identificadoor de la subseccion');
        if ($(`[id=${idSeccion}]`).children().length <= 0) {
            var clase = prompt('Introduce la clase');
            $(`[id=${idSeccion}]`).llamar('addOption', `${contenido}`, `${idSub}`, `${clase}`);
        } else {
            $(`[id=${idSeccion}]`).llamar('addOption', `${contenido}`, `${idSub}`);
        }
    });

    $('body').append('<button>Borrar Seccion</button>');
    $('button:eq(2)').attr('id', 'boton3');
    $('#boton3').click(function () { 
        var nombre = prompt('Introduce el nombre de la seccion quieres borrar');
        
        $(`#${nombreMenu}>li`).llamar('delSection', `${nombre}`); 
    });

    // $('body').append('<button>Borrar Subseccion</button>');
    // $('button:eq(3)').attr('id', 'boton4'); 
    // $('#boton4').click(function () { 
    //     var texto = prompt('Introduce el nombre de la seccion en la que quieres la subseccion');
    //     var s = prompt('Introduce el titulo de la subseccion');
    //     $('#lista').find(`li:contains(${texto})`).llamar('addOption', `${s}`);
    // });

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