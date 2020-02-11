
import { getLocalList, setLocalList } from './../utils/localStorage'
import { agregarPersona, guardarPersona } from './../utils/personas'

function peopleController(){

    $.get("https://swapi.co/api/people", function(data, status){
        var personas = data.results;
        personas.forEach(agregarPersona);

        $('.guardar').click(function(evento) {
            var index = evento.target.id;
            guardarPersona(personas[index]);

            evento.target.style.background = 'red';
            evento.target.innerHTML = 'eliminar';
        })
    });

}

export default peopleController