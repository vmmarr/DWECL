console.log('Pulse 1 para modificar el 24');
console.log('Pulse 2 para modificar el 25');
console.log('Pulse 3 para modificar el 26');

var opcion = prompt('Introduce una opcion');
var f = prompt('Introduce una frase');


switch (opcion) {
    case '1':
        var pa = prompt('Introduce el patron por el que tiene que comenzar');
        var p = RegExp(`\\b${pa}\\w+`, 'gi');
        alert(p);
        alert(f.match(p));
        break;
    case '2':
            var pa = prompt('Introduce el patron por el que tiene que terminar');
            var p = RegExp(`\\w+${pa}\\b`, 'gi');
            alert(f.match(p));
        break;
    case '3':
            var pa = prompt('Introduce el patron');
            var p = RegExp(`(\\w+)?${pa}(\\w+)?`, 'gi');
            alert(`Hay ${f.match(p).length} palabras que contienen este patron ${p}`);
        break;
    default:
        break;
}