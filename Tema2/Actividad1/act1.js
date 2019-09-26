var nota = parseInt(prompt('¿Cual es la nota optenida?'));
// alert(nota);

if (nota >= 0 && nota < 5) {
    alert('Suspenso');
} else if (nota <= 6) {
    alert('Aprobado');
} else if (nota <= 8) {
    alert('Notable');
} else if (nota <= 10) {
    alert('Sobresaliente');
} else {
    alert('Error');
}

// (nota >= 0 && nota < 5) ? alert('Suspenso') : 
// (nota >= 5 && nota <= 6) ? alert('Aprbado') : 
// (nota >= 7 &&  nota <= 8) ? alert('Notable') :
// (nota >=  9 && nota  <= 10) ? alert('Sobresaliente') : alert('Error');
