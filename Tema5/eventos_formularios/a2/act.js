var arriba = 0;
var derecha = 0;
function mover(e) {
    switch (e.key) {
        case 'ArrowUp':
            caja.style.top = (arriba -= 10) + "px";
            break;
        case 'ArrowLeft':
            caja.style.left = (derecha -= 10) + "px";
            break;
        case 'ArrowDown':
            caja.style.top = (arriba += 10) + "px";
            break;
        case 'ArrowRight':
            caja.style.left = (derecha += 10) + "px";
            break;
    }
}

window.onkeydown = mover;