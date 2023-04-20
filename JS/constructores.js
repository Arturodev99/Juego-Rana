//Terminado constructor personaje
f=0;
var avance = true;
var avance1 = true;
var Posicion = niveles.enemigos[f].posicionInicial;
var PosicionR = niveles.enemigos[f].posicionInicial;
var PosicionAntigua;
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
    Posicion = niveles.enemigos[f].posicionInicial;
    PosicionR = niveles.enemigos[f].posicionInicial
    Personaje()
    Enemigo()
    enemigosMovimiento();

    this.fondo = niveles.escenarios[nivel].imagen;
    document.getElementById("pantalla").style.backgroundImage = 'url('+niveles.escenarios[nivel].imagen+')'
    enemigosMovimiento();
}




function Enemigo() {
    
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
    for (let f = 0; f < niveles.enemigos.length; f++) {
        if(niveles.enemigos[f].nivel == nivelActual){
            if(Posicion == niveles.enemigos[f].posicionInicial || PosicionR == niveles.enemigos[f].posicionInicial){
            document.getElementById(Posicion).style.backgroundImage="";
            document.getElementById(Posicion).style.className="casilla";
            if(niveles.enemigos[f].avance == '-1'){
                PosicionNueva3= parseInt(PosicionR);
                PosicionNueva3--
                document.getElementById(PosicionNueva3).style.backgroundImage="url("+niveles.enemigos[f].imagen+")";
                document.getElementById(PosicionNueva3).style.className="limite";
                PosicionR=PosicionNueva3
            }else{
                PosicionNueva2=parseInt(Posicion)
                PosicionNueva2++;
                document.getElementById(PosicionNueva2).style.backgroundImage="url("+niveles.enemigos[f].imagen+")";
                document.getElementById(PosicionNueva2).style.className="limite";
                Posicion=PosicionNueva2
                }
            }
            else{
            if(niveles.enemigos[f].avance == '+1' && avance == true){
                PosicionAntigua=Posicion
                PosicionNueva2= parseInt(Posicion);
                PosicionNueva2++
                console.log(PosicionNueva2)
                document.getElementById(PosicionAntigua).style.backgroundImage="";
                document.getElementById(PosicionAntigua).style.className="casilla";
                document.getElementById(PosicionNueva2).style.backgroundImage="url("+niveles.enemigos[f].imagen+")";
                document.getElementById(PosicionNueva2).style.className="limite";
                Posicion=PosicionNueva2
                if(Posicion == niveles.enemigos[f].posicionFinal){
                    avance = false;
                    
                }
            }if(niveles.enemigos[f].avance == '-1' && avance1 == true){
                PosicionAntigua=Posicion
                PosicionNueva3= parseInt(Posicion);
                PosicionNueva3--
                console.log(PosicionNueva3)
                document.getElementById(PosicionAntigua).style.backgroundImage="";
                document.getElementById(PosicionAntigua).style.className="casilla";
                document.getElementById(PosicionNueva3).style.backgroundImage="url("+niveles.enemigos[f].imagen+")";
                document.getElementById(PosicionNueva3).style.className="limite";
                PosicionR=PosicionNueva3
                if(PosicionR == niveles.enemigos[f].posicionFinal){
                    avance1 = false;
                    
                }
            }
            if(niveles.enemigos[f].avance == '+1' && avance == false){
                PosicionAntigua=Posicion
                PosicionNueva2= parseInt(Posicion);
                PosicionNueva2--
                console.log(PosicionNueva2)
                document.getElementById(PosicionAntigua).style.backgroundImage="";
                document.getElementById(PosicionAntigua).style.className="casilla";
                document.getElementById(PosicionNueva2).style.backgroundImage="url("+niveles.enemigos[f].imagen+")";
                document.getElementById(PosicionNueva2).style.className="limite";
                Posicion=PosicionNueva2
                if(Posicion == niveles.enemigos[f].posicionInicial){
                    avance = true;
                    
                }
        }
            if(niveles.enemigos[f].avance == '-1' && avance1 == false){
            PosicionAntigua=Posicion
            PosicionNueva3= parseInt(Posicion);
            PosicionNueva3++
            console.log(PosicionNueva3)
            document.getElementById(PosicionAntigua).style.backgroundImage="";
            document.getElementById(PosicionAntigua).style.className="casilla";
            document.getElementById(PosicionNueva3).style.backgroundImage="url("+niveles.enemigos[f].imagen+")";
            document.getElementById(PosicionNueva3).style.className="limite";
            PosicionR=PosicionNueva3
            if(PosicionR == niveles.enemigos[f].posicionFinal){
                avance1 = true;
                
            }
       
    }
}
        }
    }
}

    

function enemigosMovimiento(){
    for(var k=0; k < niveles.enemigos.length; k++){ 
        if(localStorage.getItem('nivelActual') == niveles.enemigos[k].nivel){
        console.log(niveles.enemigos[k].nombre)
            var speed=parseInt(niveles.enemigos[k].velocidad);
           identificadorCiclo.push(setInterval(movimiento,speed));
    }
  }
}
