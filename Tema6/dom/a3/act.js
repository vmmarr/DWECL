function an() {
    var u = document.getElementsByTagName('ul')[0];
    var l = document.createElement('li');
    var n = document.createTextNode(texto.value);
    l.appendChild(n);
    u.appendChild(l);
    texto.value = '';
}

function bo() {
    var u = document.getElementsByTagName('ul')[0];
    var array = [];
    var cont = 0;
    var v = document.getElementsByTagName('li');
    for (var i = 0; i < v.length; i++) {
        if (v[i].firstChild.nodeValue == '') {
            array[cont++] = v[i];
        }
    }

    for (var i = 0; i < array.length; i++) {
        u.removeChild(array[i]);
    }
}

function clo() {
    var u = document.getElementsByTagName('ul')[0];
    var c = u.lastChild.cloneNode(true);
    u.appendChild(c);
}

window.onload = function() {
    buscar();
    anadir.addEventListener('click', an);
    borrar.addEventListener('click', bo);
    clonar.addEventListener('click', clo);
}