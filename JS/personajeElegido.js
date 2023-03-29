function personajeElegido(urlPersonaje){
    var personajeElegidoActual
    personajeElegidoActual = "../Media/Images/Personajes/" + urlPersonaje
    localStorage.setItem('personajeActual', personajeElegidoActual)
}

function mundoElegido(urlMundo){
    var mundoElegidoActual
    mundoElegidoActual = ""
    localStorage.setItem('mundoActual', mundoElegidoActual)
}