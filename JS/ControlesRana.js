var PosicionOriginal=6;
var j=0;
var l = 0;
var vida = 3;
var temporizador
var PosicionNueva = 6;
var mundo
var nivel
var muerte;
var PersonajeMuerto=false;
var muerte2;

if (localStorage.getItem('nivelActual') === null ||localStorage.getItem('nivelActual') === 'NaN'){
    localStorage.setItem('nivelActual',j)
    localStorage.setItem('nivel',j)
    localStorage.setItem('vida',vida)
}

if(localStorage.getItem('nivelActual') === "35"){
    localStorage.setItem('nivelActual','0')
    localStorage.setItem('mundo','0')
}
if (localStorage.getItem('mundo') === null){
    localStorage.setItem('mundo',l)
}



document.onkeydown=prueba

mundo= parseInt(localStorage.getItem('mundo'))
var nivelActual=parseInt(localStorage.getItem('nivelActual'));
function prueba(tecla){
    
    if(tecla.keyCode == 88){
        localStorage.setItem('nivelActual',31);
        localStorage.setItem('nivel',35);
        location.href="../HTML/Mapa.html"
    }
}
        //se le llama al cargar nivel0
        function Comienzo(){
            clearTimeout(muerte);
            PersonajeMuerto=false
            //Nivel();
            document.getElementById('pantalla').innerHTML='';
            for(var i = 1; i<109;i++){
                document.getElementById('pantalla').innerHTML+='<div id="'+i+'"class="casilla" style=" background-size: contain; background-repeat: no-repeat; background-position: center;"></div>'

            }
            document.getElementById('6').style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].imagenParada+')';
            document.getElementById('6').style.transform="rotate(360deg)"
            
            Nivel();
           
            document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[nivelActual].nivel;
            //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
            document.getElementById('texto').innerHTML=vida;

            if(vida == 2){
                document.getElementById("Vida3").src="../Media/Images/corazon2.png";
            }
            if(vida == 1){
                document.getElementById("Vida2").src="../Media/Images/corazon2.png";
            }
            document.getElementById('6').style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')]+')';
            document.getElementById('6').style.transform="rotate(360deg)"
            //Aqui llama a la funcion Teclado
            if(PersonajeMuerto == true){
                console.log('Esta muerto')
            }
            else{
                document.onkeyup=Teclado
            }
            
            for(i = 97; i<109; i++){
                document.getElementById(i).style.display='none';
            }
            for (var m = 1; m <= niveles.escenarios[nivelActual].limite.length ; m++) {
                
               
                document.getElementById(niveles.escenarios[nivelActual].limite[m-1]).className = "limite";
                
                }
               /* //------------------------------------------------------------EJEMPLO DE ENEMIGO EN PANTALLA-----------------------------------------------------------------------------------------------------------------------------
                //***********************************************************************************************************************************************************************************************************************
                document.getElementById(niveles.enemigos[0].posicionX).innerHTML="<img src='"+niveles.enemigos[0].imagen+"'width='110%' height='110%' >";
                //***********************************************************************************************************************************************************************************************************************
                console.log(niveles.escenarios.length)*/
            


        }
        function Teclado(tecla){
                
            if(PersonajeMuerto == false){
                
                if(tecla.keyCode == 65){
                    if((PosicionOriginal-1)%12 == 0){
                        console.log('no')
                    }
                    else{
                        PosicionNueva=PosicionOriginal-1
                        if(document.getElementById(PosicionNueva).className != 'limite'){
                            PosicionNueva=PosicionOriginal-1
                            //Nivel();
                            document.getElementById(PosicionNueva).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].imagenMovimiento+')';
                            document.getElementById(PosicionNueva).style.transform="rotate(90deg)"
                            document.getElementById(PosicionNueva).style.backgroundSize='contain';
                            document.getElementById(PosicionNueva).style.backgroundRepeat='no-repeat';
                            document.getElementById(PosicionNueva).style.backgroundPosition='center';
                            document.getElementById(PosicionOriginal).style.backgroundImage='';
                            PosicionOriginal=PosicionNueva
                            temporizador= setTimeout(parada,500);
                            
                            if (PosicionOriginal >= 97){
                                
                                array.eliminarEnemigo();
                                    
                            
                                j++ 
                                mundo++
                                nivelActual++
                                localStorage.setItem('nivelActual',nivelActual)
                                if(localStorage.getItem('nivel') <= nivelActual){
                                    localStorage.setItem('nivel',nivelActual)
                                }
                                localStorage.setItem('mundo',mundo)
                            
                                if(localStorage.getItem('mundo') > 4){
                                    location.href = '../HTML/pantallaVictoria.html'
                                    localStorage.setItem('mundo','0')
                                    mundo=0;
                                    
                                    desbloquearMapa(nivelActual)
                                }
                              
                              
                            Nivel();
                                //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                                document.getElementById(PosicionOriginal).style.backgroundImage='';
                                document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[nivelActual].nivel;
                                //clearInterval(intervalo)
                                PosicionOriginal=6;
                                Comienzo();

                            }
                        }
                        if(document.getElementById(PosicionNueva).className == 'limite' && vida > 1 ){
                            vida--
                            l--
                            PersonajeMuerto=true
                            //AQUI MUERE EL PERSONAJE
                            document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].muerte+')';
                        muerte = setTimeout(Comienzo, 1700);
                            PosicionNueva=6
                            PosicionOriginal=6;
                        //clearInterval(intervalo)
                        
                            console.log(vida)
                        }
                        if(document.getElementById(PosicionNueva).className == 'limite' && vida == 1 || document.getElementById(PosicionOriginal).className == 'limite' && vida == 1){
                            location.href = '../HTML/pantallaFin.html'
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
                            //Nivel();
                            
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
                                if(localStorage.getItem('nivel') <= nivelActual){
                                    localStorage.setItem('nivel',nivelActual)
                                }
                                localStorage.setItem('mundo',mundo)
                                delete Nivel
                                
                                if(localStorage.getItem('mundo') > 4){
                                    location.href = '../HTML/pantallaVictoria.html'
                                    localStorage.setItem('mundo','0')
                                    mundo=0;
                                    
                                    desbloquearMapa(nivelActual)
                                }
                                
                                let n= j+1
                                //clearInterval(intervalo)
                                Nivel();
                                //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')'
                                document.getElementById(PosicionOriginal).style.backgroundImage='';
                                document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[j].nivel;
                                Comienzo();
                                PosicionOriginal=6;

                            }
                        }
                        if(document.getElementById(PosicionNueva).className == 'limite' && vida > 1 ){
                            vida--
                            l--
                            PersonajeMuerto=true
                            //AQUI MUERE EL PERSONAJE
                            document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].muerte+')';
                            muerte = setTimeout(Comienzo, 1700);
                            PosicionNueva=6
                            PosicionOriginal=6;
                            console.log(vida)
                        }
                        if(document.getElementById(PosicionNueva).className == 'limite' && vida == 1  || document.getElementById(PosicionOriginal).className == 'limite' && vida == 1){
                            location.href = '../HTML/pantallaFin.html'
                        }
                
                    }
                    
                }
                else if(tecla.keyCode == 32){
                    PosicionNueva=PosicionOriginal+12
                    if(document.getElementById(PosicionNueva).className != 'limite'){
                        //Nivel();
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
                                if(localStorage.getItem('nivel') <= nivelActual){
                                    localStorage.setItem('nivel',nivelActual)
                                }
                                localStorage.setItem('mundo',mundo)
                            delete Nivel
                            
                            if(localStorage.getItem('mundo') > 4){
                                location.href = '../HTML/pantallaVictoria.html'
                                localStorage.setItem('mundo','0')
                                mundo=0;
                            }
                            //clearInterval(intervalo)
                            Nivel();

                            //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                            //this.img.remove()
                            document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[j].nivel;
                            Comienzo();
                            PosicionOriginal=6;

                        }
                    }
                    if(document.getElementById(PosicionNueva).className == 'limite' && vida > 1 ){
                        vida--
                        l--
                        PersonajeMuerto=true
                        //AQUI MUERE EL PERSONAJE
                        document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].muerte+')';
                        
                        //clearInterval(intervalo)
                        muerte = setTimeout(Comienzo, 1700);
                        PosicionNueva=6
                        PosicionOriginal=6;
                        console.log(vida)
                    }
                    if(document.getElementById(PosicionNueva).className == 'limite' && vida == 1 || document.getElementById(PosicionOriginal).className == 'limite' && vida == 1 ){
                        location.href = '../HTML/pantallaFin.html'
                    }
                    
                    
                }
                else if(tecla.keyCode == 83){
                    PosicionNueva=PosicionOriginal+12
                    if(document.getElementById(PosicionNueva).className != 'limite'){
                        //Nivel();
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
                                if(localStorage.getItem('nivel') <= nivelActual){
                                    localStorage.setItem('nivel',nivelActual)
                                }
                                localStorage.setItem('mundo',mundo)
                            delete Nivel
                            if(localStorage.getItem('mundo') > 4){
                                location.href = '../HTML/pantallaVictoria.html'
                                localStorage.setItem('mundo','0')
                                mundo=0;
                                
                                    desbloquearMapa(nivelActual)
                            }
                            ////clearInterval(intervalo)
                            Nivel();
                            //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                            
                            document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[nivelActual].nivel;
                            Comienzo();
                            PosicionOriginal=6;

                        }
                    }
                    if(document.getElementById(PosicionNueva).className == 'limite' && vida > 1 ){
                        vida--
                        l--
                        PersonajeMuerto=true
                        //AQUI MUERE EL PERSONAJE

                        document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].muerte+')';
                        
                        ////clearInterval(intervalo)
                        muerte = setTimeout(Comienzo, 1700);
                        PosicionNueva=6
                        PosicionOriginal=6;
                        console.log(vida)
                    }
                    if(document.getElementById(PosicionNueva).className == 'limite' && vida == 1  || document.getElementById(PosicionOriginal).className == 'limite' && vida == 1){
                        location.href = '../HTML/pantallaFin.html'
                    }
                }
                else if(tecla.keyCode == 87){
                    PosicionNueva=PosicionOriginal-12
                    if(document.getElementById(PosicionNueva).className != 'limite'){
                    // Nivel();
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
                                if(localStorage.getItem('nivel') <= nivelActual){
                                    localStorage.setItem('nivel',nivelActual)
                                }
                                localStorage.setItem('mundo',mundo)
                            delete Nivel
                            if(localStorage.getItem('mundo') > 4){
                                location.href = '../HTML/pantallaVictoria.html'
                                localStorage.setItem('mundo','0')
                                mundo=0;
                                
                                    desbloquearMapa(nivelActual)
                            
                            }
                            //clearInterval(intervalo)

                            Nivel();
                            //document.getElementById('pantalla').style.backgroundImage='url('+niveles.escenarios[j].imagen+')';
                            document.getElementById(PosicionOriginal).style.backgroundImage='';
                            document.getElementById('nivel').innerHTML= 'nivel '+ niveles.escenarios[j].nivel;
                            Comienzo();
                            PosicionOriginal=6;

                    }
                }
                if(document.getElementById(PosicionNueva).className == 'limite' && vida > 1 ){
                    vida--
                    l--
                    document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].muerte+')';
                    
                   muerte = setTimeout(Comienzo, 1700);
                   PosicionNueva=6
                    PosicionOriginal=6;
                    console.log(vida)
                }
                if(document.getElementById(PosicionNueva).className == 'limite' && vida == 1 || document.getElementById(PosicionOriginal).className == 'limite' && vida == 1){
                    location.href = '../HTML/pantallaFin.html'
                }
                
            
            }
            
        }
        

        function parada(){
            //Nivel()
            document.getElementById(PosicionOriginal).style.backgroundImage='url('+niveles.personajes[localStorage.getItem('personajeActual')].imagenParada+')';
            clearTimeout(temporizador);
            
        }
    }