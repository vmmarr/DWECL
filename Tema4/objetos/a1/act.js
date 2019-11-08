function Vehiculo(marca, modelo, color, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anio = anio;

    this.arrancar = function() {
        console.log(`El coche de marca ${this.marca}, modelo ${this.modelo}, color ${this.color} ha arrancado`);	
    }
}

Vehiculo.prototype.mostrarDatos = function() {
    for (var e in this) {
        if (this.hasOwnProperty(e)) {
            console.log(`${e}: ${this[e]}`);	
        }
    }
}

Vehiculo.prototype.acelerar = function(velocidad) {
    console.log(`El vehiculo ha acelerado ${velocidad} km`);
}

Vehiculo.prototype.cilindrada;

Vehiculo.prototype.frenar = function() {
    console.log(`El coche marca ${this.marca}, modelo ${this.modelo} y color ${this.color} ha parado`);
}

var v1 = new Vehiculo('seat', 'ibiza', 'verde', '2009');
var v2 = new Vehiculo('nissan', 'micra', 'azul', '2005');

Object.defineProperties(v1, {
    marca: {
        configurable: false
    }, 
    modelo: {
        value: 'xx',
        writable: false
    },
    arrancar: {
        value: v1.arrancar,
        enumerable: false
    },
    acelerar: {
        value: v1.acelerar,
        enumerable: false
    },
    frenar: {
        value: v1.frenar,
        enumerable: false
    }
});


v1.mostrarDatos();
v1.acelerar(120);
v1.arrancar();
v1.frenar();
delete v1.marca;
v1.modelo = 'c3';
v1.mostrarDatos();
console.log(Object.keys(v1));

console.log(Object.getOwnPropertyNames(v1));