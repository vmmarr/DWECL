var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X',
 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']; 

var dni;

function introducir() {
    dni = prompt('Introduce tu DNI sin espacios ni guiones "59874522x"');
}

do {
    introducir();
} while (dni.length != 9);
    
for (i = 0; i < dni.length-1; i++) {
    // console.log(dni[i]);
    if (isNaN(dni[i])) {
        introducir();
        break;
    }
}

// No estan Ñ O I U 

var num = parseInt(dni.substr(0,8));
var letra = dni.charAt(8).toUpperCase();

if (letra == 'Ñ' || letra == 'O' || letra == 'I' || letra == 'U') {
    alert('El DNI es incorrecto');
    introducir();
}

console.log(num);
console.log(letra);

var r = num % 23;
console.log(r);

if (letras[r] != letra) {
    alert('La letra que has indicado no es correcta');
} else {
    alert('El DNI es correcto');
}
