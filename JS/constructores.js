//Terminado constructor personaje
contador=1;
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

    for(var l=0; l< niveles.enemigos.length; l++){
        if(niveles.enemigos[l].nivel == localStorage.getItem('nivelActual')){
            //alert('funciona el bucle '+i)
            if(niveles.enemigos[l].posicionInicial==niveles.enemigos[l].posicionFinal){
                //alert('funcional')
                if(niveles.enemigos[l].avance == '+1'){
                   // alert('funcionav')
                    document.getElementById(niveles.enemigos[l].posicionInicial).style.backgroundImage='url()';
                    document.getElementById(niveles.enemigos[l].posicionInicial).className='casilla';
                    var numero=parseInt(niveles.enemigos[l].posicionInicial)+1;
                    var texto= "'"+numero+"'"
                    niveles.enemigos[l].posicionInicial=texto;
                    document.getElementById(niveles.enemigos[l].posicionInicial).style.backgroundImage= 'url('+niveles.enemigos[i].imagen+')';
                    document.getElementById(niveles.enemigos[l].posicionInicial).className='limite';
                }
                if(niveles.enemigos[l].avance == '-1'){
                    document.getElementById(niveles.enemigos[l].posicionInicial).style.backgroundImage= 'url()';
                    document.getElementById(niveles.enemigos[l].posicionInicial).className='casilla';
                    var numero=parseInt(niveles.enemigos[l].posicionInicial)-1;
                    var texto= "'"+numero+"'"
                    niveles.enemigos[l].posicionInicial=texto;
                    document.getElementById(niveles.enemigos[l].posicionInicial).style.backgroundImage= 'url('+niveles.enemigos[i].imagen+')';
                    document.getElementById(niveles.enemigos[l].posicionInicial).className='limite';
                }   
            
            }
       
        } 
    }

   /* for(var j=0; j< niveles.enemigos.length; j++){
        console.log('funciona el bucl')
       if(niveles.enemigos[j].nivel == localStorage.getItem('nivelActual')){
            console.log('funcional')
            if(niveles.enemigos[j].posicionInicial==niveles.enemigos[j].posicionFinal){
                console.log('funciona')
                var memoria =niveles.enemigos[j].posicionInicial;
                niveles.enemigos[j].posicionInicial=niveles.enemigos[j].posicionFinal
                niveles.enemigos[j].posicionFinal=memoria;
            }
                if(niveles.enemigos[j].avance == '+1'){
                console.log('funciona1')
                niveles.enemigos[j].avance = '-1'
                document.getElementById(niveles.enemigos[j].posicionInicial).style.backgroundImage= '';
                document.getElementById(niveles.enemigos[j].posicionInicial).className='casilla';
                var numero=parseInt(niveles.enemigos[j].posicionInicial)-1;
                var texto= "'"+numero+"'"
                niveles.enemigos[j].posicionInicial=texto;
                document.getElementById(niveles.enemigos[j].posicionInicial).style.backgroundImage= 'url('+niveles.enemigos[i].imagen+')';
                document.getElementById(niveles.enemigos[j].posicionInicial).className='limite';
            }
                if(niveles.enemigos[j].avance == '-1'){
                console.log('funciona2')
                niveles.enemigos[j].avance = '+1'
                document.getElementById(niveles.enemigos[j].posicionInicial).style.backgroundImage= '';
                document.getElementById(niveles.enemigos[j].posicionInicial).className='casilla';
                var numero=parseInt(niveles.enemigos[j].posicionInicial)-1;
                var texto= "'"+numero+"'"
                niveles.enemigos[j].posicionInicial=texto;
                document.getElementById(niveles.enemigos[j].posicionInicial).style.backgroundImage= 'url('+niveles.enemigos[i].imagen+')';
                document.getElementById(niveles.enemigos[j].posicionInicial).className='limite';
            }
            
        
        
    }
    contador--; 
}*/
}function enemigosMovimiento(){
    for(k=0; k<=niveles.enemigos.length; k++){ 
        /*if(localStorage.getItem('nivelActual') == niveles.enemigos[k].nivel)*/
        console.log(niveles.enemigos[k].nivel)
            /*var speed=parseInt(niveles.enemigos[k].velocidad);
           identificadorCiclo.push(setInterval(movimiento,speed));*/
    }
  }

