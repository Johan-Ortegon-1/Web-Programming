window.onload = function(){
    var titulo = document.createElement("h1")
    var texto = document.createTextNode("Hola mundo!")
    titulo.appendChild(texto)
    document.body.appendChild(titulo)
}