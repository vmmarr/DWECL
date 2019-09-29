var r = 0;
var num = prompt('Introduce un numero');

// Primera opcion
/*if (!isNaN(num)) {
    for (var i = 0; i < num.length; i++) {
        r += parseInt(num[i]);
    }
}*/

// Segunda opcion
/*if (!isNaN(num)) {
    for (var i = 0; i < num.length; i++) {
        if (isNaN(num[i])) {
            break;
        } else {
            r += parseInt(num[i]);
        }
    }
}*/

// Tercera opcion
if (!isNaN(num)) {
    for (var i = 0; i < num.length; i++) {
        if (isNaN(num[i])) {
            continue;
        } else {
            r += parseInt(num[i]);
        }
    }
}

alert(r);