var PosicionOriginal=6;
var j=0;
var l = 0;
var vida = 3;
var temporizador
var PosicionNueva
var mundo = 0
        function Comienzo(){
            document.getElementById('pantalla').innerHTML='';
            for(var i = 1; i<109;i++){
                document.getElementById('pantalla').innerHTML+='<div id="'+i+'"class="casilla" onclick="vectorizar('+i+')"></div>'

            }
            Nivel(j)
            //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
            document.getElementById('texto').innerHTML=vida;
            document.getElementById('6').style.backgroundImage='url('+niveles.personajes[2].imagenParada+')';
            document.getElementById('6').style.transform="rotate(360deg)"
            document.onkeyup=Teclado

            for (var m = 1; m <= niveles.escenarios[l].limite.length ; m++) {
                
               
                document.getElementById(niveles.escenarios[l].limite[m-1]).className = "limite";
                
                }
                console.log(niveles.escenarios[j])
            
            l++

        }
        function Teclado(tecla){
            
           
            if(tecla.keyCode == 65){
                if((PosicionOriginal-1)%12 == 0){
                    console.log('no')
                }
                else{
                    PosicionNueva=PosicionOriginal-1
                    if(document.getElementById(PosicionNueva).className != 'limite'){
                        PosicionNueva=PosicionOriginal-1
                        document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[2].imagenMovimiento+')';
                        document.getElementById(PosicionNueva).style.transform="rotate(90deg)"
                        document.getElementById(PosicionOriginal).style.backgroundImage='';
                        PosicionOriginal=PosicionNueva
                        temporizador= setTimeout(parada,500);
                        
                        if (PosicionOriginal >= 97){
                            j++ 
                            mundo++ 
                            if(mundo > 4){
                                location.href = '../HTML/pantallaVictoria.html'
                            }

                            Nivel(j);
                            //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                            document.getElementById(PosicionOriginal).style.backgroundImage='';
                            document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[j].nivel;
                            Comienzo();
                            PosicionOriginal=6;

                        }
                    }
                    if(document.getElementById(PosicionNueva).className == 'limite' && vida > 1){
                        vida--
                        l--
                        PosicionNueva=6
                        PosicionOriginal=6;
                       
                        Comienzo();
                        console.log(vida)
                    }
                    if(document.getElementById(PosicionNueva).className == 'limite' && vida == 1){
                        location.href = '../HTML/index.html'
                    }
                   
                    
                }
            }
            else if(tecla.keyCode == 68){
                if((PosicionOriginal)%12 == 0){
                    console.log('no')
                }
                else{
                    console.log(PosicionOriginal)
                    PosicionNueva=PosicionOriginal+1
                    if(document.getElementById(PosicionNueva).className != 'limite'){
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
                            mundo++ 
                            if(mundo > 4){
                                location.href = '../HTML/pantallaVictoria.html'
                            }

                            let n= j+1
                            Nivel(j);
                            //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')'
                            document.getElementById(PosicionOriginal).style.backgroundImage='';
                            document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[j].nivel;
                            Comienzo();
                            PosicionOriginal=6;

                        }
                    }
                    if(document.getElementById(PosicionNueva).className == 'limite' && vida > 1){
                        vida--
                        l--
                        PosicionNueva=6
                        PosicionOriginal=6;
                       
                        Comienzo();
                        console.log(vida)
                    }
                    if(document.getElementById(PosicionNueva).className == 'limite' && vida == 1){
                        location.href = '../HTML/index.html'
                    }
               
                }
                
            }
            else if(tecla.keyCode == 32){
                PosicionNueva=PosicionOriginal+12
                if(document.getElementById(PosicionNueva).className != 'limite'){
                    document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[2].imagenMovimiento+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById(PosicionNueva).style.backgroundSize='cover';
                    document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                    document.getElementById(PosicionNueva).style.transform="rotate(360deg)"
                    PosicionOriginal=PosicionNueva
                    temporizador= setTimeout(parada,500);
                    if (PosicionOriginal >= 97){
                        j++
                        mundo++ 
                        if(mundo > 4){
                            location.href = '../HTML/seleccion.html'
                        }

                        Nivel(j);
                        //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                        document.getElementById(PosicionOriginal).style.backgroundImage='';
                        document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[j].nivel;
                        Comienzo();
                        PosicionOriginal=6;

                    }
                }
                if(document.getElementById(PosicionNueva).className == 'limite' && vida > 1){
                    vida--
                    l--
                    PosicionNueva=6
                    PosicionOriginal=6;
                   
                    Comienzo();
                    console.log(vida)
                }
                if(document.getElementById(PosicionNueva).className == 'limite' && vida == 1){
                    location.href = '../HTML/index.html'
                }
                
                
            }
            else if(tecla.keyCode == 83){
                PosicionNueva=PosicionOriginal+12
                if(document.getElementById(PosicionNueva).className != 'limite'){
                    document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[2].imagenMovimiento+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById(PosicionNueva).style.backgroundSize='cover';
                    document.getElementById(PosicionNueva).style.transform="rotate(360deg)"
                    PosicionOriginal=PosicionNueva
                    temporizador= setTimeout(parada,500);
                    if (PosicionOriginal >= 97){
                        j++
                        mundo++ 
                        if(mundo > 4){
                            location.href = '../HTML/pantallaVictoria.html'
                        }
                    
                        Nivel(j);
                        //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                        document.getElementById(PosicionOriginal).style.backgroundImage='';
                        document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[j].nivel;
                        Comienzo();
                        PosicionOriginal=6;

                    }
                }
                if(document.getElementById(PosicionNueva).className == 'limite' && vida > 1){
                    vida--
                    l--
                    PosicionNueva=6
                    PosicionOriginal=6;
                   
                    Comienzo();
                    console.log(vida)
                }
                if(document.getElementById(PosicionNueva).className == 'limite' && vida == 1 ){
                    location.href = '../HTML/index.html'
                }
            }
            else if(tecla.keyCode == 87){
                PosicionNueva=PosicionOriginal-12
                if(document.getElementById(PosicionNueva).className != 'limite'){
                    document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[2].imagenMovimiento+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById(PosicionNueva).style.backgroundSize='cover';
                    document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                    document.getElementById(PosicionNueva).style.transform="rotate(180deg)"
                    PosicionOriginal=PosicionNueva
                    temporizador= setTimeout(parada,500);
                    if (PosicionOriginal >= 97){
                        j++
                        mundo++ 
                        if(mundo > 4){
                            location.href = '../HTML/pantallaVictoria.html'
                        }

                        Nivel(j);
                        //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                        document.getElementById(PosicionOriginal).style.backgroundImage='';
                        document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[j].nivel;
                        Comienzo();
                        PosicionOriginal=6;

                    }
                }
                if(document.getElementById(PosicionNueva).className == 'limite' && vida > 1){
                    vida--
                    l--
                    PosicionNueva=6
                    PosicionOriginal=6;
                   
                    Comienzo();
                    console.log(vida)
                }
                if(document.getElementById(PosicionNueva).className == 'limite' && vida == 1){
                    location.href = '../HTML/index.html'
                }
                
            
            }
            
        }

        function parada(){
            document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[2].imagenParada+')';
            clearTimeout(temporizador);
            
        }