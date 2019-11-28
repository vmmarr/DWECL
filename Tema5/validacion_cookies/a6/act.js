var f = new Date(2018, 11, 1);
function cargar() {
    var m = document.getElementsByTagName('meter');
    var vota = document.forms[0].r;
    for (var i = 0; i < vota.length; i++) {
        var n = vota[i].id;
        if (getCookie(n)) {
                console.log(getCookie(n));
            m[i].value = getCookie(n);
        }
    }
}

function votar() {
    var m = document.getElementsByTagName('meter');
    var vota = document.forms[0].r;
    for (var i = 0; i < vota.length; i++) {
        if (vota[i].checked) {
            setCookie(vota[i].id, (m[i].value) + 2, f);
            m[i].value += 2;
        }
    }
}

window.onload = function() {
    cargar();
    v.addEventListener('click', votar);
}