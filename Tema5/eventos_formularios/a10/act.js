var i = document.getElementById('imagen');


i.onabort = function() {
    alert('La carga de la imagen a sido abortada');
}
i.onerror = function() {
    alert('Se a producido un error al cargar la imagen');
}
