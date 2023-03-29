var cambioPantalla = 0;


var l = 0;
function cambioClase(){
    for (i= 0; i <= 96; i++) {
        if(i == niveles.escenarios[l].limite[i])
        document.getElementsByClassName(i).className = 'limite';
        
    }
    l++
}
