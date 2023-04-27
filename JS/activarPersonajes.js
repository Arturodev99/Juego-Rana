function activarPersonaje() {
    var mapas=localStorage.getItem('nivel');
     
 
     if (mapas >= 5) {
         document.getElementById('contenedorLink').onclick='personajeElegido("3");';
         document.getElementById('personajeLink').src = '../Media/Images/Personajes/link/link_quieto.png'
     }
 
     if (mapas >= 10) {
     }
 
     if (mapas >= 15) {
     }
 
     if (mapas >= 20) {
     }
 
     if (mapas >= 25) {
     }

}
