import {getLocalList, setLocalList} from "./localStorage";

function agregarPersona(persona, index){

    // Creo la FILA
    var trNuevo = document.createElement('tr');
    // Index = nro de personaje

    // Creo un elemento que sea el nro de personaje
    var tdIndex = document.createElement('td');
    tdIndex.innerHTML = index;

    //Agregar el nro de personaje a la fila
    trNuevo.appendChild(tdIndex);

    // Creo un elemento que sea el nombre de personaje
    var tdNombre = document.createElement('td');
    tdNombre.innerHTML = persona.name;

    //Agregar el nombre de personaje a la fila
    trNuevo.appendChild(tdNombre);

    // Creo un elemento que sea el genero de personaje
    var tdGenero = document.createElement('td');
    tdGenero.innerHTML = persona.gender;

    //Agregar el genero de personaje a la fila
    trNuevo.appendChild(tdGenero);

    // Creo un elemento que sea el genero de personaje
    var tdAltura = document.createElement('td');
    tdAltura.innerHTML = persona.height;

    //Agregar el genero de personaje a la fila
    trNuevo.appendChild(tdAltura);

    // Creo un elemento que sea el genero de personaje
    var tdPeso = document.createElement('td');
    tdPeso.innerHTML = persona.mass;

    //Agregar el genero de personaje a la fila
    trNuevo.appendChild(tdPeso);

    // Creo un elemento que sea el genero de personaje
    var tdEyeColor = document.createElement('td');
    tdEyeColor.innerHTML = persona.eye_color;

    //Agregar el genero de personaje a la fila
    trNuevo.appendChild(tdEyeColor);


    // Creo un elemento que sea el genero de personaje
    var button = document.createElement('button');
    button.style.color = "white";
    button.id = index;

    var personas = getLocalList('personas');

    if (!personas.some(yaEstaEnLS)){
        button.style.background = 'green'
        button.innerHTML = 'guardar';
        button.className = "guardar";
    } else {
        button.style.background = 'red'
        button.innerHTML = 'eliminar';
        button.className = "eliminar";
    }

    function yaEstaEnLS(personaDeLS){
        return personaDeLS.name === persona.name;
    }

    //Agregar el genero de personaje a la fila
    trNuevo.appendChild(button);
    // BUSCO el cuerpo de la tabla y agrego la fila a la tabla
    var tableBody = document.getElementById('tableBody');
    tableBody.appendChild(trNuevo);

}

function guardarPersona(persona){
    var personas = getLocalList('personas');
    if (!personas || personas.length == 0) personas = [];
    personas.push(persona);
    setLocalList('personas', personas);
}


function eliminarPersona(persona){
    var personas = getLocalList('personas');

    personas.forEach(function(personaEnLS, index){
        if (personaEnLS.name === persona.name){
            personas.splice(index, 1);
        }
    });

    setLocalList('personas', personas);
}

export { agregarPersona, guardarPersona , eliminarPersona}