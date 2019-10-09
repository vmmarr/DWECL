var coordenada = prompt('Introduce una coordenada para validar');

var p = /^\(\d{1,3}\,\d{1,3}\)$/;

if (p.test(coordenada)) {
    alert('La coordenada es correcta');
} else {
    alert('La coordenada no es correcta');
}