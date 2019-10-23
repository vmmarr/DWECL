window.onload = function() {
    var i = document.getElementById('ini');
    var p = document.getElementById('parar');
    i.onclick = function(e) {
        e.preventDefault();
        iniciar();
    }
    p.onclick = function(e) {
        e.preventDefault();
        clearInterval(m);
        hora();
    }
}

var m;

function hora() {
    var f = new Date();
    document.title = f.toLocaleTimeString();
}

function iniciar() {
    m = setInterval(hora, 1000);
}