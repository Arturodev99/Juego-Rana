var cambioPantalla = 0;
function cambioPantallas(){
    switch(cambioPantalla){
        case 0:
            document.querySelector('body').innerHTML=`<center><h1>Personajes</h1><div id="contenedor"><a href="nivel0.html"><div id="contenedorRana" class="contenedores" aling="center"><img src="../Media/Images/Personajes/RanaPreview.png" id="personajeRana" onclick="Personaje('RanaPreview.png')"></div></a><div id="contenedorJuanma" class="contenedores" aling="center"><img src="../Media/Images/Personajes/personaje_bloqueado.png" id="personajeJuanma" onclick="Personaje('juanma.png')"></div><div id="contenedorJesus" class="contenedores" aling="center"><img src="../Media/Images/Personajes/personaje_bloqueado.png" id="personajeJesus" onclick="Personaje('jesus.png')"></div><div class="contenedores"></div><div class="contenedores"></div><div class="contenedores"></div></div></center>`

            //" <center><h1>Personajes</h1><div id="contenedor"><div id="contenedorRana" class="contenedores" aling="center"><img src="../Media/Images/Personajes/RanaPreview.png" id="personajeRana" onclick="Personaje('RanaPreview.png')"></div><div id="contenedorJuanma" class="contenedores" aling="center"><img src="../Media/Images/Personajes/juanma.png" id="personajeJuanma" onclick="Personaje('juanma.png')"></div><div id="contenedorJesus" class="contenedores" aling="center"><img src="../Media/Images/Personajes/jesus.png" id="personajeJesus" onclick="Personaje('jesus.png')"></div><div class="contenedores"></div><div class="contenedores"></div><div class="contenedores"></div></div></center>"
            break;
        case 1:
            break;
        case 2:
            break;
    }
}
var l = 0;
function cambioClase(){
    for (i= 0; i <= 96; i++) {
        if(i == niveles.escenarios[l].limite[i])
        document.getElementsByClassName(i).className = 'limite';
        
    }
    l++
}

function irMundo(){
    location.href = '../HTML/Principal(NOMODIFICAR).html'
}