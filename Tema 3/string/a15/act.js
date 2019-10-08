var frase = prompt('Introduce una cadena');

if (frase == frase.toUpperCase()) {
    alert('La frase esta en Mayuscula');
} else if (frase == frase.toLowerCase()) {
    alert('La frase esta en minuscula');
} else {
    alert('La frase esta escrita en mayuscula y en minuscula');
}