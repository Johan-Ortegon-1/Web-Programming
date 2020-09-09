/*Chat*/
function get_action() {
    return form_action;
}

function mandarHistorial() {
    
    let errorNombre = document.querySelector('#error1')
    let errorMensaje = document.querySelector('#error2')

    let textAreaHistorial = document.querySelector('#txtHist')
    let textAreaMensaje = document.querySelector('#txtMss')
    let textNombre = document.querySelector("#txtNombre")
    let textoNombre = textNombre.value
    let textoMensaje = textAreaMensaje.value
    let textoPrevio = textAreaHistorial.value

    errorNombre.style.visibility = "hidden";
    errorMensaje.style.visibility = "hidden";

    if (textoMensaje.length == 0 && textoNombre == 0){
        alert("Los campos están vacíos!!!");
        errorMensaje.style.visibility = "visible";
        errorNombre.style.visibility = "visible";
    }
    else if (textoMensaje.length == 0) {
        alert("El campo de \"Mensaje\" no puede estar vacío");
        errorMensaje.style.visibility = "visible";
    }
    else if (textoNombre == 0){
        alert("El campo de \"Nombre\" no puede estar vacío");
        errorNombre.style.visibility = "visible";
    }
    else if (textoMensaje.length > 300) {
        alert("El contenido en el campo \"Mensaje\" no puede superar los: \n" + "300 caracteres");
        errorMensaje.style.visibility = "visible";
    }
    else {
        //Mostrar en el historial
        textAreaHistorial.value = textoPrevio + "\n" + textoMensaje + "----By: " + textoNombre

        //Reiniciar campos
        textAreaMensaje.value = ""
    }
}
