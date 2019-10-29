var palabras = prompt('Introduce palabras').split(',');
for (i in palabras) {
    palabras[i] = palabras[i];
}

function mostrar() {
    alert(`El array de las palabras es\n ${palabras}`);
}

function reves() {
    alert(`El array al reves\n ${palabras.reverse()}`);
    palabras.reverse();
}

function primera() {
    alert(`La primera palabras es ${palabras[0]}`);
}

function ultima() {
    alert(`La ultima palabras es ${palabras[palabras.length-1]}`);
}

function numero() {
    alert(`Hay ${palabras.length} palabras en el array`);
}

function asc() {
    alert(`El array ordenado a - z\n ${palabras.sort()}`);
}

function des() {
    palabras.sort();
    alert(`El array ordenado z - a\n ${palabras.reverse()}`);
}