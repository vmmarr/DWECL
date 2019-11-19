function cambiar() {
    im.src = 'img2.jpg';
}

function volver() {
    im.src = 'img1.jpg';
}

window.onload = function() {
    window.addEventListener('mousedown', cambiar);
    window.addEventListener('mouseup', volver);
}