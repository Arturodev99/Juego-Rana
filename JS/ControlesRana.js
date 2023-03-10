var PosicionOriginal=3;
        var PosicionNueva
        function Comienzo(){
            for(var i = 1; i<97;i++){
                document.getElementById('pantalla').innerHTML+='<div id="'+i+'"class="casilla"></div>'

            }
<<<<<<< Updated upstream
            document.getElementById('6').style.backgroundImage='url('+niveles.Personajes[2].imagenParada+')';
=======
            document.getElementById('4').style.backgroundImage='url('+niveles.Personajes[2].imagenMovimiento;
>>>>>>> Stashed changes
            document.onkeyup=Teclado

        }
        function Teclado(tecla){
            if(tecla.keyCode == 65){
                if((PosicionOriginal-1)%12 == 0){
                    console.log('no')
                }
                else{
                    PosicionNueva=PosicionOriginal-1
                    document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.Personajes[2].imagenMovimiento+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    PosicionOriginal=PosicionNueva
                }
            }
            else if(tecla.keyCode == 68){
                if((PosicionOriginal)%12 == 0){
                    console.log('no')
                }
                else{
                    PosicionNueva=PosicionOriginal+1
                    document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.Personajes[2].imagenMovimiento+')';
<<<<<<< Updated upstream
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById(PosicionNueva).style.zIndex='1'
=======
                    document.getElementById(PosicionNueva).style.backgroundSize='cover';
                    document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
>>>>>>> Stashed changes
                    PosicionOriginal=PosicionNueva
                }
                
            }
            else if(tecla.keyCode == 32){
                PosicionNueva=PosicionOriginal+12
                document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.Personajes[2].imagenMovimiento+')';
<<<<<<< Updated upstream
                document.getElementById(PosicionOriginal).style.backgroundImage='';
=======
                document.getElementById(PosicionNueva).style.backgroundSize='cover';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
>>>>>>> Stashed changes
                PosicionOriginal=PosicionNueva
            }
            else if(tecla.keyCode == 83){
                PosicionNueva=PosicionOriginal+12
                document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.Personajes[2].imagenMovimiento+')';
<<<<<<< Updated upstream
                document.getElementById(PosicionOriginal).style.backgroundImage='';
=======
                document.getElementById(PosicionNueva).style.backgroundSize='cover';
                document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.Personajes[2].imagenParada+')';
>>>>>>> Stashed changes
                PosicionOriginal=PosicionNueva
            }
            else if(tecla.keyCode == 87){
                PosicionNueva=PosicionOriginal-12
                document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.Personajes[2].imagenMovimiento+')';
<<<<<<< Updated upstream
                document.getElementById(PosicionOriginal).style.backgroundImage='';
=======
                document.getElementById(PosicionNueva).style.backgroundSize='cover';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
>>>>>>> Stashed changes
                PosicionOriginal=PosicionNueva
            }
            
        }