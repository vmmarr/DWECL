var paises1 = [['España','Madrid',['Paella','Cocido', 'Salmorejo']],
                ['Francia', 'Paris', ['Fondue de queso', 'Crepes', 'Croissants']],
                ['Italia', 'Roma', ['Pasta', 'Pizzas', 'Helados']]
            ];
    
var paises2 = [['España',['Madrid', ['Paella', 'Cocido', 'Salmorejo']]],
                ['Francia',['París', ['Fondue de queso', 'Crepes', 'Croissants']]],
                ['Italia',['Roma', ['Pasta', 'Pizzas', 'Helados']]]
            ];

function mostrar1(array) {
    for (var i = 0; i < array.length; i++) {
        var u = document.createElement('ul');
        document.body.appendChild(u);
        for (var j = 0; j < array[i].length; j++) {
            if (j == 0) {
                var l = document.createElement('li');
                var n = document.createTextNode(array[i][j]);
                l.appendChild(n);
                u.appendChild(l);
            } else {
                var u1 = document.createElement('ul');
                var l1 = document.createElement('li');
                var n = document.createTextNode(array[i][j]);
                u.appendChild(u1);
                l1.appendChild(n);
                u1.appendChild(l1);
                l1.setAttribute('type', 'circle');
            }
        }
    }
}

function mostrar2(array) {
    for (var i = 0; i < array.length; i++) {
        var u = document.createElement('ul');
        document.body.appendChild(u);
        for (var j = 0; j < array[i].length; j++) {
            if (!Array.isArray(array[i][j])) {
                var l = document.createElement('li');
                var n = document.createTextNode(array[i][j]);
                l.appendChild(n);
                u.appendChild(l);
            } else {
                for (var k = 0; k < array[i][j].length; k++) {
                    var u1 = document.createElement('ul');
                    var l1 = document.createElement('li');
                    var n = document.createTextNode(array[i][j][k]);
                    u.appendChild(u1);
                    l1.appendChild(n);
                    u1.appendChild(l1);
                    l1.setAttribute('type', 'circle');
                }
            }
        }
    }
}

mostrar1(paises1);
mostrar2(paises2);