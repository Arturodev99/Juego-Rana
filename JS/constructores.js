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

var bicho= niveles.enemigos[m].posicionInicial;

function movimiento(){

    for( m=0; m< niveles.enemigos.length; m++){
        if(niveles.enemigos[m].nivel == localStorage.getItem('nivelActual')){
            if(niveles.enemigos[m].posicionInicial!=niveles.enemigos[m].posicionFinal){
                //alert('funcional')
                if(niveles.enemigos[m].avance == '+1'){
                   // alert('funcionav')
                    
                    var numero=parseInt(bicho);
                    var bicho2= numero+1;
                    var bicho3="'"+numero+"'"
                    var texto= "'"+bicho2+"'";
                    //bicho.push(texto);
                    //bicho.pop();
                    console.log(bicho)
                    
                    //niveles.enemigos[l].posicionInicial=texto;
                   // alert('posicion en el vector: '+bicho+' numero de enemigos: ' +niveles.enemigos[l].length)
                    console.log(bicho)
                    //document.getElementById(bicho).style.backgroundImage= 'url('+niveles.enemigos[i].imagen+')';
                    //document.getElementById(bicho).className='limite';
                   // document.getElementById("'"+numero+"'").style.backgroundImage='';
                    //document.getElementById("'"+numero+"'").className='casilla';
                }
                if(niveles.enemigos[m].avance == '-1'){
                   // alert('funcionav')
                    
                   var numero=parseInt(bicho);
                   var bicho2= numero--;
                   var texto= "'"+bicho2+"'";
                   //bicho.push(texto);
                   //bicho.pop();
                   console.log(bicho)
                   
                   //niveles.enemigos[l].posicionInicial=texto;
                   //alert('posicion en el vector: '+bicho+' numero de enemigos: ' +niveles.enemigos[l].length)
                   console.log(bicho)
                   //document.getElementById(bicho).style.backgroundImage= 'url('+niveles.enemigos[l].imagen+')';
                   //document.getElementById(bicho).className='limite';
                   //document.getElementById("'"+numero+"'").style.backgroundImage='';
                   //document.getElementById("'"+numero+"'").className='casilla';
                }   
            
            }
       
        } 
    }

    for(var j=0; j< niveles.enemigos.length; j++){
        console.log('funciona el bucl')
       if(niveles.enemigos[j].nivel == localStorage.getItem('nivelActual')){
            console.log('funcional')
            if(niveles.enemigos[j].posicionInicial==niveles.enemigos[j].posicionFinal){
                console.log('funciona')
                var memoria =niveles.enemigos[j].posicionInicial;
                niveles.enemigos[j].posicionInicial=niveles.enemigos[j].posicionFinal
                niveles.enemigos[j].posicionFinal=memoria;
           
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
        
        
    }
}
}function enemigosMovimiento(){
    for(var k=0; k < niveles.enemigos.length; k++){ 
        if(localStorage.getItem('nivelActual') == niveles.enemigos[k].nivel){
        console.log(niveles.enemigos[k].nombre)
            var speed=parseInt(niveles.enemigos[k].velocidad);
           identificadorCiclo.push(setInterval(movimiento,speed));
    }
  }
}
