// 1. Crea un objeto JavaScript que contenga el vector de booleanos.
var mapas = { valores: [false, false, false, false, false] };






function desbloquearMapa(mundoNuevo) {

    // 2. Convierte el objeto JavaScript en una cadena JSON.
    var mapasJSON = JSON.stringify(mapas);

    // 3. Almacena la cadena JSON en Local Storage.
    localStorage.setItem('mapas', mapasJSON);

    // 4. Obtén la cadena JSON almacenada y conviértela en un objeto JavaScript.
    var mapasJSONFromStorage = localStorage.getItem('mapas');
    var mapasObj = JSON.parse(mapasJSONFromStorage);

    // 5. Accede al vector de booleanos y cambia el primer valor a true.
    mapasObj.valores[mundoNuevo] = true;

    // 6. Convierte el objeto JavaScript actualizado en una cadena JSON.
    var mapasJSONUpdated = JSON.stringify(mapasObj);

    // 7. Actualiza el valor almacenado en Local Storage.
    localStorage.setItem('mapas', mapasJSONUpdated);

    if (mapasJSON.valores[0] == true) {
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla2'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2.png')"
    }

    if (mapasObj.valores[1] == true) {
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla3'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2+3.png')"
    }

    if (mapasObj.valores[2] == true) {
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla4'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2+3+4.png')"
    }

    if (mapasObj.valores[3] == true) {
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla5'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2+3+4+5.png')"
    }

    if (mapasObj.valores[4] == true) {
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla6'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanitaCompletado.png')"
    }
}