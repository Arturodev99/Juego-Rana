var VentanaAbierta= false
function ActivarPanelAudio(){
    if (VentanaAbierta == false){
        document.getElementById('VentanadeControlSonido').style.display='block';
        VentanaAbierta= true
    }
    else{
        document.getElementById('VentanadeControlSonido').style.display='none';
        VentanaAbierta= false 
    }
}