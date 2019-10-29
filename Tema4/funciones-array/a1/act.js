function convertir1() {
    var n1 = document.getElementById('num1').value;
    var b1 = document.getElementById('base1').value;
    var r = document.getElementById('resultado1');

    console.log(b1);
    if (isNaN(n1)) {
        n1.value = '';
        alert('El numero no es correcto');
    } else if (!isNaN(b1)) {
        alert('La base no es correcta');
        b1.value = '';
    }

    if (b1 >= 2 && b1 <= 36) {
        r.value = n1.toString(b1);
    }
}