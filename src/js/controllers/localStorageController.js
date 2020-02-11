import {agregarPersona, eliminarPersona} from "../utils/personas";
import {getLocalList} from "../utils/localStorage";

function localStorageController(){

    var personas = getLocalList('personas');
    personas.forEach(agregarPersona);

    $('.eliminar').click(function(evento) {
        var index = evento.target.id;
        eliminarPersona(personas[index]);

        evento.target.style.background = 'green';
        evento.target.innerHTML = 'guardar';
    })

}

export default localStorageController