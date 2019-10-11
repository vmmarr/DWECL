var hora = prompt('Introduce una hra para validar el formato hh:mm:ss o hh:mm');

var p = /^(\d{2})\:(\d{2})(\:(\d{2}))?$/;
// var patron=/^(0[1-9]|1\d|2[0-3]):([0-5]\d)(:([0-5]\d))?$/;
var pa = /^\:/;

var r = p.exec(hora);


if (r == null) {
    alert('La hora es incorrecta');
} else {
    for (var i = 1; i < r.length; i++) {
        if  (pa.test(r[i])) {
            r.splice(i,1);
        }
    }
}

function comprobar(r) {
    var v = true;
    for (var i = 1; i < r.length; i++) {
        switch (i) {
            case 1:
                if (r[i] >= 24) {
                    alert('La hora es incorrecta');
                    v = false;
                    i  = r.length;
                }
                break; 
            case 2:
            case 3:
                if (r[i] >= 60) {
                    alert('La hora es incorrecta');
                    v = false;
                    i  = r.length;
                }
        }  
    }
    return v;
}

if (comprobar(r)) {
    alert('La hora es correcta');
}