function activarPersonaje() {
    var mapas=localStorage.getItem('nivel');
     
 
     if (mapas >= 5) {
        document.getElementById('contenedorLink').addEventListener('click', function() {
            personajeElegido('3');
          });
          
         document.getElementById('personajeLink').src = '../Media/Images/Personajes/link/link_quieto.png'
     }
 
    //  if (mapas >= 10) {
    //     document.getElementById('').addEventListener('click', function() {
    //         personajeElegido("");
    //       });
          
    //      document.getElementById('').src = '../Media/Images/Personajes/link/link_quieto.png'
    //  }
 
    //  if (mapas >= 15) {
    //     document.getElementById('').addEventListener('click', function() {
    //         personajeElegido("");
    //       });
          
    //      document.getElementById('').src = '../Media/Images/Personajes/link/link_quieto.png'
    //  }
 
      if (mapas >= 20) {
         document.getElementById('contenedorJesus').addEventListener('click', function() {
             personajeElegido("0");
          });
          
          document.getElementById('personajeJesus').src = '../Media/Images/Personajes/jesus.png'
      }
 
     if (mapas >= 25) {
        document.getElementById('contenedorJuanma').addEventListener('click', function() {
            personajeElegido("1");
          });
          
         document.getElementById('personajeJuanma').src = '../Media/Images/Personajes/juanma.png'
     }

}
