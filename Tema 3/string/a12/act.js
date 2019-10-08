var frase = prompt('Introduce una frase');

var f = frase.split(' ');

alert(`La primera palabra de la frase es ${f[0]}`);
alert(`La ultima palabra de la frase es ${f[f.length -1]}`);
alert(`La frase tiene  ${f.length} palabras`);