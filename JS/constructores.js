//Terminado constructor personaje
contador = 1;
function Personaje() {
    //this.vida = 3;

    this.nombre = 'personaje'
    this.img = niveles.personajes[localStorage.getItem('personajeActual')].imagenParada


    document.getElementById(PosicionOriginal).style.backgroundImage = 'url(' + this.img + ')';
    document.getElementById(PosicionNueva).style.backgroundImage = 'url(' + this.img + ')';
    if (localStorage.getItem('personajeActual') == "Rana.png") {
        this.img.style.width = "80px";
    }
    if (localStorage.getItem('personajeActual') == "Juanma.png" || localStorage.getItem('personajeActual') == "Jesus.png") {
        document.getElementById(PosicionOriginal).style.backgroundSize = "50%";
        document.getElementById(PosicionNueva).style.backgroundSize = "50%";


    }
    
}

//var intervalo = setInterval(movimiento, 500)

// Constructor niveles
function Nivel() {
    clearInterval(intervalo)
    var nivel = parseInt(localStorage.getItem('nivelActual'));
    Personaje()
    Enemigo()
    this.fondo = niveles.escenarios[nivel].imagen;
    document.getElementById("pantalla").style.backgroundImage = 'url(' + niveles.escenarios[nivel].imagen + ')'
    //var intervalo = setInterval(movimiento, 1000)
    //intervalo
    
    
}


var pasos = 1
var bandera = false
function movimiento() {
    if(PosicionOriginal >= 97){
        clearInterval(intervalo)
        console.log("intervalo limpiado")
    }
    for (i = 0; i < niveles.enemigos.length; i++) {
        if (niveles.enemigos[i].nivel == nivelActual && pasos < 12 && bandera == false) {
            this.img = niveles.enemigos[i].imagen;
            this.posicion = parseInt(niveles.enemigos[i].posicionInicial) + pasos;
            this.posicionAnterior = parseInt(niveles.enemigos[i].posicionInicial) + pasos - 1;
            this.posicionSiguiente = parseInt(niveles.enemigos[i].posicionInicial) + pasos + 1
            this.velocidad = niveles.enemigos[i].velocidad;
            document.getElementById(this.posicion).style.backgroundImage = 'url(' + niveles.enemigos[i].imagen + ')';
            document.getElementById(this.posicion).className = 'limite';
            document.getElementById(this.posicion).style.transform = 'rotateY(0deg)'
            document.getElementById(this.posicionAnterior).style.backgroundImage = 'none';
            document.getElementById(this.posicionAnterior).className = 'casilla';
            //document.getElementById(this.posicionSiguiente).style.backgroundImage = 'none';
            //document.getElementById(this.posicionSiguiente).className = 'casilla';

            pasos++
        }
        if(pasos == 11) bandera = true
        if (niveles.enemigos[i].nivel == nivelActual && pasos >= 0 && bandera == true) {
            this.img = niveles.enemigos[i].imagen;
            this.posicion = parseInt(niveles.enemigos[i].posicionInicial) + pasos;
            this.posicionAnterior = parseInt(niveles.enemigos[i].posicionInicial) +pasos + 1;
            this.velocidad = niveles.enemigos[i].velocidad;
            
                document.getElementById(this.posicion).style.transform = 'rotateY(180deg)'
            
            document.getElementById(this.posicion).style.backgroundImage = 'url(' + niveles.enemigos[i].imagen + ')';
            document.getElementById(this.posicion).className = 'limite';

            document.getElementById(this.posicionAnterior).style.backgroundImage = 'none';
            document.getElementById(this.posicionAnterior).className = 'casilla';

            pasos--
        }
       
    }
    if(pasos == 0)bandera = false
    if(this.posicion == PosicionOriginal){
        vida--
        l--
        PosicionNueva=6
        PosicionOriginal=6;
       
        Comienzo();
    }

    
}

function Enemigo() {
    
    for (i = 0; i < niveles.enemigos.length; i++) {
        if (niveles.enemigos[i].nivel == nivelActual) {
            this.img = niveles.enemigos[i].imagen;
            this.posicion = niveles.enemigos[i].posicionInicial;
            this.velocidad = niveles.enemigos[i].velocidad;
            document.getElementById(niveles.enemigos[i].posicionInicial).style.backgroundImage = 'url(' + niveles.enemigos[i].imagen + ')';
            document.getElementById(niveles.enemigos[i].posicionInicial).className = 'limite';

        }


        if (niveles.enemigos[i].avance == '-1') {
            document.getElementById(niveles.enemigos[i].posicionInicial).style.transform = 'rotateY(180deg)'
        }


    }

}





