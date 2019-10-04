// Area del circulo
var radio = prompt('Introduce el radio del circulo');
var n = new Number(radio);

var ac = Math.PI * Math.pow(radio, 2);

alert(`El area del circulo es ${ac.toFixed(2)} cm2`);

// Area del triangulo

var b = prompt('Introduce la base del triangulo');
var h = prompt('Introduce la altura del triangulo');
var at = (b * h) / 2;

alert(`El area del triangulo es ${at.toFixed(2)} cm2`);