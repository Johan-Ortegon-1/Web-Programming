/*Uso Global*/
function changeColor(elem) {

    let clases = elem.classList;
    let claseAnterior = clases[0]
    console.log("Clase anterior: " + claseAnterior)
    elem.classList.remove(claseAnterior);
    elem.classList.add("cambio_color2")
    elem.addEventListener("mouseleave",
        function () {
            elem.classList.remove("cambio_color2");
            elem.classList.add(claseAnterior)
        })
}





