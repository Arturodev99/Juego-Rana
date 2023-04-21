var VentanaAbierta= false
var Spotify
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
            ReproducirMusica()
            break;
        case 'no':
            document.getElementById('MusicaNo').src="../Media/Images/marco_musica.png"
            document.getElementById('MusicaSi').src="../Media/Images/marco_personaje_hover.png"
            break;
    }
}
function ReproducirMusica(){
    Spotify=document.getElementById('Reproductor')
    nivel = parseInt(localStorage.getItem('nivelActual'));
    alert(nivel)
    if(nivel <= 4){
        Spotify.src='../Media/musica/kazan_lr.n.32.mp3';
    }
    else if(nivel <= 9){
        Spotify.src='../Media/musica/Desert Hills - Mario Kart DS Music Extended.mp3';
    }
    else if(nivel <= 14){
        Spotify.src='../Media/musica/x2mate.com - Jungle Race_ Remaster ► Lego Stunt Rally (128 kbps).mp3';
    }
    else if(nivel <= 19){
        alert('cielo')
    }
    else if(nivel <= 24){
        Spotify.src='../Media/musica/Sonic Mania OST - Studiopolis Act 1.mp3';
    }
    Spotify.play()

}