var f = prompt('Introduce una frase');
var r = /\b(\w+)($|\.)/gi;
var a = r.exec(f);
var ar =[];

//console.log(a);

while (a)  {
    ar.push(a[1]);
    a = r.exec(f);
}
alert(ar);