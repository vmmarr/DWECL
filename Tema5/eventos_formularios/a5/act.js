function raton(e) {
    caja.style.backgroundColor = '#FFFF00';
    console.log(`Posicion respecto al navegador\n
        Posicion x: ${e.clientX}\n Posicion y: ${e.clientY}\n
        Posicion de la pantalla\n
        Posicion x: ${e.screenX}\n Posicion y: ${e.screenY}`);
}

function teclado(e) {
    caja.style.backgroundColor = '#CCE6FF';
    console.log(`Codigo: ${e.code}\n Letra: ${e.key}`);
}

function mover(e) {
    caja.style.backgroundColor = 'transparent';
}

window.onload = function() {
    window.addEventListener('click', raton);
    window.addEventListener('keydown', teclado);
    window.addEventListener('mousemove', mover);
}