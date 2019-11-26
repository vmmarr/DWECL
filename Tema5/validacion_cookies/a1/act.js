function valida(e) {
    e.preventDefault();
    if (this.checkValidity() == false) {
        var name = e.target.name;
        switch (name) {
            case "dni": this.setCustomValidity('El DNI es inválido'); 
                break;
            case "nombre": this.setCustomValidity('Debe haber mínimo 1 nombre y apellido, y de máximo 2 nombres y apellidos'); 
                break;
            case "fnac": this.setCustomValidity('Debe haber mínimo 1 nombre y apellido, y de máximo 2 nombres y apellidos'); 
                break;
            case "email": this.setCustomValidity('Debe ser una dirección de correo válida'); 
                break;
            case "pagweb": this.setCustomValidity('Debe ser una dirección URL válida'); 
                break;
            case "contrasena": this.setCustomValidity('Debe tener un mínimo de 8 caractéres y un máximo de 10'); 
                break;
            case "confirmar-contrasena": this.setCustomValidity('Debe tener un mínimo de 8 caractéres y un máximo de 10'); 
                break;
            case "num-hijos": this.setCustomValidity('Debe establecer un número de hijos mínimo 0 y máximo 10'); 
                break;
        } 
        this.reportValidity();                                
        this.value = '';
    }
}

window.onload = function() {
    var inputs = document.forms[0].elements;
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener('change', valida);
    }
}

// Actividad 2
// function valida(e) {
//     if (this.checkValidity() == false) {
//         this.value = '';
//     }
// }

// window.onload = function() {
//     var inputs = document.forms[0].elements;
//     for (var i = 0; i < inputs.length; i++) {
//         inputs[i].addEventListener('change', valida);
//     }
// }