var palabra = prompt('Introduce alguna de estas palabras para traducir a ingles\n casa, mesa, perro, gato');

switch (palabra.toLowerCase()) {
    case 'casa':
        alert('house');
        break;
    case 'mesa':
        alert('table');
        break;
    case 'perro':
        alert('dog');
        break;
    case 'gato':
        alert('cat');
        break;
    default:
        alert('La palabra introducida no esta en el diccionario');
        break;
}
