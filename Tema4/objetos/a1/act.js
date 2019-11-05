function Vehiculo(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;
}

function mostrarDatos(v) {
    for (var i in v) {
        if (v.hasOwnProperty(i)) {
            console.log(`${i}: ${v[i]}`);	
        }
        
    }
}

function acelerar(v, velocidad) {
    console.log(`El coche ${v.marca} a acelerado ${velocidad} km`);
}

var v1 = new Vehiculo('seat', 'ibiza', 'verde', '2009');
var v2 = new Vehiculo('nissan', 'micra', 'azul', '2005');

mostrarDatos(v1);
console.log(v1.marca);
console.log(v2['color']);