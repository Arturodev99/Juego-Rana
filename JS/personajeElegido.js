function personajeElegido(urlPersonaje){
    var personajeElegidoActual
    personajeElegidoActual =  urlPersonaje
    localStorage.removeItem('personajeActual')
    localStorage.setItem('personajeActual', personajeElegidoActual)
    location.href = '../HTML/nivel0.html'
}

function mundoElegido(urlMundo){
    var mundoElegidoActual
    mundoElegidoActual = ""
    localStorage.setItem('mundoActual', mundoElegidoActual)
}