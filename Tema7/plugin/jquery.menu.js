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

        addOption: function(texto, id, clase) {
            // if ($(`[id=${id}]`).length > 0) {
            //     console.log('El identificador existe');
            // }
            console.log(id);
            if ($(this).children().length <= 0) {
                console.log(id);
                console.log($(this).children());
                $(this).append('<ul></ul>');
                $(this).children([1]).attr('class', `${clase}`);

                $(this).children([1]).append(`<li>${texto}</li>`);
                //$('li').text(`${texto}`).attr('id', `${id}`);
                console.log($(`li:contains(${texto})`));
                $(`li:contains(${texto})`).attr('id', `${id}`);
                console.log(id);
            } else {
                $(this).children([1]).append(`<li>${texto}</li>`);
                $('li').text(`${texto}`).attr('id', `${id}`);
                //$(`li:contains(${texto})`).attr('id', `${id}`);
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


