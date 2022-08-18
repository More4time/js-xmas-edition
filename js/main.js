


const $form = document.querySelector("#carta-a-santa");

const ciudad = $form.ciudad.value;
const nombre = document.querySelector("#nombre").value;
const comportamiento = $form.comportamiento.value;
const descripcionRegalo = $form["descripcion-regalo"].value




function validarNombre(nombre){
    if (nombre.length === 0) {
        return "El nombre tiene que tener al menos 1 caracter"
    }

    if (nombre.length >= 50) {
        return "El nombre tiene que tener menos de 50 caracteres"
    }
    return " ";
}



function validarCiudad(ciudad){
    
    if(ciudad.length === 0){
        return "No seleccionaste ninguna provincia"
    }

    return " ";
}

function validarDescripcionRegalo(descripcion){
    if(descripcion.length === 0){
        return "Tienes que escribir la descripción del regalo."
    }

    if(descripcion.length >= 100){
        return "Tiene que ser menor a 100 caracteres."
    }

    return " ";
}

