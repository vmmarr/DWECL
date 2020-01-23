$(document).ready(function() {
    $().llamar('inicio');
    $().llamar("addSection", "hola1");
    $().llamar("addSection", "h2");
    $().llamar("addSection", "h3");
    $().llamar("addSection", "h4");
    //$('li:eq(2)').llamar("delSection");
    $('li:eq(2)').llamar('addOption', 'h3-1');
    $('li:eq(2)').llamar('addOption', 'h3-2');
    $('li:eq(2)').llamar('addOption', 'h3-3');
    $('li:eq(2)').llamar('addOption', 'h3-4');

    $('li:eq(0)').llamar('addOption', 'h1-1');
    $('li:eq(0)').llamar('addOption', 'h1-2');
    $('li:eq(0)').llamar('addOption', 'h1-3');
    $('li:eq(0)').llamar('addOption', 'h1-4');

    // Solo me falta probar que me borre
    // $('li:eq(5)').llamar('delOption');
});