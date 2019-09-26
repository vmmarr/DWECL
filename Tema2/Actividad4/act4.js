var num1 = 0;
var num2 = 0;
var int = 0

do {
    num1 = parseInt(prompt('Intruduce el primer numero'));
    num2 = parseInt(prompt('Introduce el segundo numero'));
} while (num1 == num2);

if (num1 > num2) {
    int = num1;
    num1 = num2;
    num2 = int;
}

alert(`Tus numeros ordenados son ${num1} y ${num2}`)

for (i = num1; i <= num2; i++) {
    if (i%8 == 0) {
        document.write(`<p>${i}</p>`);
    }
}

var parrafos = document.getElementsByTagName('p');

if (parrafos.length == 0) {
    document.write(`No hay ningun multiplo de 8 comprendido entre los numeros ${num1} y ${num2}`);
}

//console.log(parrafos.length);