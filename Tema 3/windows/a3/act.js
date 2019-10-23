window.onload = function() {
    var i = document.getElementById('ini');
    var p = document.getElementById('parar');
    
    
    i.onclick = function() {
        console.log('hola');
        iniciar();
    }
    p.onclick = function() {
        clearInterval(m);
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