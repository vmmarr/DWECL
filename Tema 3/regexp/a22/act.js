var f = prompt('Introduce una frase');
var r = /(^|\.\s)(\w+)\b/gi;
var a = r.exec(f);
var ar =[];

//console.log(a);

while (a)  {
    ar.push(a[2]);
    a = r.exec(f);
}
alert(ar);