function mostrar() {
    alert(`El alto es ${window.innerHeight}, el ancho es ${window.innerWidth}`);
}

window.onload = function() {
    window.addEventListener('resize', mostrar)
}