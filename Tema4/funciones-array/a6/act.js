var num = [];
for (var i = 1; i <= 21; i++) {
    if (i%2 != 0) {
        num.push(i);
    } 
}

calcula();
reves();
buscar();

function calcula() {
    var s = 0;

    for (var i = 0; i < num.length; i++) {
        s += num[i];
    }
    console.log(`La suma de todos los numeros impares es ${s}`);
}

function reves() {
    console.log(num.reverse());
}

var pos = -1;
function buscar() {
    var v = parseInt(prompt('Introduce el numero a buscar.'));
    var p = num.indexOf(v);

    if (p >= 0) {
        console.log(`El numero buscado ${v} se enceuntra en la posicion ${p}`);
    } else {
        console.log(`El numero ${v} no esta en el array`);
    }

    pos = p;
}

var borrar = () => {
    if (pos >= 0) {
        num.splice(pos, 1);
    } else {
        console.log('No se encuentra el elemento a borrar');
    }
    pos = -1;

    console.log(num);
}

var asc = () => {
    // num.sort((a, b) => a-b);
    console.log(`El array ordenado ascendentemente\n ${num.sort((a, b) => a-b)}`);
};

var des = () => {
    // num.sort((a, b) => b-a);
    console.log(`El array ordenado descendentemente\n ${num.sort((a, b) => b-a)}`);
};

function mostrar() {
    asc();
    des();
    // alert(`El array ordenado ascendentemente ${asc()}`);
    // alert(`El array ordenado descendentemente ${des()}`);
}
borrar();
mostrar();