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
            $(this).remove();
        },

        addOption: function(texto) {
            $(this).append(`<ul><li>${texto}</le</ul>`);
        },

        delOption: function() {
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


