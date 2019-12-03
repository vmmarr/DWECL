var u = document.getElementById('lista');

var a = [
    ['Seccion uno', 's1', 'ss'], 
    ['Seccion dos'], 
    ['Seccion  tres', 's2']
];


for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < a[i].length; j++) {
        if (j == 0) {
            var l = document.createElement('li');
            var n = document.createTextNode(a[i][j]);
            l.setAttribute('id', `seccion${i+1}`); 
            l.appendChild(n);
            u.appendChild(l); 
        } else if (j == 1) {
            var d = document.createElement('div');
            d.setAttribute('id', `subseccion${i+1}`); 
            var pa = document.createElement('p');
            var en = document.createElement('a');
            var n = document.createTextNode(a[i][j]);
            d.appendChild(pa);
            pa.appendChild(en);
            en.appendChild(n);
            l.appendChild(d);
        } else {
            var pa1 = document.createElement('p');
            var en1 = document.createElement('a');
            var n1= document.createTextNode(a[i][j]);
            pa1.appendChild(en1);
            en1.appendChild(n1);
            d.appendChild(pa1);
        }
    }
}


var li = document.getElementsByTagName('li');
console.log(li.length);

for (var i = 0; i < li.length; i++) {
    console.log(i);
    li[i].addEventListener('mouseover', mostrar, false);
    li[i].addEventListener('mouseout', ocultar, false);
    // li[i].setAttribute('onmouseover', mostrar);
    // li[i].setAttribute('onmouseout', ocultar);
}

function mostrar() {
    n++;
    var ss = document.getElementById("subseccion"+n).style.display="block";
    console.log(ss);
    
    //document.getElementById("subseccion"+n).style.display="block";
}
function ocultar() {
    n++;
    console.log('oculta');
    document.getElementById("subseccion"+n).style.display="none";
}