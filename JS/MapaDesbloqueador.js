

function desbloquearMapa() {
   var mapas=localStorage.getItem('nivel');
   var enlace='"nivel0.html"';

    if (mapas >= 5) {
        document.getElementById("contenedorMapa").innerHTML += "<a href='nivel0.html'><div id='isla2' onclick=repetir(5)></div></a>"
        document.getElementById("contenedorMapa").style.backgroundImage = "url('../Media/Images/ImgSeleccionMundo/MapaRanita2.png')"
    }

    if (mapas >= 10) {
        document.getElementById("contenedorMapa").innerHTML += "<a href='nivel0.html'><div id='isla3'onclick=repetir(10)></div></a>"
        document.getElementById("contenedorMapa").style.backgroundImage = "url('../Media/Images/ImgSeleccionMundo/MapaRanita3.png')"
    }

    if (mapas >= 15) {
        document.getElementById("contenedorMapa").innerHTML += "<a href='nivel0.html'><div id='isla4'onclick=repetir(15)></div></a>"
        document.getElementById("contenedorMapa").style.backgroundImage = "url('../Media/Images/ImgSeleccionMundo/MapaRanita4.png')"
    }

    if (mapas >= 20) {
        document.getElementById("contenedorMapa").innerHTML += "<a href='nivel0.html'><div id='isla5'onclick=repetir(20)></div></a>"
        document.getElementById("contenedorMapa").style.backgroundImage = "url('../Media/Images/ImgSeleccionMundo/MapaRanita5.png')"
    }

    if (mapas >= 25) {
        document.getElementById("contenedorMapa").innerHTML += "<a href='nivel0.html'><div id='isla6'onclick=repetir(25)></div></a>"
        document.getElementById("contenedorMapa").style.backgroundImage = "url('../Media/Images/ImgSeleccionMundo/MapaRanitaCompleto.png')"
    }
    if (mapas >= 30) {
        document.body.innerHTML +="<div id='oculto' value='Mundo Final' onclick='repetir(30);location.href="+enlace+"';></div>"
        document.getElementById("oculto").style.width="100px";
        document.getElementById("oculto").style.height="100px";
        document.getElementById("oculto").style.position="fixed";
        document.getElementById("oculto").style.top="47%";
        document.getElementById("oculto").style.left="70.5%";
        document.getElementById("oculto").style.backgroundColor="red";

    }
}
function repetir(mapa){
localStorage.setItem('nivelActual',mapa)
}