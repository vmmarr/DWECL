window.onload = function() {
    var t = prompt('Introduce la cadena a buscar.');
    var confir = true;
    while(confir) {
        var w = window.find(t, false);
        confir = window.confirm('Deseas continuar buscando');
        if (w == false) {
            confir = false;
            var r = window.confirm('Deseas salir');
            if (r == true) {
                window.closed;
            } else {
                this.location.reload();
            }
        }
    }
}

