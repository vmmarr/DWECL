var x = 0;
(function($) {
    var metodos = {
        inicio: function(id) {
            if ($(`[id=${id}]`).length >0) {
                console.log('El identificador existe');
            } else {
                $(this).append('<ul></ul>');
                $(this).children([0]).attr('id', `${id}`);
                return;
            }
        },
    
        addSection: function(texto, id) {
            if ($(`[id=${id}]`).length >0) {
                console.log('El identificador existe');
            } else {
                $(this).append(`<li>${texto}</li>`);
                $('li').each(function() {
                    if ($(this).text() == texto) {
                        $(this).attr('id', `${id}`);
                    }
                });
            }
        },

        addOption: function(texto, id) {
            if ($(`[id=${id}]`).length > 0) {
                console.log('El identificador existe');
            }
            if ($(this).children().length <= 0) {
                $(this).append('<ul></ul>');
                $(this).children([0]).append(`<li>${texto}</li>`);
                
                $('li').each(function() {
                    if ($(this).text() == texto) {
                        $(this).attr('id', `${id}`);
                    }
                });
            } else {
                $(this).children([0]).append(`<li>${texto}</li>`);
                $('li').each(function() {
                    if ($(this).text() == texto) {
                        $(this).attr('id', `${id}`);
                    }
                });
            }
        },

        delSection: function() {
            if ($(this).length > 0) {
                if ($(this).children().length > 0)  {
                    var c = confirm('¿Deseas borrar la seleccion y todos sus hijos?');
                    if (c == true) {
                        $(this).remove();
                    }
                } else {
                    $(this).remove();
                }
            } else {
                console.log('Esa seccion no existe');
            }
        },

        delOption: function() {
            if ($(this).length > 0) {
                $(this).remove();
            } else {
                console.log('Esa opcion no existe');
            }
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