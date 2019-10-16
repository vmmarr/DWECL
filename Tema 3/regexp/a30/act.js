var c = prompt('Introduce una cadena que tenga la etiqueta script');
var p = /\<\w+>.*\<\/\w+\>/g;
var a = [];
a.push(c.match(p));


console.log(a);