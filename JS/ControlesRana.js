var PosicionOriginal=3;
        var PosicionNueva
        function Comienzo(){
            document.getElementById('3').style.backgroundColor='red';
            document.onkeyup=Teclado
        }
        function Teclado(tecla){
            if(tecla.keyCode == 65){
                if((PosicionOriginal-1)%5 == 0){
                    console.log('no')
                }
                else{
                    PosicionNueva=PosicionOriginal-1
                    document.getElementById(PosicionNueva).style.backgroundColor='red';
                    document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                    PosicionOriginal=PosicionNueva
                }
            }
            else if(tecla.keyCode == 68){
                if((PosicionOriginal)%5 == 0){
                    console.log('no')
                }
                else{
                    PosicionNueva=PosicionOriginal+1
                    document.getElementById(PosicionNueva).style.backgroundColor='red';
                    document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                    PosicionOriginal=PosicionNueva
                }
                
            }
            else if(tecla.keyCode == 32){
                PosicionNueva=PosicionOriginal+5
                document.getElementById(PosicionNueva).style.backgroundColor='red';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                PosicionOriginal=PosicionNueva
            }
            else if(tecla.keyCode == 83){
                PosicionNueva=PosicionOriginal+5
                document.getElementById(PosicionNueva).style.backgroundColor='red';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                PosicionOriginal=PosicionNueva
            }
            else if(tecla.keyCode == 87){
                PosicionNueva=PosicionOriginal-5
                document.getElementById(PosicionNueva).style.backgroundColor='red';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                PosicionOriginal=PosicionNueva
            }
        }