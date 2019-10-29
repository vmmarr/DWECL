var v = [];
for (var i = 0; i < 10; i++) {
    v[i] = Math.round((Math.random()*1000));
}
console.log(v);

var min = Math.min(...v);
var max = Math.max(...v);

console.log(`El numero menor es ${min}`);

console.log(`El numero mayor es ${max}`);

var v2 = v.slice();

var pmin = v2.indexOf(min);
var pmax = v2.indexOf(max);

v2.splice(pmin, 1);
v2.splice(pmax, 1);

console.log(v2);