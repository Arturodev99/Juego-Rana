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
    movimiento()


    this.fondo = niveles.escenarios[nivel].imagen;
    document.getElementById("pantalla").style.backgroundImage = 'url('+niveles.escenarios[nivel].imagen+')'
    enemigosMovimiento();
}




function Enemigo() {
    
    for(i=0; i< niveles.enemigos.length; i++){
        if(niveles.enemigos[i].nivel == localStorage.getItem('nivelActual')){
            this.Id=niveles.enemigos[i];
            this.img = niveles.enemigos[i].imagen;
            this.posicion = niveles.enemigos[i].posicionInicial;
            this.velocidad = niveles.enemigos[i].velocidad;
            this.function=movimiento;
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
        for(var k=0; k < niveles.enemigos.length; k++){ 
            if(nivelActual == niveles.enemigos[k].nivel){
                //var speed=parseInt(niveles.enemigos[k].velocidad);
                intervalo
            if(identificadorCiclo[k] != intervalo){
            identificadorCiclo.push(intervalo);
            }
        }
      }
        if(niveles.enemigos[f].nivel == nivelActual){
            if(Posicion == niveles.enemigos[f].posicionInicial && niveles.enemigos[f].avance == '+1' || PosicionR == niveles.enemigos[f].posicionInicial && niveles.enemigos[f].avance == '-1'){
            document.getElementById(Posicion).style.backgroundImage="";
            document.getElementById(Posicion).style.className="casilla";
            document.getElementById(PosicionR).style.backgroundImage="";
            document.getElementById(PosicionR).style.className="casilla";
           
            }
            if(niveles.enemigos[f].avance == '+1' && avance == true){
                PosicionNueva2= parseInt(Posicion);
                PosicionNueva2++
                console.log(PosicionNueva2)
                document.getElementById(Posicion).style.backgroundImage="";
                document.getElementById(Posicion).style.className="casilla";
                document.getElementById(PosicionNueva2).style.backgroundImage="url("+niveles.enemigos[f].imagen+")";
                document.getElementById(PosicionNueva2).style.className="limite";
                document.getElementById(PosicionNueva2).style.transform='rotateY(0deg)'
                if(Posicion == niveles.enemigos[f].posicionFinal){
                    avance = false;
                    
                }else {Posicion=PosicionNueva2}
                
            }
            
            if(niveles.enemigos[f].avance == '-1' && avance1 == true){
                PosicionNueva3= parseInt(PosicionR);
                PosicionNueva3--
                console.log(PosicionNueva3)
                document.getElementById(PosicionR).style.backgroundImage="";
                document.getElementById(PosicionR).style.className="casilla";
                document.getElementById(PosicionNueva3).style.backgroundImage="url("+niveles.enemigos[f].imagen+")";
                document.getElementById(PosicionNueva3).style.className="limite";
                
                if(PosicionR == niveles.enemigos[f].posicionFinal){
                    avance1 = false;
                    
                }else{PosicionR=PosicionNueva3}
            }
           
            if(niveles.enemigos[f].avance == '+1' && avance == false){
                PosicionNueva2= parseInt(Posicion);
                PosicionNueva2--
                document.getElementById(Posicion).style.backgroundImage="";
                document.getElementById(Posicion).style.className="casilla";
                document.getElementById(PosicionNueva2).style.backgroundImage="url("+niveles.enemigos[f].imagen+")";
                document.getElementById(PosicionNueva2).style.className="limite";
                document.getElementById(PosicionNueva2).style.transform='rotateY(180deg)'
               
                if(Posicion == niveles.enemigos[f].posicionInicial){
                    avance = true;
                    
                }else{ Posicion=PosicionNueva2}
        }
            if(niveles.enemigos[f].avance == '-1' && avance1 == false){
            PosicionAntigua=Posicion
            PosicionNueva3= parseInt(PosicionR);
            PosicionNueva3++
            document.getElementById(PosicionR).style.backgroundImage="";
            document.getElementById(PosicionR).style.className="casilla";
            document.getElementById(PosicionNueva3).style.backgroundImage="url("+niveles.enemigos[f].imagen+")";
            document.getElementById(PosicionNueva3).style.className="limite";
            document.getElementById(PosicionNueva3).style.transform='rotateY(0deg)'
          
            if(PosicionR == niveles.enemigos[f].posicionFinal){
                avance1 = true;
                
            }else{PosicionR=PosicionNueva3}
            }
        }
       // identificadorCiclo.pop(clearInterval(intervalo))
    }
    
}

    var intervalo = setInterval(movimiento,1200)

function enemigosMovimiento(){
    
}
