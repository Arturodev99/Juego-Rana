var PosicionOriginal=6;
var j=0;
var l = 0;
var vida = 3;
var temporizador
var PosicionNueva = 6;
var mundo
var nivel

if (localStorage.getItem('nivelActual') === null ||localStorage.getItem('nivelActual') === 'NaN'){
    localStorage.setItem('nivelActual',j)
    localStorage.setItem('vida',vida)
}
if(localStorage.getItem('nivelActual') === "25"){
    localStorage.setItem('nivelActual','0')
    localStorage.setItem('mundo','0')
}
if (localStorage.getItem('mundo') === null){
    localStorage.setItem('mundo',l)
}




mundo= parseInt(localStorage.getItem('mundo'))
nivelActual=parseInt(localStorage.getItem('nivelActual'));

        function Comienzo(){
            //Nivel();
            document.getElementById('pantalla').innerHTML='';
            for(var i = 1; i<109;i++){
                document.getElementById('pantalla').innerHTML+='<div id="'+i+'"class="casilla" style=" background-size: contain; background-repeat: no-repeat; background-position: center;"></div>'

            }
            
            
            Nivel()
            document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[nivelActual].nivel;
            //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
            document.getElementById('texto').innerHTML=vida;
            //document.getElementById('6').style.backgroundImage='url('+niveles.personajes[2].imagenParada+')';
            document.getElementById('6').style.transform="rotate(360deg)"
            document.onkeyup=Teclado
            for(i = 97; i<109; i++){
                document.getElementById(i).style.display='none';
            }
            for (var m = 1; m <= niveles.escenarios[nivelActual].limite.length ; m++) {
                
               
                document.getElementById(niveles.escenarios[nivelActual].limite[m-1]).className = "limite";
                
                }
                document.getElementById(niveles.enemigos[0].posicionX).style.backgroundImage= "url("+niveles.enemigos[0].imagen+")";
                console.log(niveles.escenarios.length)
            


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
                        Nivel();
                        document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].imagenMovimiento+')';
                        document.getElementById(PosicionNueva).style.transform="rotate(90deg)"
                        document.getElementById(PosicionNueva).style.backgroundSize='contain';
                        document.getElementById(PosicionNueva).style.backgroundRepeat='no-repeat';
                        document.getElementById(PosicionNueva).style.backgroundPosition='center';
                        document.getElementById(PosicionOriginal).style.backgroundImage='';
                        PosicionOriginal=PosicionNueva
                        temporizador= setTimeout(parada,500);
                        
                        if (PosicionOriginal >= 97){
                            j++ 
                            mundo++
                            nivelActual++
                            localStorage.setItem('nivelActual',nivelActual)
                            localStorage.setItem('mundo',mundo)
                           
                            if(localStorage.getItem('mundo') > 4){
                                location.href = '../HTML/pantallaVictoria.html'
                                localStorage.setItem('mundo','0')
                                mundo=0;
                            }

                            Nivel();
                            //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                            document.getElementById(PosicionOriginal).style.backgroundImage='';
                            document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[nivelActual].nivel;
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
                        Nivel();
                        
                        document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].imagenMovimiento+')';
                        document.getElementById(PosicionOriginal).style.backgroundImage='';
                        document.getElementById(PosicionNueva).style.zIndex='1'
                        document.getElementById(PosicionNueva).style.transform="rotate(270deg)"
                        document.getElementById(PosicionNueva).style.backgroundSize='contain';
                        document.getElementById(PosicionNueva).style.backgroundRepeat='no-repeat';
                        document.getElementById(PosicionNueva).style.backgroundPosition='center';
                        document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                        PosicionOriginal=PosicionNueva
                        temporizador= setTimeout(parada,500);
                        if (PosicionOriginal >= 97){
                            j++
                            mundo++ 
                            nivelActual++
                            localStorage.setItem('nivelActual',nivelActual)
                            localStorage.setItem('mundo',mundo)
                            delete Nivel
                            
                            if(localStorage.getItem('mundo') > 4){
                                location.href = '../HTML/pantallaVictoria.html'
                                localStorage.setItem('mundo','0')
                                mundo=0;
                            }

                            let n= j+1
                            Nivel();
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
                    Nivel();
                    document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].imagenMovimiento+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById(PosicionNueva).style.backgroundSize='contain';
                    document.getElementById(PosicionNueva).style.backgroundRepeat='no-repeat';
                    document.getElementById(PosicionNueva).style.backgroundPosition='center';
                    document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                    document.getElementById(PosicionNueva).style.transform="rotate(360deg)"
                    PosicionOriginal=PosicionNueva
                    temporizador= setTimeout(parada,500);
                    if (PosicionOriginal >= 97){
                        j++
                        mundo++ 
                        nivelActual++
                            localStorage.setItem('nivelActual',nivelActual)
                            localStorage.setItem('mundo',mundo)
                        delete Nivel
                        
                        if(localStorage.getItem('mundo') > 4){
                            location.href = '../HTML/pantallaVictoria.html'
                            localStorage.setItem('mundo','0')
                            mundo=0;
                        }

                        Nivel();

                        //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                        //this.img.remove()
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
                    Nivel();
                    document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].imagenMovimiento+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById(PosicionNueva).style.backgroundSize='contain';
                    document.getElementById(PosicionNueva).style.backgroundRepeat='no-repeat';
                    document.getElementById(PosicionNueva).style.backgroundPosition='center';
                    document.getElementById(PosicionNueva).style.transform="rotate(360deg)"
                    PosicionOriginal=PosicionNueva
                    temporizador= setTimeout(parada,500);
                    if (PosicionOriginal >= 97){
                        j++
                        mundo++
                        nivelActual++
                            localStorage.setItem('nivelActual',nivelActual)
                            localStorage.setItem('mundo',mundo)
                        delete Nivel
                        if(localStorage.getItem('mundo') > 4){
                            location.href = '../HTML/pantallaVictoria.html'
                            localStorage.setItem('mundo','0')
                            mundo=0;
                        }
                    
                        Nivel();
                        //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                        
                        document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[nivelActual].nivel;
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
                    Nivel();
                    document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].imagenMovimiento+')';
                    document.getElementById(PosicionOriginal).style.backgroundImage='';
                    document.getElementById(PosicionNueva).style.backgroundSize='contain';
                    document.getElementById(PosicionNueva).style.backgroundRepeat='no-repeat';
                    document.getElementById(PosicionNueva).style.backgroundPosition='center';
                    document.getElementById(PosicionOriginal).style.backgroundColor='inherit';
                    document.getElementById(PosicionNueva).style.transform="rotate(180deg)"
                    PosicionOriginal=PosicionNueva
                    temporizador= setTimeout(parada,500);
                    if (PosicionOriginal >= 97){
                        j++
                        mundo++ 
                        nivelActual++
                            localStorage.setItem('nivelActual',nivelActual)
                            localStorage.setItem('mundo',mundo)
                        delete Nivel
                        if(localStorage.getItem('mundo') > 4){
                            location.href = '../HTML/pantallaVictoria.html'
                            localStorage.setItem('mundo','0')
                            mundo=0;
                           
                        }
                        

                        Nivel();
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
            Nivel()
            //document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[2].imagenParada+')';
            clearTimeout(temporizador);
            
        }