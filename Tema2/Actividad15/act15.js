var frase = prompt('Introduce una frase para saber si es palindromo');
var p = '';
var r = '';

for (var i = 0; i < frase.length; i++) {
    if (frase[i] != ' ') {
        p += frase[i];
    }
}

for (var i = p.length-1; i >= 0; i--) {
    r += p[i];
}

if (p.toLowerCase() == r.toLowerCase()) {
    alert('La frase es un palindromo');
} else {
    alert('La frase no es un palindromo');
}