function menu() {
    console.log('"Calculadora"');
    console.log('Pulse 1 para sumar');
    console.log('Pulse 2 para restar');
    console.log('Pulse 3 para multiplicar');
    console.log('Pulse 4 para dividir');
    console.log('Pulse 5 para obtener el modulo');
    console.log('Pulse 6 para salir');
}

function confirmar() {
    var c = confirm('¿Deseas salir?');
    if (c == true) {
        opcion = 0;
    }
}

do {
    menu();
    var opcion = prompt('Introduce una opcion');
    switch (opcion) {
        case '1':
            var n1 = parseInt(prompt('Introduce un numero'));
            var n2 = parseInt(prompt('Introduce un numero'));
            alert('La suma de ' + n1 + ' + ' + n2 + ' es ' + (n1 + n2));
            break;
        case '2':
            var n1 = parseInt(prompt('Introduce un numero'));
            var n2 = parseInt(prompt('Introduce un numero'));
            alert('La resta de ' + n1 + ' - ' + n2 + ' es ' + (n1 - n2));
            break;
        case '3':
            var n1 = parseInt(prompt('Introduce un numero'));
            var n2 = parseInt(prompt('Introduce un numero'));
            alert('La multiplicacion de ' + n1 + ' * ' + n2 + ' es ' + (n1 * n2));
            break;
        case '4':
            var n1 = parseInt(prompt('Introduce un numero'));
            var n2 = parseInt(prompt('Introduce un numero'));
            alert('La division de ' + n1 + ' / ' + n2 + ' es ' + (n1 / n2));
            break;
        case '5':
            var n1 = parseInt(prompt('Introduce un numero'));
            var n2 = parseInt(prompt('Introduce un numero'));
            alert('El modulo de ' + n1 + ' / ' + n2 + ' es ' + (n1 & n2));
            break;
        case '6':
            confirmar();
            break;
    }
} while (opcion >= 1 && opcion <= 6);