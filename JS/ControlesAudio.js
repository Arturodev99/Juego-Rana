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
            document.getElementById('Altavoz').src="../Media/Images/ConSonido.png"
            Spotify = document.getElementById('Reproductor')
            document.getElementById("ControlesJuego").style.display="none";
            ReproducirMusica()
            break;
        case 'no':
            document.getElementById('MusicaNo').src="../Media/Images/marco_musica.png"
            document.getElementById('MusicaSi').src="../Media/Images/marco_personaje_hover.png"
            document.getElementById('Altavoz').src="../Media/Images/SinSonido.png"
            Spotify.pause()
            break;
    }
}
function ReproducirMusica(){
    nivel = parseInt(localStorage.getItem('nivelActual'));
    //alert(nivel)
    if(nivel <= 4){
        Spotify.src='../Media/musica/x2mate.com - Jungle Race_ Remaster ► Lego Stunt Rally (128 kbps).mp3';
    }
    else if(nivel <= 9){
        Spotify.src='../Media/musica/Desert Hills - Mario Kart DS Music Extended.mp3';
    }
    else if(nivel <= 14){
        Spotify.src='../Media/musica/Gritzy Caves Underground Theme [Mario & Luigi Partners in Time].mp3';
    }
    else if(nivel <= 19){
        Spotify.src='../Media/musica/kazan_lr.n.32.mp3';
    }
    else if(nivel <= 24){
        Spotify.src='../Media/musica/Bianco Hills - Super Mario Sunshine.mp3';
    }
    else if(nivel <= 29){
        Spotify.src='../Media/musica/Sonic Mania OST - Studiopolis Act 1.mp3';
    }
    Spotify.play()

}

function CambiarVolumen(){
    var Valor = document.getElementById('range').value;
    document.getElementById('valorVolumen').innerHTML = Valor;
    Spotify.volume = Valor / 10;

}