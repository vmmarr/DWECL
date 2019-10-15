//omitiendo las vocales, la letra "Ñ" y la letra "Q"

var matricula = prompt('Introduce a matricula a validar').toUpperCase();
var p = /^\d{4}\s?([A-Z]{3})$/;
var p1 = /[AEIOUÑQ]/;

var r = p.exec(matricula);

console.log(r);

if (r == null) {
    alert('La matricula es incorrecta');
} else {
    for (var i = 0; i < r[1].length; i++) {
        for (var j = 0; j < r[i].length; j++){
            if (p1.test(r[j])) {
                alert('La matricula es incorrecta');
                i = r[1].length;
            }
        }
    }

}

