window.onload = function() {
    function procesaRespuesta(data) { 
        var r = data.info;
        for (var i= 0; i < r.length; i++) {
            $('#accordion').append(`<div id="e0${i+1}"></div>`);
            $(`#e0${i+1}`).addClass('borde');
            $('#accordion').append('<br>');
            $(`#e0${i+1}`).append(`<span></span>`);
            $(`#e0${i+1}`).append(`<span></span>`);
            $(`#e0${i+1}`).children('span:eq(1)').append(`<ul></ul>`);
            $(`#e0${i+1} span:eq(1)`).hide();
            $.each(r[i], (k, v)=>{
                if (k == 'Imagen') {
                    $(`#e0${i+1} span:eq(0)`).append(`<img src="../images/${v}">`);
                } 
                
                if (k == 'cod' || k == 'Imagen') {
                    k++;
                } else {
                    $(`#e0${i+1} span:eq(1) ul`).append(`<li>${k}: ${v}</li>`);
                }
                
                
                $(`#e0${i+1}`).on('mouseenter', function() {
                    $(this).children('span:eq(1)').show();
                    
                });

                $(`#e0${i+1}`).on('mouseleave', function() {
                    $(this).children('span:eq(1)').hide();
                });
            });

        }
    }

    function consulta() {   
       $.get("getExpertsJSON.php", procesaRespuesta);  
    }

    $('input:eq(0)').attr('id', 'consultores');
    $('input:eq(1)').attr('id', 'especialidades');

    $('#info').on('change',function(){
        var r = $('input:checked').attr('id');
        if (r == 'consultores') {
            consulta();
        } else {
            $('#accordion').text('');
        }
    });
}