var c = prompt('Introduce una cadena que tenga la etiqueta script');
var p = /\<script[^]*\>.*\<\/script\>/;
alert(c.replace(p,''));