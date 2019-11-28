var u = document.getElementById('lista');

var a = [
    ['Seccion uno', 's1'], 
    ['Seccion dos'], 
    ['Seccion  tres', 's2']
];


for (var i = 0; i < a.length; i++) {
    var cabecera;
    for (var j = 0; j < a[i].length; j++) {
        if (j == 0) {
            cabecera = document.createElement('li');
            var n = document.createTextNode(a[i][j]);
            cabecera.setAttribute('id', `seccion${i}`); 
            cabecera.appendChild(n);
            u.appendChild(cabecera); 
        } else {
            var nL = document.createElement('ul');
            var l = document.createElement('li');
            var n = document.createTextNode(a[i][j]);
            l.appendChild(n);
            nL.appendChild(l); 
            cabecera.appendChild(nL);
        }
    }
}