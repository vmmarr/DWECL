//omitiendo las vocales, la letra "Ñ" y la letra "Q"

var matricula = prompt('Introduce a matricula a validar').toUpperCase();
var p = /^\d{4}\s?([A-Z]{3})$/;
var p1 = /[AEIOUÑQ]/;

var r = p.exec(matricula);

console.log(r);

for (var i = 0; i < r[1].lengt; i++) {
    for (var j = 0; j < r[i].length; j++){
        if (p1.test(r[j])) {
            alert('La matricula es incorrecta');
        }
    }
}

