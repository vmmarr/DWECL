function color() {
    var c = document.forms[1].r.value;
    var t = '';
    switch (c) {
        case 'rojo':
            document.body.style.backgroundColor = 'red';
            t = c;
            break;
        case 'verde':
            document.body.style.backgroundColor = 'green';
            t = c;
            break;
        case 'azul':
            document.body.style.backgroundColor = 'blue';
            t = c;
            break;
    }
    return t;
}

function enviar() {
    var correo = '';
    var s = seleccion();
    correo += `Nombre ${document.getElementById('nombre').value}`;
    correo += `Mensaje ${document.getElementById('mensaje').value}`;
    var d = [];
    for (var i = 0; i < s.length; i++) {
        d.push(s[i]);
    }
    correo += `Color de fondo ${color()}`;
    correo += `Dias con disponibilidad ${d}`;
    correo += document.getElementById('asignatura').value;
    correo += document.getElementById('dia').value;
    // console.log(correo);
    window.open(`mailto:${profesor()}?subject=registroAlumno&body= ${correo}`);
}

function profesor() {
    var o = document.getElementById('asignatura').value;
    var e = '';
    switch (o) {
        case 'Ingles':
            e = 'profesorIngles@gmail.com';
            break;
        case 'Matematicas':
            e = 'profesorMatematicas@gmail.com';
            break;
        case 'Lengua':
            e = 'profesorLengua@gmail.com';
            break;
    }
    return e;
}

function volver() {
    window.location.reload(false);
}

function ruta() {
    window.open('http://www.google.es');
}

function seleccion() {
    var s = document.forms[2].dia;
    // console.log(s.length);
    var p = '';
    var a = [];

    for (var i = 0; i < s.length; i++) {
        if (s[i].checked) {
            p = s[i].value;
            a.push(s[i].value);
        }
    }

    if (p == l.value.toLowerCase()) {
        l.setAttribute('selected', "true");
    } else if (p == m.value.toLowerCase()) {
        m.setAttribute('selected', "true");
    } else if (p == mi.value.toLowerCase()) {
        mi.setAttribute('selected', "true");
    } else if (p == j.value.toLowerCase()) {
        j.setAttribute('selected', "true");
    } else if (p == v.value.toLowerCase()) {
        v.setAttribute('selected', "true");
    }
    return a;
}

window.onload = function() {
    document.forms[1].addEventListener('click', color);
    document.forms[2].addEventListener('click', seleccion);
    en.addEventListener('click', enviar)
    re.addEventListener('click', volver);
    ir.addEventListener('click', ruta);
}