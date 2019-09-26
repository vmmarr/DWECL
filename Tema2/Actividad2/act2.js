var num = parseInt(prompt('Introduce un numero para clacular su factorial'));
var result = 1;

for (i = 1; i <= num; i++) {
    result = i * result;
}

alert(`El resultado del factorial de ${num} es ${result}` );