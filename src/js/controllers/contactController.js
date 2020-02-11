function contactController(){


    var nombre = $('#firstName');
    var email = $('#email');
    var comentario = $('#comments');
    var btnEnviar = $('#submitButton');
    
    nombre.on('blur', validarNombre);
    email.on('blur', validarEmail);
    comentario.one('blur', validarComentario);
    
    function validarBoton(){
        // tomo todos los elementos que contengan la clase 'is-valid'
        var elementosValidos = $('.is-valid');
        // si los elementos tomados son 3 (campo nombre, campo email y campo comentario) habilito el boton
        if (elementosValidos.length === 3){
            btnEnviar.attr('disabled', false)
        } else {
            btnEnviar.attr('disabled', true)
        }
    }
    
    function validarNombre(evento){

        //console.log('corriendo validacion nombre')

        var mensajeErrorNombre = '';
    
        // creo variable que tome el elemento al que se aplica la funcion
        var textoError = $(this);
    
        // quito el texto de error, si fuera necesario se agrega adelante
        textoError.next().remove();
    
    
        if(!textoError.val()){
            mensajeErrorNombre = 'Campo requerido'
        }
    
        // si el mensaje de error existe agrego clase invalido
        if(mensajeErrorNombre){
            textoError.addClass('is-invalid');
            textoError.removeClass('is-valid');
    
            //agrego mensaje de error al parent como un div
            var parentDivError = textoError.parent();
            parentDivError.append('<div class="invalid-feedback">' + mensajeErrorNombre + '</div>')
        } else {
            // si no, agrego clase valido
            textoError.addClass('is-valid');
            textoError.removeClass('is-invalid');
        }
    
        // activo evento input para después de la primera validacion
        if(evento.type === 'blur'){
            textoError.on('input', validarNombre);
        }

        // llamo validar boton
        validarBoton()
    }


    function validarEmail(evento){
     
        //console.log('corriendo validacion email')

        var mensajeErrorEmail = '';

        // creo variable que tome el elemento al que se aplica la funcion
        var textoError = $(this);

        // quito el texto de error, si fuera necesario se agrega adelante
        textoError.next().remove();

        //creo variable con el valor de lo ingresado en el campo
        var datosIngresadosEnEmail = textoError.val();

        // si lo ingresado no cumple algo de lo siguiente, el mensaje de error toma los siguientes valores
        if(!datosIngresadosEnEmail){
            mensajeErrorEmail = 'Campo requerido '
        } else if ((datosIngresadosEnEmail.indexOf('.') === -1) && (datosIngresadosEnEmail.indexOf('@') !== -1)){
            mensajeErrorEmail = 'Debe contener punto '
        } else if ((datosIngresadosEnEmail.indexOf('.') !== -1) && (datosIngresadosEnEmail.indexOf('@') === -1)){
            mensajeErrorEmail = 'Debe contener arroba '
        } else if((datosIngresadosEnEmail.indexOf('@') === -1) && (datosIngresadosEnEmail.indexOf('.') === -1)){
            mensajeErrorEmail = 'Debe contener punto y arroba'
        }

        //si el mensaje de error existe se invalida el campo
        if(mensajeErrorEmail){
            textoError.addClass('is-invalid');
            textoError.removeClass('is-valid');

            //agrego mensaje de error al parent como un div
            var parentDivError = textoError.parent();
            parentDivError.append('<div class="invalid-feedback">' + mensajeErrorEmail + '</div>')
        } else {
            // si no, agrego clase valido
            textoError.addClass('is-valid');
            textoError.removeClass('is-invalid');
        }
        
        // activo evento input para después de la primera validacion
        if(evento.type === 'blur'){
            textoError.on('input', validarEmail);
        }

        // llamo validar boton
        validarBoton()
    }

    function validarComentario(evento){

        //console.log('corriendo validacion comentario')

        var mensajeErrorComentario = '';
    
        // creo variable que tome el elemento al que se aplica la funcion
        var textoError = $(this);
    
        // quito el texto de error, si fuera necesario se agrega adelante
        textoError.next().remove();
    
    
        if(!textoError.val()){
            mensajeErrorComentario = 'Campo requerido'
        }
    
        // si el mensaje de error existe agrego clase invalido
        if(mensajeErrorComentario){
            textoError.addClass('is-invalid');
            textoError.removeClass('is-valid');
    
            //agrego mensaje de error al parent como un div
            var parentDivError = textoError.parent();
            parentDivError.append('<div class="invalid-feedback">' + mensajeErrorComentario + '</div>')
        } else {
            // si no, agrego clase valido
            textoError.addClass('is-valid');
            textoError.removeClass('is-invalid');
        }
    
        // activo evento input para después de la primera validacion
        if(evento.type === 'blur'){
            textoError.on('input', validarComentario);
        }

        // llamo validar boton
        validarBoton()
    }







    console.log('Se cargo contacto')
}

export default contactController