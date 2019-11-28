function crear() {
    filas = prompt('Introduce el nimero de filas');
    col = prompt('Introduce el numero de columnas');

    var tabla = document.createElement('table');
    tabla.setAttribute('class', 'tabla');
    tabla.setAttribute('id', 'tabla');
    document.body.appendChild(tabla);

    for (var i = 0; i < filas; i++) {
        var tr = tabla.insertRow(i);
        for (var j = 0; j < col; j++) {
            td = tr.insertCell(j);
            td.setAttribute('class', 'celda');
            td.addEventListener('click', cambiar);

            do {
                var c = prompt('Introduce el valor para la celda');
            } while (c == null || c == '');
            var t = document.createTextNode(c);

            td.appendChild(t);
            tr.appendChild(td);
        }
        tabla.appendChild(tr);   
    }
}

function cambiar(t) {
    do {
        var c = prompt('Introduce el valor para la celda');
    } while (c == null || c == '');
    td1 = document.createTextNode(c);
    this.replaceChild(td1, this.firstChild);
}

function borrar() {
    var fila = parseInt(prompt('Introduce la fila a borrar'));
    tabla.deleteRow(--fila);
}

function insertar() {
    var f = parseInt(prompt('Introce la posicion de la fila'));
    var tr1 = tabla.insertRow(--f);
        for (var j = 0; j < col; j++) {
            td = tr1.insertCell(j);
            td.setAttribute('class', 'celda');
            td.addEventListener('click', cambiar);
            do {
                var c = prompt('Introduce el valor para la celda');
            } while (c == null || c == '');
            var t = document.createTextNode(c);

            td.appendChild(t);
            tr1.appendChild(td);
        }
}

window.onload = function() {
    crear();
    elimina.addEventListener('click', borrar);
    inserta.addEventListener('click', insertar);
}