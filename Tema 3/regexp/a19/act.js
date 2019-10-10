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
console.log(r);

for (var i = 1; i < r.length; i++) {
    switch (i) {
        case 1:
            if (r[i] > 23) {
                alert('La hora es incorrecta');
                i  = r.length;
            }
            break; 
        case 2:
        case 3:
            if (r[i] <= 60) {
                alert('dd');
                i  = r.length;
            }
    }  
}