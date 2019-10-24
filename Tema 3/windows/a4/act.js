window.onload =function(e) {
    e.preventDefault();
    cboton();
    setInterval(horaActual, 1000);
}

function horaActual() {
    var ha = new Date();
    var parrafos = document.getElementsByTagName('p');    
    
    if (parrafos.length == 0) {
        var e = document.createElement('p');
        e.setAttribute('id', 'parra');
        var pa = document.createTextNode(ha.toLocaleTimeString());
        e.appendChild(pa);
        
        document.body.appendChild(e);
    } else {
        var pf = document.getElementById('parra');
        var nodo2 = document.createTextNode(ha.toLocaleTimeString());
        pf.replaceChild(nodo2, pf.firstChild);
    }
    return ha;
}

function cboton() {
    var b = document.createElement('button');
    b.setAttribute('id', 'boton');
    var pa = document.createTextNode('Poner Alarma');
    b.appendChild(pa);
    
    document.body.appendChild(b);

    b.addEventListener('click', pedirHora());
}

function pedirHora() {
    alert('dame');

    var p = prompt('A que hora te aviso hh:mm');
    var patron = /^(\d{2}):(\d{2})$/;
    var arrayPatron = patron.exec(p);
    if (arrayPatron != null) {
        if (arrayPatron[1] < 24 && arrayPatron[2] < 60) {
            //return arrayPatron[1];
            comprobar();
        }
    } else {
        alert('La hora no es correcta');
    }
}

function comprobar() {
    var hActual = horaActual().getHours();
    var mActual = horaActual().getMinutes();
    var hNueva = arrayPatron[1];
    var mNueva = arrayPatron[2];

    if (hActual == hNueva && mActual == mNueva) {
        prosponer();
    }
}

function prosponer() {
    var c = confirm('¿Dormir mas?');

    if (c == true) {

    }
}