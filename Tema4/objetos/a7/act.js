class Empleado {
    constructor(nombre, departamento) {
        this.__nombre = nombre || '';
        this.__departamento = departamento || "General";
    }

    obtDetalles() {
        for (var i in this){
            if (typeof this[i] != 'function') {
                console.log(this[i]);
            }
        }
    }
}

class Director extends Empleado {
    constructor(nombre, departamento, informes) {
        super(nombre, departamento);

        //this._departamento = departamento || 'General';
        this.__informes = informes || [];
    }
}

class Trabajador extends Empleado {
    constructor(nombre, departamento, proyectos) {
        super(nombre, departamento);

        this.__proyectos = proyectos || [];
    }
}

class Ingeniero extends Trabajador {
    constructor(nombre, departamento, proyectos, maquina) {
        super(nombre, departamento, proyectos);

        this.__maquina = maquina || '';
        this.__departamento = departamento || 'Ingenieria';
    }
}

var e = new Empleado('pepe');
e.obtDetalles();

console.log('');

var d = new Director('juan', 'General');
d.obtDetalles();

console.log('');

var t = new Trabajador('Pepe', 'General');
t.obtDetalles();

console.log('');

var i = new Ingeniero('Alvaro', 'General', [], 'ordenador');
i.obtDetalles();