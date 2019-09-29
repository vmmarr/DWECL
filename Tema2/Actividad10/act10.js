var frase = prompt('Introduce una frase').toString();
var a = [];

for (var i = 0; i < frase.length; i++) {
    if (!isNaN(frase[i])) {
        continue;
    } else {
        a.push(frase[i]);
    }
}

alert(a);