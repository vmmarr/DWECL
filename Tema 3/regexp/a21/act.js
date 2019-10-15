var dia = prompt('Introduce dia de la semana y el numero');
var ex = /^(lunes|martes|miercoles|jueves|viernes|sabado|domingo)\s(\d{2})$/i;
var r = ex.exec(dia);

if (r == null) {
    alert('No es correcta');
} else if (r[2] <= 31  && r[2] >= 1) {
    alert('El dia es valido');
} else {
    alert('El dia no es valido');
}