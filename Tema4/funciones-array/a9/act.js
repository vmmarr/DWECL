var nota, nombre;

function comprobarNota() {
    do {
        nota = parseFloat(prompt('Introduce la nota'));
    } while (nota < 0 || nota > 10 || isNaN(nota));

    return nota;
}

function comprobarNombre() {
    var n = /^[a-z]+(\s[a-z]+)*$/i;

    do {
        nombre = prompt('Introduce el nombre');
    } while (!n.test(nombre));

    return nombre;
}

var cabecera = ["Nombre", 'DIW', 'DAW', 'DWESE']; // Numero de columnas
var m = "";
m += "<tr>";
for (var i = 0; i < cabecera.length; i++) {
    m += '<th>' + cabecera[i] + '</th>';
}
m += "</tr>";

var alumnos = new Array(5); // Array alumnos

for (var i = 0; i < alumnos.length; i++) {
    alumnos[i] = new Array(cabecera.length);
    m += "<tr>";
    for (var j = 0; j < alumnos[i].length; j++) {

        if (cabecera[j] == 'Nombre') {
            alumnos[i][j] = comprobarNombre();
                                
            m += '<td>' + alumnos[i][j] + '</td>';
            continue;
        } else {
            alumnos[i][j] = comprobarNota();
            
            m += '<td>' + alumnos[i][j] + '</td>';
            continue;
        }
    }
    m += "</tr>";
}

document.getElementById('tabla').innerHTML += m;