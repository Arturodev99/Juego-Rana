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
    console.log(niveles.enemigos.length)
    for(i=0; i< niveles.enemigos.length; i++){
        if(niveles.enemigos[i].nivel == localStorage.getItem('nivelActual')){
            this.img = niveles.enemigos[i].imagen;
            this.posicion = niveles.enemigos[i].posicionInicial;
            this.velocidad = niveles.enemigos[i].velocidad;
            document.getElementById(niveles.enemigos[i].posicionInicial).style.backgroundImage= 'url('+niveles.enemigos[i].imagen+')';
            document.getElementById(niveles.enemigos[i].posicionInicial).className='limite';
        
        }
        
      
        if(niveles.enemigos[i].avance == '-1'){
            document.getElementById(niveles.enemigos[i].posicionInicial).style.transform='rotateY(180deg)'
        }

        
    }
    
}


function movimiento(){
    
}