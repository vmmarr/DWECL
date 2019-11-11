function Empleado(nombre = '', departamento = 'General') {
    this.nombre = nombre;
    this.departamento = departamento;
}

function Director(nombre, departamento, informes = []) {
    Empleado.call(this, nombre, departamento);
    this.informes = informes;
}

Director.prototype = new Empleado();

function Trabajador(nombre, departamento, proyectos = []) {
    Empleado.call(this, nombre, departamento);
    this.proyectos = proyectos;
}

Trabajador.prototype = new Empleado();

function Ingeniero(nombre, departamento = 'Ingenieria', proyectos, maquina = '') {
    Trabajador.call(this, nombre, departamento, proyectos);
    this.maquina = maquina;
}
Ingeniero.prototype = new Trabajador();

Empleado.prototype.obtDetalles = function(){
    for (var i in this) {
        if (this.hasOwnProperty(i)) {
             console.log(`${i}: ${this[i]}`);
         }
    } 
};

var d1 = new Director();
var t1 = new Trabajador();
var i1 = new Ingeniero();

d1.obtDetalles();
t1.obtDetalles();
i1.obtDetalles();