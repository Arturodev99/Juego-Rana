var PosicionOriginal=3;
        var PosicionNueva
        function Comienzo(){
            for(var i = 1; i<97;i++){
                document.getElementById('pantalla').innerHTML+='<div id="'+i+'"class="casilla"></div>'

            }
            document.getElementById('4').style.backgroundColor='red';
            document.onkeyup=Teclado

        }
        function Teclado(tecla){
            if(tecla.keyCode == 65){
                if((PosicionOriginal-1)%12 == 0){
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
                if((PosicionOriginal)%12 == 0){
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
                PosicionNueva=PosicionOriginal+12
                document.getElementById(PosicionNueva).style.backgroundColor='red';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                PosicionOriginal=PosicionNueva
            }
            else if(tecla.keyCode == 83){
                PosicionNueva=PosicionOriginal+12
                document.getElementById(PosicionNueva).style.backgroundColor='red';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                PosicionOriginal=PosicionNueva
            }
            else if(tecla.keyCode == 87){
                PosicionNueva=PosicionOriginal-12
                document.getElementById(PosicionNueva).style.backgroundColor='red';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                PosicionOriginal=PosicionNueva
            }
        }