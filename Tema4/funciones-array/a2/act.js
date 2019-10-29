function obtenerImporteConImpuestos(importe, tipo) {
			var importe = parseFloat(importe);
			var tipo = tipo || 1;

			if (typeof(tipo) == 'number') {
				if (tipo <= 0 || tipo > 3) {
					alert('Error: el tipo que has introducido no es valido.');
				} else {
					switch (tipo) {
					case 1:
						return (importe + 1.21).toFixed(2);
						break;
					case 2:
						return (importe + 1.10).toFixed(2);
						break;
					case 3:
						return (importe + 1.05).toFixed(2);
						break;
					}
				}
			} else {
				alert('Error: no estas metiendo un numero.');
			}
				
		}

		alert(obtenerImporteConImpuestos(20.22222));