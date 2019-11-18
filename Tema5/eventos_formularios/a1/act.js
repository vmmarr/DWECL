window.onmousedown = function(e) {
    switch (e.button) {
        case 0: alert('Has pulsado el boton izquierdo');
            break;
        case 1:alert('Has pulsado el boton central');
            break;
        case 2: alert('Has pulsado el boton derecho');
            break;
    }
}