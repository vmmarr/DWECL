var f = prompt('Introduce una frase');
var l = prompt('Introduce la loguitud de la palabra que quieres extraer');
var p = new RegExp(`\\b\\w{${l}}\\b`,'g');
alert(f.match(p));