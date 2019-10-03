// Comprobar año
do {
    var anyo = parseInt(prompt('Introduce tu año de nacimento'));
} while (anyo < 1900 && anyo > 2050);

// Comprobar mes
do {
    var mes = parseInt(prompt('Introduce el mes'));    
} while (mes <= 1 && mes >= 12);

// Comprobar dia
do {
    var dia = parseInt(prompt('Introduce el dia'));
} while (dia <= 1 && dia >= 31);

var fn = new Date(anyo, mes-1, dia);

// Optener la fecha actual
var fa = new Date();

var milisegundos = fa - fn;

var segundos = milisegundos/1000;
var minutos = segundos/60;
var horas = minutos/60;
var dias = horas/24;
var anyos = dias / 365;

alert(`Tienes ${parseInt(anyos)} años`);