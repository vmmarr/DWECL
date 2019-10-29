var obtenerImporteConImpuestos2 = function(importe) {
    var a = new Array(3);
    var importe = parseFloat(importe);

    if (typeof(importe) == 'number') {
        for (var i = 0; i <= a.length; i++) {
            if (i == 0) {
                a[i] = "undefined";
            } else if (i == 1) {
                a[i] = (importe + 1.21).toFixed(2);
            } else if (i == 2) {
                a[i] = (importe + 1.10).toFixed(2);
            } else if (i == 3) {
                a[i] = (importe + 1.05).toFixed(2);
            }	
        }
    } else {
        alert('Error: el importe no es un numero.');
    }
    alert(a);
}

obtenerImporteConImpuestos2(20.22222);