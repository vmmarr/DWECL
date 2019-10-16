var f = prompt('Introduce una frase');
var p = /(\w*)?te(\w*)?/gi;
alert(f.match(p).length);