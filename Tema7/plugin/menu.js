$(document).ready(function() {
    var nombreMenu = prompt('Introduce el nombre de tu menu');
    
    $('body').llamar('inicio', `${nombreMenu}`);

    $('body').append('<button>Añadir</button>');
    $('button:eq(0)').attr('id', 'boton1');
    $('button:eq(0)').attr('class', 'boton');
    $('#boton1').click(function () { 
        var texto = prompt('Introduce el nombre de la seccion');
        var id = prompt('Introduce el identificador de la seccion');
        $(`#${nombreMenu}`).llamar('addSection', `${texto}`, `${id}`);
    });
    
    $('body').append('<button>Añadir Subseccion</button>');
    $('button:eq(1)').attr('id', 'boton2');
    $('button:eq(1)').attr('class', 'boton');
    $('#boton2').click(function () { 
        var idSeccion = prompt('Identificador de seccion para crear subseccion');
        var contenido = prompt('Introduce el titulo de la subseccion');
        var idSub = prompt('Introduce el identificadoor de la subseccion');
        
        $(`#${nombreMenu}>li[id=${idSeccion}]`).llamar('addOption', `${contenido}`, `${idSub}`);
    });

    $('body').append('<button>Borrar Seccion</button>');
    $('button:eq(2)').attr('id', 'boton3');
    $('button:eq(2)').attr('class', 'boton');
    $('#boton3').click(function () { 
        var id = prompt('Introduce el identificador de la seccion quieres borrar');
        
        $(`#${nombreMenu}>li[id=${id}]`).llamar('delSection'); 
    });

    $('body').append('<button>Borrar Subseccion</button>');
    $('button:eq(3)').attr('id', 'boton4');
    $('button:eq(3)').attr('class', 'boton'); 
    $('#boton4').click(function () { 
        var id = prompt('Identificador de la subsecion que quieres borrar');
        $(`#${nombreMenu}>li>ul>li[id=${id}]`).llamar('delOption');
    });
});