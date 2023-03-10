function Personaje() {
    this.vida = 3;
    this.x = window.innerWidth / 2 - 100;
    this.y = 20;
    this.contenedor = document.createElement("div");
    this.contenedor.style.left = "50%";
    this.contenedor.style.left = this.x + "px";
    this.contenedor.style.top = this.y + "px";
    this.img = document.createElement("img");
    this.img.src = "../Media/Images/Personajes/Rana.png";
    this.img.style.width = "100px"
    this.contenedor.appendChild(this.img);
    document.getElementById("contenedor-personajes").appendChild(this.contenedor);
}




function Fondo() {
    this.urlFondo = "direccionImagenFondo";
    this.numeroEnemigos = 0;
}

function Nivel() {
    this.Fondo = new Fondo;
    personaje = new Personaje();
}

function Enemigo() {
    this.urlEnemigo = "direccionEnemigoParametrizada";
    this.posicionX = "1px"
    this.posicionY = 0
    this.velocidad = 0
}

