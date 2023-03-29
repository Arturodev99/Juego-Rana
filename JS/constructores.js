//Terminado constructor personaje
function Personaje() {
    this.vida = 3;
    this.x = window.innerWidth / 2 - 100;
    this.y = 5;
    
    this.img.src = localStorage.getItem('personajeActual');
    this.img.style.width = "80px";
    this.contenedor.appendChild(this.img);
    document.querySelector("body").appendChild(this.contenedor);
    if ( localStorage.getItem('personajeActual') == "Rana.png") {
        this.img.style.width = "80px";
    }
    if ( localStorage.getItem('personajeActual') == "Juanma.png" ||  localStorage.getItem('personajeActual') == "Jesus.png") {
        this.img.style.width = "50px";
        this.img.style.height = "80px";
    }
}


// Constructor niveles
function Nivel(primerNivel) {
    
    Personaje()

    this.fondo = niveles.escenarios[primerNivel].imagen
    document.getElementById("pantalla").style.backgroundImage = 'url('+this.fondo+')'

}




function Enemigo() {
    this.urlEnemigo = "direccionEnemigoParametrizada";
    this.posicionX = "1px"
    this.posicionY = 0
    this.velocidad = 0
}


