window.onload =function() {
    setInterval(horaActual, 1000);
    cboton();
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
}

function cboton() {
    var b = document.createElement('button');
    b.setAttribute('id', 'boton');
    var pa = document.createTextNode('Poner Alarma');
    b.appendChild(pa);
    
    document.body.appendChild(b);

    b.click(pedirHora());
}


function pedirHora() {
    alert('dame');

    var p = prompt('A que hora te aviso hh:mm');
        var patron = /^[\d{2}]:[\d{2}]$/;
        var arrayPatron = patron.exec(p);

        if (arrayPatron != null) {
            if (arrayPatron[1] < 24 && arrayPatron[2] < 60) {
                
            }
        } else {
            alert('La hora no es correcta');
        }

        // Comprobar la cadena
}