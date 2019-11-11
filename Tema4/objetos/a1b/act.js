function Vehiculo(marca, modelo, color, anyo) {
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.anyo = anyo;
}

Vehiculo.prototype.mostrarDatos = function(){
    for (var e in this) {
        if (this.hasOwnProperty(e)) {
            x += `<td>${this[e]}</td>`;	
        }
    }
};

var v1 = new Vehiculo('Ferrari', 'Scaglietti', 'Rojo', 2010);
var v2 = new Vehiculo('BMW', 'Z4', 'Blanco', 2010);
var v3 = new Vehiculo('Seat', 'Toledo', 'Azul', 1999);
var v4 = new Vehiculo('Fiat', '500', 'Verde', 1995);

var v = [v1, v2, v3, v4];

var t = document.createElement('table');
t.setAttribute('id', 'tabla');
t.setAttribute('border', '1');
document.body.appendChild(t);

var c = Object.keys(v1);
var tabla = document.getElementById('tabla');
var x = '<tr>';

for (var i = 0; i < c.length; i++) {
    console.log(i);
    x += `<th>${c[i]}</th>`;
}

x += '</tr>';		

for (var i = 0; i < v.length; i++) {
    x += '<tr>';
    v[i].mostrarDatos();
    x += '</tr>';
}

tabla.innerHTML = x;