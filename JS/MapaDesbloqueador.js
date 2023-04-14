// 1. Crea un objeto JavaScript que contenga el vector de booleanos.
var mapas = {valores:[false,false,false,false,false]};
var mundoNuevoContador = 0;

if (localStorage.getItem('mundoActual') === null ||localStorage.getItem('mundoActual') === 'undefined'){
    localStorage.setItem('mundoActual', mapas.valores);
}
if (localStorage.getItem('contador') === null ||localStorage.getItem('contador') === 'undefined'){
    localStorage.setItem('contador', mundoNuevoContador);
}
else{mundoNuevoContador = localStorage.getItem('contador')}



function desbloquearMapa(mundoNuevo) {
    mapas.valores=localStorage.getItem('mundoActual')
    localStorage.setItem('contador', mundoNuevoContador)
    mundoNuevoContador = localStorage.getItem('contador')
    // 2. Convierte el objeto JavaScript en una cadena JSON.
    //var mapasJSON = JSON.stringify(mapas);

    // 3. Almacena la cadena JSON en Local Storage.
    //localStorage.setItem('mundoActual', mapasJSON);

    // 4. Obtén la cadena JSON almacenada y conviértela en un objeto JavaScript.
    //var mapasJSONFromStorage = Json.parse(localStorage.getItem('mundoActual'));
    //var mapasTemporales = JSON.parse(mapasJSONFromStorage);

    // 5. Accede al vector de booleanos y cambia el primer valor a true.
    mapas.valores[mundoNuevoContador] = true;

    // 6. Convierte el objeto JavaScript actualizado en una cadena JSON.
    //var mapasJSONUpdated = JSON.stringify(mapas.valores);

    // 7. Actualiza el valor almacenado en Local Storage.
    localStorage.setItem('mundoActual', mapas.valores);

    if (mapas[0] == true) {
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla2'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2.png')"
    }

    if (mapas[1] == true) {
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla3'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2+3.png')"
    }

    if (mapas[2] == true) {
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla4'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2+3+4.png')"
    }

    if (mapas[3] == true) {
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla5'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanita1+2+3+4+5.png')"
    }

    if (mapas[4] == true) {
        document.getElementById("contenedorMapas").innerHTML += "<a href='nivel0.html'><div id='isla6'></div></a>"
        document.getElementById("contenedorMapas").style.backgroundImage = "url('Media/Images/ImgSeleccionMundo/MapaRanitaCompletado.png')"
    }
}