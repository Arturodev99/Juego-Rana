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
var nivelActual
function nivelactual(){
    
    
    if(j!=0 || localStorage.getItem('nivelActual')!="undefined"){
    nivelActual=localStorage.getItem('nivelActual');
    }
    
    if(localStorage.getItem('nivelActual') == "0" ||localStorage.getItem('nivelActual') == "null"){
        localStorage.removeItem('nivelActual')
        localStorage.setItem('nivelActual','0')
    }}