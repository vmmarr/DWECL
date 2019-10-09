var hora = prompt('Introduce una hra para validar el formato hh:mm:ss o hh:mm');

var p = /^(\d{2})\:(\d{2})(\:(\d{2}))?$/;

var r = p.exec(hora);


if (r == null) {
    alert('La hora es incorrecta');
} else {
    for (var i = 1; i < r.length; i++) {
        console.log(r[i]);
    }
}

// if (r[1] <= 23) {
//     alert('dd');
// }