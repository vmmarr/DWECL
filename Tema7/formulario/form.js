$(document).ready(function () {
    jQuery.validator.addMethod('nombre', function(value,element) {
        return this.optional(element) ||  /[A-Z][a-z]/.test(value);
    });

    jQuery.validator.addMethod('telefono', function(value,element) {
        return this.optional(element) ||  /[0-9]{3}-[0-9]{6}/.test(value);
    });

    jQuery.validator.addMethod('cp', function(value,element) {
        return this.optional(element) ||  /[0-9]{5}/.test(value);
    });

    jQuery.validator.addMethod('email', function(value,element) {
        return this.optional(element) ||  /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/.test(value);
    });

    $('#f').validate({
        rules: {
            nombre: {
                required: true,
                nombre: true
            },
            tel: {
                required: true,
                telefono: true
            },
            cp: {
                required: true,
                cp: true
            },
            email: {
                required: true,
                email: true
            },
        },

            messages: {
                nombre: {
                    required: "Inserta tu nombre",
                    nombre: "No cumple con el formato Xxxx"
                },

                tel: {
                    required: "Inserta tu telefono",
                    telefono: "No cumple con el formato xxx-xxxxxx"
                },

                cp: {
                    required: "Inserta tu cp",
                    cp: "No cumple con el formato xxxxx"
                },

                email: {
                    required: "Inserta tu email",
                    email: "No cumple con el formato xxx@xxxx.xx"
                },

            },
        
        submitHandler: function() {
            alert('Formulario enviado');
        },
    });



});