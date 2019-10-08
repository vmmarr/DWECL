var frase = prompt('Introduzca una frase');
var palabra = prompt('Introduzca la palabra a buscar');

var posicion = frase.search(palabra);

if (posicion != -1) {
    alert(`La posicion de la palabra es ${posicion}`);
    alert(`La palabra a buscar tiene ${palabra.length} caracteres`);
    alert(frase.replace(palabra, 'dwecl'));