//Terminado constructor personaje
function Personaje(eleccion) {
    this.vida = 3;
    this.x = window.innerWidth / 2 - 100;
    this.y = 5;
    this.contenedor = document.createElement("div");
    this.contenedor.style.position = "absolute";
    this.contenedor.style.left = "50%";
    this.contenedor.style.transform = "translate(-50%, 0)";
    this.contenedor.style.top = this.y + "px";
    this.img = document.createElement("img");
    this.img.src = "../Media/Images/Personajes/" + eleccion;
    this.img.style.width = "80px";
    this.contenedor.appendChild(this.img);
    document.querySelector("body").appendChild(this.contenedor);
    if (eleccion == "Rana.png") {
        this.img.style.width = "80px";
    }
    if (eleccion == "Juanma.png" || eleccion == "Jesus.png") {
        this.img.style.width = "50px";
        this.img.style.height = "80px";
    }
}


// Constructor niveles
function Nivel(primerNivel) {
    
    //Personaje(eleccion)

    this.fondo = niveles.escenarios[primerNivel].imagen
    document.getElementById("pantalla").style.backgroundImage = this.fondo


}




function Enemigo() {
    this.urlEnemigo = "direccionEnemigoParametrizada";
    this.posicionX = "1px"
    this.posicionY = 0
    this.velocidad = 0
}


