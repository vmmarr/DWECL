var x = 0;
(function($) {
    var metodos = {
        inicio: function() {
            // que el programador diga el id
            $(this).append('<ul></ul>');
            $(this).children([0]).attr('id', 'lista');
            return;
        },
    
        addSection: function(texto, id) {
            // que el programador diga el id
            // comprobar si el id no esta usado
            $(this).append(`<li>${texto}</li>`);
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
                console.log('jjjj');
                $(this).remove();
            }
        },

        addOption: function(texto) {
            if ($(this).children().length <= 0) {
                $(this).append(`<ul></ul>`);
                $(this).children([0]).attr('class', 'sub');
                $(this).children([0]).attr('id', `lista${x}`);
                x++;
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


