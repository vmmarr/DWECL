(function($) {
    var metodos = {
        inicio: function() {
            $(this).append('<ul></ul>');
            $(this).children([0]).attr('id', 'lista');
            return;
        },
    
        addSection: function(texto, posicion) {
            var p = parseInt(posicion)+1;
            // usar append y si esta ya usado que le pregunte si lo quiere modificar
            if ($(this).children().length > 0) {
                // $(`<li>${texto}</li>`).insertAfter(`li:eq(${p})`);
                $(this).after(`<li>${texto}</li>`);
            } else {
                $(this).append(`<li>${texto}</li>`);
            }

        },

        delSection: function() {
            // Comprobar si la seccion tiene hijos probando con el metodo find() o con el children()
            // amboos con el .length

            // No  funciona bien
            if ($(this).children().length > 0)  {
                console.log('dhhd');
                var c = confirm('¿Deseas borrar la seleccion y todos sus hijos?');
                if (c == true) {
                    $(this).remove();
                }
            } else {
                $(this).remove();
            }
        },

        addOption: function(texto) {
            if ($(this).children().length <= 0) {
                $(this).append(`<ul></ul>`);
                $(this).children([0]).attr('class', 'sub');
                $(this).children([0]).append(`<li>${texto}</li>`);
            } else {
                $(this).children([0]).append(`<li>${texto}</li>`);
            }
        },

        delOption: function() {
            // Comprobar si la seccion tiene hijos probando con el metodo find() o coon el children()
            // amboos con el .length

            // No funciona bien
            $(this).remove();
        }
    };
    
    $.fn.llamar  = function(fun) {
        if (metodos[fun]) {
            return metodos[fun].apply(this, 
                Array.prototype.slice.call(arguments, 1));
        } else if (typeof fun === "object" || !fun) {
            return metodos.init.apply(this, arguments);
        } else {
            $.error("El metodo " + fun + " no existe en el plugin menu");
        }
    };
})(jQuery);


