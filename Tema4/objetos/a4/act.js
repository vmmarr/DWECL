function Factura(cliente, elementos = [], info = {}) {
    this.cliente = cliente;
    this.elementos = [
        {descripcion: 'Gafas', cantidad: 2, precio: 6},
        {descripcion: 'Radio', cantidad: 1, precio: 10}
    ];
    this.info = {
        iva: 0.21,
        formaPago: 'contado',
        baseImponible: 0,
        total: 0
    };
}

Factura.prototype.empresa = ['Empresa 1', 'calle 1', 6665868658, 5242155214];

function Cliente(nombre, direccion, telefono, nif) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
    this.nif = nif;
}

Factura.prototype.calculaBase = function() {
    var total = 0;
    for (var i = 0; i < this.elementos.length; i++) {
        total += parseFloat(this.elementos[i].cantidad * this.elementos[i].precio);
    }
    // console.log(total);
    this.baseImponible = total;
}

Factura.prototype.calculaTotal = function() {
    this.calculaBase();
    // console.log(this.baseImponible);
    // console.log(this.info.iva);
    this.total = parseFloat(this.baseImponible) * (1 + (parseFloat(this.info.iva)));
}

Factura.prototype.muestraTotal = function() {
    console.log(`Total: ${parseFloat(this.total)} €`);
}

var factura = new Factura(
    new Cliente("Antonio", "Calle Paz", 956342365, "34871222N"),
);

factura.calculaTotal();
factura.muestraTotal();	