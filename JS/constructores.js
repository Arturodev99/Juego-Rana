//Terminado constructor personaje
function Personaje() {
    //this.vida = 3;
    
    this.nombre = 'personaje'
    this.img = niveles.personajes[localStorage.getItem('personajeActual')].imagenParada

    
    document.getElementById(PosicionOriginal).style.backgroundImage = 'url('+this.img+')';
    document.getElementById(PosicionNueva).style.backgroundImage = 'url('+this.img+')';
    if ( localStorage.getItem('personajeActual') == "Rana.png") {
        this.img.style.width = "80px";
    }
    if ( localStorage.getItem('personajeActual') == "Juanma.png" ||  localStorage.getItem('personajeActual') == "Jesus.png") {
        document.getElementById(PosicionOriginal).style.backgroundSize = "50%";
        document.getElementById(PosicionNueva).style.backgroundSize = "50%";
       
    
    }
    if (localStorage.getItem('personajeActual')=='link_quieto.png'){
        this.img.style.width = "80px";
    }
    
}


// Constructor niveles
function Nivel() {
    var nivel = parseInt(localStorage.getItem('nivelActual'));
    Personaje()
    

    this.fondo = niveles.escenarios[nivel].imagen;
    document.getElementById("pantalla").style.backgroundImage = 'url('+niveles.escenarios[nivel].imagen+')'

}




function Enemigo() {
    this.urlEnemigo = "direccionEnemigoParametrizada";
    this.posicionX = "1px"
    this.posicionY = 0
    this.velocidad = 0
}


