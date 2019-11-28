//Actividad 1 y 3
// function valida(e) {
//     e.preventDefault();
//     if (this.checkValidity() == false) {
//         var name = e.target.name;
//         switch (name) {
//             case "dni": this.setCustomValidity('El DNI es inválido'); 
//                 break;
//             case "nombre": this.setCustomValidity('Debe haber mínimo 1 nombre y apellido, y de máximo 2 nombres y apellidos'); 
//                 break;
//             case "fnac": this.setCustomValidity('Debe haber mínimo 1 nombre y apellido, y de máximo 2 nombres y apellidos'); 
//                 break;
//             case "email": this.setCustomValidity('Debe ser una dirección de correo válida'); 
//                 break;
//             case "pagweb": this.setCustomValidity('Debe ser una dirección URL válida'); 
//                 break;
//             case "contrasena": this.setCustomValidity('Debe tener un mínimo de 8 caractéres y un máximo de 10'); 
//                 break;
//             case "confirmar-contrasena": this.setCustomValidity('Debe tener un mínimo de 8 caractéres y un máximo de 10'); 
//                 break;
//             case "num-hijos": this.setCustomValidity('Debe establecer un número de hijos mínimo 0 y máximo 10'); 
//                 break;
//         } 
//         this.reportValidity();                                
//         this.value = '';
//     }
// }

// window.onload = function() {
//     var inputs = document.forms[0].elements;
//     for (var i = 0; i < inputs.length; i++) {
//         inputs[i].addEventListener('change', valida);
//     }
// }


// Actividad 4

function crear() {
    var f = new Date(2019, 11, 27);
    var dni = document.getElementById('dni').value;
    var nombre = document.getElementById('nombre').value;
    var fnac = document.getElementById('fnac').value;
    var email = document.getElementById('email').value;
    var pagweb = document.getElementById('pagweb').value;
    var contrasena = document.getElementById('contrasena').value;
    var confirmarContrasena = document.getElementById('confirmarContrasena').value;
    var numHijos = document.getElementById('numHijos').value;

    setCookie('dni', dni, f);
    setCookie('nombre', nombre, f);
    setCookie('fnac', fnac, f);
    setCookie('email', email, f);
    setCookie('pagweb', pagweb, f);
    setCookie('contrasena', contrasena, f);
    setCookie('confirmarContrasena', confirmarContrasena, f);
    setCookie('numHijos', numHijos, f);
}

function mostrarCookies() {
    var inp = document.getElementsByTagName('input');

    for (var i = 0; i < inp.length-2; i++) {
        console.log(getCookie(inp[i].id));
        
    }
}

document.getElementById('guardar').addEventListener('click', crear);
document.getElementById('ver').addEventListener('click', mostrarCookies);

// Actividad 2
function valida(e) {
    if (this.checkValidity() == false) {
        this.value = '';
    }
}

window.onload = function() {
    var inputs = document.forms[0].elements;
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', valida);
    }
}


// Actividad 5

function contador() {
    var g = new Date(2019, 11, 27);
    var visitado = 0;
    
    setCookie('visitado', (visitado)+1, g);
}