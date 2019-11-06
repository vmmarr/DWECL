function Vehiculo(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
}

Vehiculo.prototype.mostrarDatos = function() {
    
}

var v1 = new Vehiculo('seat', 'ibiza', 'verde', '2009');
var v2 = new Vehiculo('nissan', 'micra', 'azul', '2005');

v1.mostrarDatos();
console.log(v1.marca);
console.log(v2['color']);