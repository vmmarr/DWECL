function convertir1() {
    var n1 = document.getElementById('num1').value;
    var b1 = document.getElementById('base1').value;
    var r = document.getElementById('resultado1');

    if (isNaN(n1) || isNaN(b1)) {
        document.getElementById('num1').value = '';
        document.getElementById('base1').value = '';
        alert('El numero y la base no son correcto');
    } 

    n1 = parseInt(n1);
    b1 = parseInt(b1);
    if (b1 >= 2 && b1 <= 36) {
        r.value = n1.toString(b1);
    }
}

function convertir2() {
    var n2 = document.getElementById('num2').value;
    var b2 = parseInt(document.getElementById('base2').value);
    var r = document.getElementById('resultado2');

    r.value = parseInt(n2, b2);
}