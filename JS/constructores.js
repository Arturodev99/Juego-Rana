//Terminado constructor personaje
var array=[];
contador = 1;
function Personaje() {
    //this.vida = 3;

    this.nombre = 'personaje'
    this.img = niveles.personajes[localStorage.getItem('personajeActual')].imagenParada


    document.getElementById(PosicionOriginal).style.backgroundImage = 'url('+niveles.personajes[localStorage.getItem('personajeActual')].imagenParada+')';
    document.getElementById(PosicionNueva).style.backgroundImage = 'url('+niveles.personajes[localStorage.getItem('personajeActual')].imagenParada+')';
    if (localStorage.getItem('personajeActual') == "2") {
        document.getElementById(PosicionOriginal).style.width = "80px";
        document.getElementById(PosicionNueva).style.width = "80px";
    }
    if (localStorage.getItem('personajeActual') == "0" || localStorage.getItem('personajeActual') == "1") {
        document.getElementById(PosicionOriginal).style.backgroundSize = "50%";
        document.getElementById(PosicionNueva).style.backgroundSize = "50%";


    }
    if (localStorage.getItem('personajeActual')=='3'){
        document.getElementById(PosicionOriginal).style.width = "80px";
        document.getElementById(PosicionNueva).style.width = "80px";
    }
    
}

//var intervalo = setInterval(movimiento, 500)

// Constructor niveles
function Nivel() {
 
    var nivel = parseInt(localStorage.getItem('nivelActual'));
    Personaje()
    Enemigo()
    document.getElementById("pantalla").style.backgroundImage = 'url('+niveles.escenarios[nivel].imagen+')'
   animar();
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
    array = [];
    for (i = 0; i < niveles.enemigos.length; i++) {
        if (niveles.enemigos[i].nivel == nivelActual) {
            array.push(new Enemigo1(niveles.enemigos[i].nombre,niveles.enemigos[i].imagen,niveles.enemigos[i].posicionInicial,niveles.enemigos[i].avance,niveles.enemigos[i].posicionFinal,niveles.enemigos[i].posicionInicial))
            console.log(array[array.length-1])
            array[array.length-1].crearEnemigo()
        }
        


    }

}



class Enemigo1{
    constructor(nombre,imagen,posicion,avance,posicionfinal,posicionInicial){
        this.nombre=nombre
        this.imagen=imagen
        this.posicion=parseInt(posicion)
        this.avance=avance
        this.posicionAntigua
        this.posicionfinal=posicionfinal
        this.posicionInicial=posicionInicial
    }
    crearEnemigo(){
        console.log(this.imagen)
        document.getElementById(this.posicion).style.backgroundImage='url(' +this.imagen + ")";
        document.getElementById(this.posicion).className="limite"
        
        if(this.avance == '-1'){
            document.getElementById(this.posicion).style.transform = 'rotateY(180deg)'
        }
    }
    eliminarEnemigo(){
        
        document.getElementById(this.posicionAntigua).style.backgroundImage='url()';
        
        
    
    }

    movimientoEnemigo(){
        document.getElementById(this.posicion).style.backgroundImage='url()';
        document.getElementById(this.posicion).className="limite"
        if(this.posicion == PosicionOriginal){
            vida--
            l--
            
            
            
            if(document.getElementById(PosicionNueva).className == 'limite' && vida == 1 || document.getElementById(PosicionOriginal).className == 'limite' && vida == 1){
                location.href = '../HTML/pantallaFin.html'
            }
            PosicionNueva=6
            PosicionOriginal=6;
            muerte=setTimeout(Comienzo,900);
            
        }

        if(this.posicion != this.posicionfinal){
            if(this.avance == '-1'){
                this.posicionAntigua = this.posicion;
                this.posicion += parseInt(this.avance)
                document.getElementById(this.posicion).style.transform = 'rotateY(180deg)'
                document.getElementById(this.posicion).style.transition="0s";
                document.getElementById(this.posicionAntigua).className="casilla";
                this.crearEnemigo();

            }
            if(this.avance == '+1'){
                this.posicionAntigua = this.posicion;
                this.posicion += parseInt(this.avance)
                document.getElementById(this.posicion).style.transform = 'rotateY(0deg)'
                document.getElementById(this.posicion).style.transition="0s";
                document.getElementById(this.posicionAntigua).className="casilla";
                this.crearEnemigo();
            }
        }

        if(this.posicion == this.posicionfinal){
            if(this.avance == '-1'){
                this.avance = '+1'
                this.posicionAntigua = this.posicion;
                document.getElementById(this.posicionAntigua).style.backgroundImage='url()';
                this.posicion += parseInt(this.avance)
                document.getElementById(this.posicion).style.transform = 'rotateY(180deg)'
                document.getElementById(this.posicion).style.transition="0.7s";
                document.getElementById(this.posicionAntigua).className="casilla";
                this.crearEnemigo();

            }
            else{
                this.avance = '-1'
                this.posicionAntigua = this.posicion;
                document.getElementById(this.posicionAntigua).style.backgroundImage='url()';
                this.posicion += parseInt(this.avance)
                document.getElementById(this.posicion).style.transform = 'rotateY(0deg)'
                document.getElementById(this.posicion).style.transition="0.7s";
                document.getElementById(this.posicionAntigua).className="casilla";
                this.crearEnemigo();
            }
        }
        if(this.posicion == this.posicionInicial){
            if(this.avance == '-1'){
                this.avance = '+1'
                this.posicionAntigua = this.posicion;
                document.getElementById(this.posicionAntigua).style.backgroundImage='url()';
                this.posicion += parseInt(this.avance)
                document.getElementById(this.posicion).style.transform = 'rotateY(180deg)'
                document.getElementById(this.posicion).style.transition="0.7s";
                document.getElementById(this.posicionAntigua).className="casilla";
                this.crearEnemigo();

            }
            else{
                this.avance = '-1'
                this.posicionAntigua = this.posicion;
                document.getElementById(this.posicionAntigua).style.backgroundImage='url()';
                this.posicion += parseInt(this.avance)
                document.getElementById(this.posicion).style.transform = 'rotateY(0deg)';
                document.getElementById(this.posicion).style.transition="0.7s";
                document.getElementById(this.posicionAntigua).className="casilla";
                this.crearEnemigo();
            }
        }
        
    }
}
var prueba;
//array.push(new Enemigo1(escenarios.enemigos[i].nombre,escenarios.enemigos[i].imagen,escenarios.enemigos[i].posicionInicial))
function animar(){

    clearTimeout(prueba);
    for(i=0; i<array.length; i++){
        array[i].movimientoEnemigo();
        
    }
    prueba=setTimeout(animar, 400)

}