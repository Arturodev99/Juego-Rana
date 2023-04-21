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

function ActivarMusica(respuesta){
    switch(respuesta){
        case 'si':
            document.getElementById('MusicaSi').src="../Media/Images/marco_musica.png"
            document.getElementById('MusicaNo').src="../Media/Images/marco_personaje_hover.png"
            break;
        case 'no':
            document.getElementById('MusicaNo').src="../Media/Images/marco_musica.png"
            document.getElementById('MusicaSi').src="../Media/Images/marco_personaje_hover.png"
            break;
    }
}