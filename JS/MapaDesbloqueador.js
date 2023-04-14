function desbloquearMapa(){

    if(mapas[0] == true){
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla2'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2.png')"
    }

    if(mapas[1] == true){
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla3'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2+3.png')"
    }

    if(mapas[2] == true){
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla4'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2+3+4.png')"
    }

    if(mapas[3] == true){
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla5'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2+3+4+5.png')"
    }

    if(mapas[4] == true){
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla6'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanitaCompletado.png')"
    }
}