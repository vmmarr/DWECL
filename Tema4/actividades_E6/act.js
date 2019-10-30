function anadir() {
    num = prompt('Introduce numeros').split(',');
    for (i in num) {
        num[i] = parseInt(num[i]);
    }
    anadirElementos(...num);
}

function anadirElementos(...num) {
    for (i in num) {
        document.getElementById('lista').innerHTML += `<li> ${num[i]} </li>`; 
    }
}

function menor() {
    var items = document.getElementsByTagName('li');
    var numeros = [];

    for (var i = 0; i < items.length; i++) {
        numeros.push(parseInt(items[i].innerHTML));
    }
    
    alert(`El numero menor es ${Math.min(parseInt(...numeros))}`);
}

var triple = () => { 
    var items = document.getElementsByTagName('li');
    var numeros = [];
    for (var i = 0; i < items.length; i++) {
        numeros.push(parseInt(items[i].innerHTML));
    }

    for (var i = 0; i < numeros.length; i++) {
        alert(`El triple de ${numeros[i]} es ${numeros[i] * 3}`);
    }
};