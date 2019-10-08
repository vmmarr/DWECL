function menu() {
    console.log('"Calculadora"');
    console.log('Pulse 1 para sumar');
    console.log('Pulse 2 para restar');
    console.log('Pulse 3 para multiplicar');
    console.log('Pulse 4 para dividir');
    console.log('Pulse 5 para obtener el modulo');
    console.log('Pulse 6 para la raiz cuadrada');
    console.log('Pulse 7 para la potencia de un numero en otro');
    console.log('Pulse 8 para retornar el coseno de un número');
    console.log('Pulse 9 para devolver el arcocoseno de un número en radianes');
    console.log('Pulse 10 para devolver el arcoseno de un numero en radianes');
    console.log('Pulse 11 para devolver un arcotangente de un numero');
    console.log('Pulse 12 para devolver el logaritmo neperiano de un numero');
    console.log('Pulse 13 para el seno de un numero con un ango en radianes');
    console.log('Pulse 14 para la tangente de un numero en radianes');
    console.log('Pulse 0 para salir');
}

function confirmar() {
    var c = confirm('¿Deseas salir?');
    if (c == true) {
        opcion = 16;
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
            var n1 = parseInt(prompt('Introduce un numero'));
            alert(`La raiz cuadrada de ${n1} es ${Math.sqrt(n1)}`);
            break;
        case '7':
            var n1 = parseInt(prompt('Introduce un numero'));
            var n2 = parseInt(prompt('Introduce un numero'));
            alert(`El numero ${n1} elevado a ${n2} es ${Math.pow(n1, n2)}`);
            break;
        case '8':
            var n1 = parseInt(prompt('Introduce un numero'));
            alert(`El coseno de ${n1} es ${Math.cos(n1)}`);
            break;
        case '9':
            var n = parseInt(prompt('Introduce un numero decimal para pasar a binario'));
            alert(n.toString(2));
            break;
        case '10':
            var n = prompt('Introduce un numero binario para pasar a decimal');
            alert(parseInt(n,2));
            break;
        case '11':
            var n1 = parseInt(prompt('Introduce un numero decimal para pasar a octal'));
            alert(n1.toString(8));
            break;
        case '12':
            var n1 = parseInt(prompt('Introduce un numero'));
            alert(`El logaritmo neperiano de ${n1} es ${Math.log(n1)}`);
            break;
        case '13':
            var n1 = parseInt(prompt('Introduce un numero'));
            alert(`El seno de ${n1} es ${Math.sin(n1)}`);
            break;
        case '14':
            var n1 = parseInt(prompt('Introduce un numero'));
            alert(`La tangente de ${n1} es ${Math.tan(n1)}`);
            break;
        case '0':
            confirmar();
            break;
    }
} while (opcion >= 0 && opcion <= 14);