//Terminado constructor personaje
var intervalo1;
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
    
}


// Constructor niveles
function Nivel() {
    var nivel = parseInt(localStorage.getItem('nivelActual'));
    Personaje()
    Enemigo()

    this.fondo = niveles.escenarios[nivel].imagen;
    document.getElementById("pantalla").style.backgroundImage = 'url('+niveles.escenarios[nivel].imagen+')'

}




function Enemigo() {
    this.img = niveles.enemigos[1].imagen;
    this.posicion = niveles.enemigos[2].posicionInicial;
    this.velocidad = niveles.enemigos[1].velocidad;
    console.log(this.Enemigo)
    if(niveles.enemigos[2].avance == '-1'){
        document.getElementById(niveles.enemigos[2].posicionInicial).style.transform='rotateY(180deg)'
    }
    document.getElementById(niveles.enemigos[2].posicionInicial).style.backgroundImage= 'url('+niveles.enemigos[1].imagen+')'
    document.getElementById(niveles.enemigos[2].posicionInicial).className='limite';

}


function movimiento(){
    
}