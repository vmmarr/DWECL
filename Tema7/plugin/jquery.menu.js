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
                $(`li:contains(${texto})`).attr('id', `${id}`);
            }
        },

        addOption: function(texto, id, clase) {
            if ($(`[id=${id}]`).length > 0) {
                console.log('El identificador existe');
            }
            if ($(this).children().length <= 0) {
                $(this).append('<ul></ul>');
                $(this).children([0]).attr('class', `${clase}`);

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

        delSection: function(nombre) {
            // var x = 0;
            // $(this).each(function() {
            //     if ($(this).text() == nombre) {
            //         x++;
            //     }
            // });

            // console.log(x);

            var r =  ($(this).text() == nombre);

            console.log(r);

            if ($(`${r}`).children().length > 0)  {
                console.log('dhhd');
                var c = confirm('¿Deseas borrar la seleccion y todos sus hijos?');
                if (c == true) {
                    $(`${r['id']}`).remove();
                }
            } else {
                console.log('jjjj');
                $(this).remove();
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


