var Enemigo=document.getElementById("EnemigoMovible");
var Ubicacion=0;
var Intervalo1;
var Intervalo2;
var Pantalla=(window.innerWidth)-150;
function MoverEnemigo(){
    Intervalo1=setInterval(Movimiento,35)
}
function Movimiento(){
    if(Ubicacion>=Pantalla){
        clearInterval(Intervalo1)
        Intervalo2=setInterval(MovimientoAtras,35)
    }
    document.getElementById("EnemigoMovible").style.transform="rotateY(0deg)";
    Ubicacion=Ubicacion+5
    document.getElementById("EnemigoMovible").style.left=Ubicacion+"px";
    console.log(Ubicacion)
}
function MovimientoAtras(){
    if(Ubicacion<=-150){
        
        clearInterval(Intervalo2)
        MoverEnemigo()
    }
    document.getElementById("EnemigoMovible").style.transform="rotateY(180deg)";
    Ubicacion=Ubicacion-5
    document.getElementById("EnemigoMovible").style.left=Ubicacion+"px";
    console.log(Ubicacion)

}