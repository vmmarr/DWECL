(function($) {
    var metodos = {
        inicio: function() {
            $('body').append('<ul></ul>');
            $('ul').attr('id', 'lista');
            return;
        },
    
        addSection: function(texto) {
            $('#lista').append(`<li>${texto}</li>`);
        },

        delSection: function() {
            // Comprobar si la seccion tiene hijos probando con el metodo find() o coon el children()
            // amboos con el .length
            $(this).remove();
        },

        addOption: function(texto) {
            if ($(this).children().length <= 0) {
                $(this).append(`<ul></ul>`);
                $(this).children([0]).append(`<li>${texto}</li>`);
            } else {
                $(this).children([0]).append(`<li>${texto}</li>`);
            }
        },

        delOption: function() {
            // Comprobar si la seccion tiene hijos probando con el metodo find() o coon el children()
            // amboos con el .length
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


