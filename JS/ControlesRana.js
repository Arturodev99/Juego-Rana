var PosicionOriginal=6;
var j=0;
var l = 0;
var temporizador
        var PosicionNueva
        function Comienzo(){
            document.getElementById('pantalla').innerHTML='';
            for(var i = 1; i<109;i++){
                document.getElementById('pantalla').innerHTML+='<div id="'+i+'"class="casilla" onclick="vectorizar('+i+')"></div>'

            }
            
            for (var m = 1; m <= niveles.escenarios[l].limite.length ; m++) {
                
                //if(document.getElementById(niveles.escenarios[l].limite[m-1]).id == niveles.escenarios[l].limite[m-1] ){
                document.getElementById(niveles.escenarios[l].limite[m-1]).className = "limite";
                
                }
                console.log(niveles.escenarios[l])
            
            l++
            document.getElementById('6').style.backgroundImage='url('+niveles.personajes[2].imagenParada+')';
            document.getElementById('6').style.transform="rotate(360deg)"
            document.onkeyup=Teclado

        }
        function Teclado(tecla){
            
           
            if(tecla.keyCode == 65){
                if((PosicionOriginal-1)%12 == 0){
                    console.log('no')
                }
                else{
                    PosicionNueva=PosicionOriginal-1
                    document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[2].imagenMovimiento+')';
                    document.getElementById(PosicionNueva).style.transform="rotate(90deg)"
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    PosicionOriginal=PosicionNueva
                    temporizador= setTimeout(parada,500);
                    
                    if (PosicionOriginal >= 97){
                        j++
                        
                        let n= j+1
                        document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                        document.getElementById(PosicionOriginal).style.backgroundImage='';
                        document.getElementById('nivel').innerHTML= 'nivel '+ n;
                        Comienzo();
                        PosicionOriginal=6;
                        
                    }
                    //document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[2].imagenParada+')';
                }
            }
            else if(tecla.keyCode == 68){
                if((PosicionOriginal)%12 == 0){
                    console.log('no')
                }
                else{
                    console.log(PosicionOriginal)
                    PosicionNueva=PosicionOriginal+1
                    document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[2].imagenMovimiento+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById(PosicionNueva).style.zIndex='1'
                    document.getElementById(PosicionNueva).style.transform="rotate(270deg)"
                    document.getElementById(PosicionNueva).style.backgroundSize='cover';
                    document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                    PosicionOriginal=PosicionNueva
                    temporizador= setTimeout(parada,500);
                    if (PosicionOriginal >= 97){
                        j++
                        
                        let n= j+1
                        document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')'
                        document.getElementById(PosicionOriginal).style.backgroundImage='';
                        document.getElementById('nivel').innerHTML= 'nivel '+ n;
                        Comienzo();
                        PosicionOriginal=6;
                        
                    }
                   
                }
                
            }
            else if(tecla.keyCode == 32){
                PosicionNueva=PosicionOriginal+12
                document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[2].imagenMovimiento+')';
                document.getElementById(PosicionOriginal).style.backgroundImage='';
                document.getElementById(PosicionNueva).style.backgroundSize='cover';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                document.getElementById(PosicionNueva).style.transform="rotate(360deg)"
                PosicionOriginal=PosicionNueva
                temporizador= setTimeout(parada,500);
                if (PosicionOriginal >= 97){
                    j++
                    
                    let n= j+1
                    document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById('nivel').innerHTML= 'nivel '+ n;
                    Comienzo();
                    PosicionOriginal=6;
                    
                }
                //document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[2].imagenParada+')';
            }
            else if(tecla.keyCode == 83){
                PosicionNueva=PosicionOriginal+12
                document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[2].imagenMovimiento+')';
                document.getElementById(PosicionOriginal).style.backgroundImage='';
                document.getElementById(PosicionNueva).style.backgroundSize='cover';
                document.getElementById(PosicionNueva).style.transform="rotate(360deg)"
                PosicionOriginal=PosicionNueva
                temporizador= setTimeout(parada,500);
                if (PosicionOriginal >= 97){
                    j++
                  
                    let n= j+1
                    document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById('nivel').innerHTML= 'nivel '+ n;
                    Comienzo();
                    PosicionOriginal=6;
                    
                }
                //document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[2].imagenParada+')';
            }
            else if(tecla.keyCode == 87){
                PosicionNueva=PosicionOriginal-12
                document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[2].imagenMovimiento+')';
                document.getElementById(PosicionOriginal).style.backgroundImage='';
                document.getElementById(PosicionNueva).style.backgroundSize='cover';
                document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                document.getElementById(PosicionNueva).style.transform="rotate(180deg)"
                PosicionOriginal=PosicionNueva
                temporizador= setTimeout(parada,500);
                if (PosicionOriginal >= 97){
                    j++
                    
                    let n= j+1
                    document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById('nivel').innerHTML= 'nivel '+ n;
                    Comienzo();
                    PosicionOriginal=6;
                    
                }
                //document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[2].imagenParada+')';
            }
            
        }

        function parada(){
            document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[2].imagenParada+')';
            clearTimeout(temporizador);
            
        }