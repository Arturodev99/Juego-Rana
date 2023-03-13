var PosicionOriginal=6;
var j=0;
        var PosicionNueva
        function Comienzo(){
            for(var i = 1; i<97;i++){
                document.getElementById('pantalla').innerHTML+='<div id="'+i+'"class="casilla"></div>'

            }
            document.getElementById('6').style.backgroundImage='url('+niveles.Personajes[2].imagenParada+')';
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
                    if (PosicionOriginal >= 85){
                        j++
                        document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[0].imagen+')';
                        
                    }
                    //document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.Personajes[2].imagenParada+')';
                }
            }
            else if(tecla.keyCode == 68){
                if((PosicionOriginal)%12 == 0){
                    console.log('no')
                }
                else{
                    console.log(PosicionOriginal)
                    PosicionNueva=PosicionOriginal+1
                    document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.Personajes[2].imagenMovimiento+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById(PosicionNueva).style.zIndex='1'
                    document.getElementById(PosicionNueva).style.backgroundSize='cover';
                    document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                    PosicionOriginal=PosicionNueva
                    if (PosicionOriginal >= 85){
                        j++
                        document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[0].imagen+')';
                        
                    }
                   
                }
                
            }
            else if(tecla.keyCode == 32){
                PosicionNueva=PosicionOriginal+12
                document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.Personajes[2].imagenMovimiento+')';
                document.getElementById(PosicionOriginal).style.backgroundImage='';
                document.getElementById(PosicionNueva).style.backgroundSize='cover';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                PosicionOriginal=PosicionNueva
                if (PosicionOriginal >= 85){
                    j++
                    document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[0].imagen+')';
                    
                }
                //document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.Personajes[2].imagenParada+')';
            }
            else if(tecla.keyCode == 83){
                PosicionNueva=PosicionOriginal+12
                document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.Personajes[2].imagenMovimiento+')';
                document.getElementById(PosicionOriginal).style.backgroundImage='';
                document.getElementById(PosicionNueva).style.backgroundSize='cover';
                PosicionOriginal=PosicionNueva
                if (PosicionOriginal >= 85){
                    j++
                    document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[0].imagen+')';
                    
                }
                //document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.Personajes[2].imagenParada+')';
            }
            else if(tecla.keyCode == 87){
                PosicionNueva=PosicionOriginal-12
                document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.Personajes[2].imagenMovimiento+')';
                document.getElementById(PosicionOriginal).style.backgroundImage='';
                document.getElementById(PosicionNueva).style.backgroundSize='cover';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                PosicionOriginal=PosicionNueva
                if (PosicionOriginal >= 85){
                    j++
                    document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[0].imagen+')';
                    
                }
                //document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.Personajes[2].imagenParada+')';
            }
            
        }

        function final(){
            
        }