var niveles = {
    'personajes': [{ nombre: 'Jesus', imagenParada: '../Media/Images/Personajes/jesus.png', imagenMovimiento: '../Media/Images/Personajes/JesusMovimiento.gif', muerte: '../Media/Images/Personajes/muerte/jesus_muerte.gif', posicionY: '' },
    { nombre: 'Juanma', imagenParada: '../Media/Images/Personajes/juanma.png', imagenMovimiento: '../Media/Images/Personajes/JuanmaMovimiento.gif', muerte: '../Media/Images/Personajes/muerte/juanma_muerte.gif', posicionY: '' },
    { nombre: 'Rana', imagenParada: '../Media/Images/Personajes/Rana.png', imagenMovimiento: '../Media/Images/Personajes/RanaMovimineto.gif', muerte: '../Media/Images/Personajes/muerte/rana_muerte.gif', posicionY: '' },
    { nombre: 'Link', imagenParada: '../Media/Images/Personajes/link/link_quieto.png', imagenMovimiento: '../Media/Images/Personajes/link/link_movimiento_abajo.gif', muerte: '../Media/Images/Personajes/muerte/link_muerte.gif', posicionY: '' },
    { nombre: 'Kirby', imagenParada: '../Media/Images/Personajes/kirby.png', imagenMovimiento: '../Media/Images/Personajes/kirbymovimiento.gif', muerte: '../Media/Images/Personajes/muerte/kirby_muerte.gif', posicionY: '' },
    { nombre: 'Monstruo', imagenParada: '../Media/Images/Personajes/monstruoaliado.png', imagenMovimiento: '../Media/Images/Personajes/monstruoaliadomovimiento.gif', muerte: '../Media/Images/Personajes/muerte/monstruoaliado_muerte.gif', posicionY: '' },
    { nombre: 'Glock', imagenParada: '../Media/Images/Personajes/glockquieto.png', imagenMovimiento: '../Media/Images/Personajes/glockmovimiento.gif', muerte: '../Media/Images/Personajes/muerte/glock_muerte.gif', posicionY: '' },],

    'escenarios': [
       //----------------------------------------------------------------MUNDO BOSQUE----------------------------------------------------------------------------
    { nombre:'bosque1', nivel:'1', nivelProgresion:'0', imagen:'../Media/Images/MundoBosque/mapabosque1.png',
    limite:['1']},
    { nombre:'bosque2', nivel:'2', imagen:'../Media/Images/MundoBosque/mapabosque2.png',
    limite:['1']},
    { nombre:'bosque3', nivel:'3', imagen:'../Media/Images/MundoBosque/mapabosque3.png',
    limite:['1']},
    { nombre:'bosque4', nivel:'4', imagen:'../Media/Images/MundoBosque/mapabosque4.png',
    limite:['1']},
    { nombre:'bosque5', nivel:'5', imagen:'../Media/Images/MundoBosque/mapabosque5.png',
    limite:['1']},
     //----------------------------------------------------------------MUNDO DESIERTO----------------------------------------------------------------------------
     { nombre:'desierto1', nivel:'1', nivelProgresion: '5', imagen:'../Media/Images/MundoDesierto/mapadesierto1.png',
     limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
     '20','21','22','23','24','25','26','27','28','29','32','33','34','35','36',
     '49','50','51','52','53','56','57','58','59','60','73','74','75','76','77',
     '80','81','82','83','84','85','86','87','88','89','92','93','94','95','96',]},
     { nombre:'desierto2', nivel:'2', imagen:'../Media/Images/MundoDesierto/mapadesierto2.png',
     limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
     '20','21','22','23','24','25','26','27','28','29','32','33','34','35','36',
     '61','62','63','64','65','68','69','70','71','72','85','86','87','88','89',
     '92','93','94','95','96',]},
     { nombre:'desierto3', nivel:'3', imagen:'../Media/Images/MundoDesierto/mapadesierto3.png',
     limite:['1','2','3','4','5','8','9','10','11','12',
     '37','38','39','40','41','44','45','46','47','48',
     '49','50','51','52','53','56','57','58','59','60',
     '73','74','75','76','77','80','81','82','83','84',
     '85','86','87','88','89','92','93','94','95','96',]},
     { nombre:'desierto4', nivel:'4', imagen:'../Media/Images/MundoDesierto/mapadesierto4.png',
     limite:['1','2','3','4','5','8','9','10','11','12',
     '37','38','39','40','41','44','45','46','47','48',
     '73','74','75','76','77','80','81','82','83','84',]},
     { nombre:'desierto5', nivel:'5', imagen:'../Media/Images/MundoDesierto/mapadesierto5.png',
     limite:['1','2','3','4','5','8','9','10','11','12',
     '13','14','15','16','17','20','21','22',
     '23','24','85','86','87','88','89','92',
     '93','94','95','96']},

        //----------------------------------------------------------------MUNDO CUEVA----------------------------------------------------------------------------
        { nombre:'Cueva1', nivel:'1', nivelProgresion: '10', imagen:'../Media/Images/MundoCueva/mapacueva1.png',
        limite:['1','2','3','4','5','8','9','10','11','12','25','26','27','28','29',
        '32','33','34','35','36','49','50','51','52','53','56','57','58','59','60',
        '73','74','75','76','77','80','81','82','83','84','85','86','87','88','89',
        '92','93','94','95','96']},
        { nombre:'Cueva2', nivel:'2', imagen:'../Media/Images/MundoCueva/mapacueva2.png',
        limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','21',
        '22','23','24','25','26','27','28','30','31','33','34','35','36','61','62',
        '63','64','66','67','69','70','71','72','73','74','75','76','81','82','83',
        '84','85','86','87','88','89','92','93','94','95','96']},
        { nombre:'Cueva3', nivel:'3', imagen:'../Media/Images/MundoCueva/mapacueva3.png',
        limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
        '20','21','22','23','24','25','26','27','28','29','32','33','34','35','36',
        '73','74','75','76','77','80','81','82','83','84','85','86','87','88','89',
        '92','93','94','95','96']},
        { nombre:'Cueva4', nivel:'4', imagen:'../Media/Images/MundoCueva/mapacueva4.png',
        limite:['1','2','3','4','5','8','9','10','11','12','37','38','39','40','42',
        '43','45','46','47','48','49','50','51','52','54','55','57','58','59','60',
        '85','86','87','88','89','92','93','94','95','96']},
        { nombre:'Cueva5', nivel:'5', imagen:'../Media/Images/MundoCueva/mapacueva5.png',
        limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
        '20','21','22','23','24','49','50','51','52','53','56','57','58','59','60',
        '85','86','87','88','89','92','93','94','95','96']},
    //-------------------------------------------------------------------MUNDO LAVA------------------------------------------------------------------------------
    {nombre: 'lava1', nivel: '1', nivelProgresion: '15', imagen: '../Media/Images/MundoLava/mapalava1.png', 
    limite: ['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
    '20','21','22','23','24','25','26','27','28','29','32','33','34','35','36',
    '61','62','63','64','65','68','69','70','71','72','85','86','87','88','89',
    '92','93','94','95','96'] },
    { nombre: 'lava2', nivel: '2', imagen: '../Media/Images/MundoLava/mapalava2.png',  
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
    '20','21','22','23','24','61','62','63','64','65','68','69','70','71','72',
    '73','74','75','76','77','80','81','82','83','84','85','86','87','88','89',
    '92','93','94','95','96']},
    { nombre: 'lava3',nivel: '3', imagen: '../Media/Images/MundoLava/mapalava3.png',  
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
    '20','21','22','23','24','49','50','51','52','53','56','57','58','59','60',
    '85','86','87','88','89','92','93','94','95','96']},
    { nombre: 'lava4',nivel: '4', imagen: '../Media/Images/MundoLava/mapalava4.png',  
    limite:['1','2','3','4','5','8','9','10','11','12','25','26','27','28','29',
    '32','33','34','35','36','49','50','51','52','53','56','57','58','59','60',
    '73','74','75','76','77','80','81','82','83','84','85','86','87','88','89',
    '92','93','94','95','96']},
    { nombre: 'lava5',nivel: '5', imagen: '../Media/Images/MundoLava/mapalava5.png',  
      limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
      '20','21','22','23','24','25','26','27','28','29','32','33','34','35','36',
      '49','50','51','52','53','56','57','58','59','60','73','74','75','76','77',
      '80','81','82','83','84','85','86','87','88','89','92','93','94','95','96']},
   
   
    
    //----------------------------------------------------------------MUNDO CIELO----------------------------------------------------------------------------
    { nombre:'cielo1', nivel:'1', nivelProgresion: '20', imagen:'../Media/Images/MundoCielo/mapacielo1.png',
    limite:['1','2','3','4','5','8','9','10','11','12','37','38','39','40',
    '41','44','45','46','47','48','49','50','51','52','53','56','57','58',
    '59','60','73','74','75','76','77','80','81','82','83','84','85','86',
    '87','88','89','92','93','94','95','96',]},
    { nombre:'cielo2', nivel:'2', imagen:'../Media/Images/MundoCielo/mapacielo2.png',
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
    '20','21','22','23','24','37','38','39','40','41','44','45','46','47','48',
    '73','74','75','76','77','80','81','82','83','84','85','86','87','88','89',
    '92','93','94','95','96',]},
    { nombre:'cielo3', nivel:'3', imagen:'../Media/Images/MundoCielo/mapacielo3.png',
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','23','24',
    '25','26','28','29','30','31','32','33','35','36','61','62','64','65',
    '66','67','68','69','71','72','73','74','83','84','85','86','87','88',
    '89','92','93','94','95','96',]},
    { nombre:'cielo4', nivel:'4', imagen:'../Media/Images/MundoCielo/mapacielo4.png',
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
    '23','24','25','26','27','28','29','30','31','32','33','35','36','61','62',
    '63','64','65','66','67','68','69','71','72','73','74','75','76','77','83',
    '84','85','86','87','88','89','91','92','93','94','95','96',]},
    { nombre:'cielo5', nivel:'5', imagen:'../Media/Images/MundoCielo/mapacielo5.png',
    limite:['1','2','3','4','5','8','9','10','11','12','25','26','27','28',
    '29','32','33','34','35','36','61','62','63','64','65','68','69','70',
    '71','72','85','86','87','88','89','92','93','94','95','96',]},
    //----------------------------------------------------------------MUNDO CASINO----------------------------------------------------------------------------------------------------------------
    { nombre:'casino1', nivel:'1', nivelProgresion: '25', imagen:'../Media/Images/MundoCasino/mapacasino1.png',
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
    '20','21','22','23','24','49','50','51','52','53','56','57','58','59','60',
    '61','62','63','64','65','68','69','70','71','72','73','74','75','76','77',
    '80','81','82','83','84','85','86','87','88','89','92','93','94','95','96',]},
    { nombre:'casino2', nivel:'2', imagen:'../Media/Images/MundoCasino/mapacasino2.png',
    limite:['1','2','3','4','5','8','9','10','11','12','25','26','27','28','29',
    '32','33','34','35','36','61','62','63','64','65','68','69','70','71','72',
    '85','86','87','88','89','92','93','94','95','96',]},
    { nombre:'casino3', nivel:'3', imagen:'../Media/Images/MundoCasino/mapacasino3.png',
    limite:['1','12','13','15','16','17','18','19','20','21','22','24','37','38',
    '39','40','41','44','45','46','47','48','61','63','64','65','66','67','68',
    '69','70','72','85','86','87','88','89','92','93','94','95','96',]},
    { nombre:'casino4', nivel:'4', imagen:'../Media/Images/MundoCasino/mapacasino4.png',
    limite:['1','2','3','4','5','8','9','10','11','12',]},
    { nombre:'casino5', nivel:'5', imagen:'../Media/Images/MundoCasino/mapacasino5.png',
    limite:['85','86','87','88','89','92','93','94','95','96',]},
    //-------------------------------------------------------------MUNDO ESCUELA--------------------------------------------------------------------------------------------------------------
    {nombre:'escuela1',nivel:'1',nivelProgresion:'30',imagen:'../Media/Images/MundoEscuela/mapaescuela1.png',
    limite:['1','2','3','4','5','8','9','10','11','12','25','26','27','28','29','32','33','34','35','36','37',
    '38','39','40','41','44','45','46','47','48','49','50','51','52','53','56','57','58','59','60','73','74',
    '75','76','77','80','81','82','83','84','85','86','87','88','89','92','93','94','95','96',]},
    {nombre:'escuela2',nivel:'2',imagen:'../Media/Images/MundoEscuela/mapaescuela2.png',
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17','20','21','22','23','24','49',
    '50','51','52','53','56','57','58','59','60','61','62','63','64','65','68','69','70','71','72','73','74',
    '75','76','77','80','81','82','83','84','85','86','87','88','89','92','93','94','95','96',]},
    {nombre:'escuela3',nivel:'3',imagen:'../Media/Images/MundoEscuela/mapaescuela3.png',
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17','23','24','25','26','27','28',
    '29','30','31','32','33','35','36','61','62','63','64','65','66','67','68','69','71','72','73','74','75',
    '76','77','83','84','85','86','87','88','89','92','93','94','95','96',]},
    {nombre:'escuela4',nivel:'4',imagen:'../Media/Images/MundoEscuela/mapaescuela4.png',
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','21','22','23','24','25','26','27',
    '28','30','31','33','34','35','36','61','62','63','64','66','67','69','70','71','72','73','74','75','76',
    '81','82','83','84','85','86','87','88','89','92','93','94','95','96',]},
    {nombre:'escuela5',nivel:'5',imagen:'../Media/Images/MundoEscuela/mapaescuela5.png',
    limite:['1','12','13','15','16','17','18','19','20','21','22','24','37','39','40','41','42','43','44','45',
    '46','48','61','63','64','65','66','67','68','69','70','72','85','87','88','89','90','91','92','93','94','96',]},
  ],
    //{ nombre:'', nivel:'', imagen:'',limite:[]},
    'enemigos': [
      //-------------------------------------------------------MUNDO BOSQUE----------------------------------------------------------------------------------------
    { nombre: 'enemigobosque1', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial:'37',  posicionFinal:'48', avance: '+1', nivel:'0', velocidad:'1200',intervalo:'',},
    { nombre: 'enemigobosque2', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '25', posicionFinal:'36', avance: '+1', nivel:'1', velocidad:'1200',intervalo:'',},
    { nombre: 'enemigobosque3', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '60', posicionFinal:'49', avance: '-1', nivel:'1', velocidad:'1200',intervalo:'',},
    { nombre: 'enemigobosque4', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '61', posicionFinal:'72', avance: '+1', nivel:'1', velocidad:'1200',intervalo:'',},
    { nombre: 'enemigobosque6', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '13', posicionFinal:'24', avance: '+1', nivel:'2',velocidad:'1200', intervalo:'',},
    { nombre: 'enemigobosque7', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '37', posicionFinal:'48', avance: '+1', nivel:'2',velocidad:'1200', intervalo:'',},
    { nombre: 'enemigobosque8', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '84', posicionFinal:'73', avance: '-1', nivel:'2',velocidad:'1200', intervalo:'',},
    { nombre: 'enemigobosque9', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '25', posicionFinal:'36', avance: '+1', nivel:'3',velocidad:'1200', intervalo:'',},
    { nombre: 'enemigobosque10', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '37', posicionFinal:'48', avance: '+1', nivel:'3',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigobosque11', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '84', posicionFinal:'73', avance: '-1', nivel:'3',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigobosque12', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '96', posicionFinal:'85', avance: '-1', nivel:'3',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigobosque13', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '25', posicionFinal:'36', avance: '+1', nivel:'4',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigobosque14', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '48', posicionFinal:'37', avance: '-1', nivel:'4',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigobosque15', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '49', posicionFinal:'60', avance: '+1', nivel:'4',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigobosque16', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '96', posicionFinal:'85', avance: '-1', nivel:'4',velocidad:'1200',intervalo:'', },
    //-----------------------------------------------------------------------------MUNDO DESIERTO----------------------------------------------------------------
    { nombre: 'enemigodesierto1', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '48', posicionFinal:'37', avance: '-1', nivel:'5',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto2', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '61', posicionFinal:'72', avance: '+1', nivel:'5',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto3', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '37', posicionFinal:'48', avance: '+1', nivel:'6',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto4', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '49', posicionFinal:'60', avance: '+1', nivel:'6',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto5', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '84', posicionFinal:'73', avance: '-1', nivel:'6',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto6', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '24', posicionFinal:'13', avance: '-1', nivel:'7',velocidad:'800', intervalo:'',},
    { nombre: 'enemigodesierto7', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '25', posicionFinal:'36', avance: '+1', nivel:'7',velocidad:'900', intervalo:'',},
    { nombre: 'enemigodesierto8', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '72', posicionFinal:'61', avance: '-1', nivel:'7',velocidad:'1000',intervalo:'', },
    { nombre: 'enemigodesierto9', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '24', posicionFinal:'13', avance: '-1', nivel:'8',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto10', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '36', posicionFinal:'25', avance: '-1', nivel:'8',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto11', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '49', posicionFinal:'60', avance: '+1', nivel:'8',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto12', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '61', posicionFinal:'72', avance: '+1', nivel:'8',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto13', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '85', posicionFinal:'96', avance: '+1', nivel:'8',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto14', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '25', posicionFinal:'36', avance: '+1', nivel:'9',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto15', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '48', posicionFinal:'37', avance: '-1', nivel:'9',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto16', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '49', posicionFinal:'60', avance: '+1', nivel:'9',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto17', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '72', posicionFinal:'61', avance: '-1', nivel:'9',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigodesierto18', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '73', posicionFinal:'84', avance: '+1', nivel:'9',velocidad:'1200',intervalo:'', },
    //--------------------------------------------------------------------------MUNDO CUEVA-----------------------------------------------------------------------
    { nombre: 'enemigocueva1', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '24', posicionFinal:'13', avance: '-1', nivel:'10',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva2', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '37', posicionFinal:'48', avance: '+1', nivel:'10',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva3', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '72', posicionFinal:'61', avance: '-1', nivel:'10',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva4', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '48', posicionFinal:'37', avance: '-1', nivel:'11',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva5', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '49', posicionFinal:'60', avance: '+1', nivel:'11',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva6', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '37', posicionFinal:'48', avance: '+1', nivel:'12',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva7', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '49', posicionFinal:'60', avance: '+1', nivel:'12',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva8', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '61', posicionFinal:'72', avance: '+1', nivel:'12',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva9', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '24', posicionFinal:'13', avance: '-1', nivel:'13',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva10', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '36', posicionFinal:'25', avance: '-1', nivel:'13',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva11', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '61', posicionFinal:'72', avance: '+1', nivel:'13',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva12', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '73', posicionFinal:'84', avance: '+1', nivel:'13',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva13', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '36', posicionFinal:'25', avance: '-1', nivel:'14',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva14', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '48', posicionFinal:'37', avance: '-1', nivel:'14',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva15', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '72', posicionFinal:'61', avance: '-1', nivel:'14',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocueva16', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '84', posicionFinal:'73', avance: '-1', nivel:'14',velocidad:'1200',intervalo:'', },
    //--------------------------------------------------------------MUNDO LAVA--------------------------------------------------------------------------------
    { nombre: 'enemigolava1', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '37', posicionFinal:'48', avance: '+1', nivel:'15',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava2', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '60', posicionFinal:'49', avance: '-1', nivel:'15',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava3', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '73', posicionFinal:'84', avance: '+1', nivel:'15',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava4', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '25', posicionFinal:'36', avance: '+1', nivel:'16',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava5', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '48', posicionFinal:'37', avance: '-1', nivel:'16',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava6', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '49', posicionFinal:'60', avance: '+1', nivel:'16',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava7', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '36', posicionFinal:'25', avance: '-1', nivel:'17',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava8', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '48', posicionFinal:'37', avance: '-1', nivel:'17',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava9', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '61', posicionFinal:'72', avance: '+1', nivel:'17',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava10', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '73', posicionFinal:'84', avance: '+1', nivel:'17',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava11', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '13', posicionFinal:'24', avance: '+1', nivel:'18',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava12', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '37', posicionFinal:'48', avance: '+1', nivel:'18',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava13', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '72', posicionFinal:'61', avance: '-1', nivel:'18',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava14', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '37', posicionFinal:'48', avance: '+1', nivel:'19',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigolava15', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '61', posicionFinal:'72', avance: '+1', nivel:'19',velocidad:'1200',intervalo:'', },
    //------------------------------------------------------------MUNDO CIELO--------------------------------------------------------------
    { nombre: 'enemigocielo1', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '13', posicionFinal:'24', avance: '+1', nivel:'20',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo2', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '36', posicionFinal:'25', avance: '-1', nivel:'20',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo3', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '72', posicionFinal:'61', avance: '-1', nivel:'20',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo4', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '25', posicionFinal:'14', avance: '-1', nivel:'21',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo5', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '60', posicionFinal:'49', avance: '-1', nivel:'21',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo6', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '61', posicionFinal:'72', avance: '+1', nivel:'21',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo7', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '37', posicionFinal:'48', avance: '+1', nivel:'22',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo8', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '60', posicionFinal:'49', avance: '-1', nivel:'22',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo9', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '48', posicionFinal:'37', avance: '-1', nivel:'23',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo10', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '49', posicionFinal:'60', avance: '+1', nivel:'23',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo11', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '13', posicionFinal:'24', avance: '+1', nivel:'24',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo12', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '48', posicionFinal:'37', avance: '-1', nivel:'24',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo13', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '60', posicionFinal:'49', avance: '-1', nivel:'24',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocielo14', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '73', posicionFinal:'84', avance: '+1', nivel:'24',velocidad:'1200',intervalo:'', },
    //-----------------------------------------------------------MUNDO CASINO------------------------------------------------------------------------
    { nombre: 'enemigocasino1', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '25', posicionFinal:'37', avance: '+1', nivel:'25',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino2', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '37', posicionFinal:'49', avance: '+1', nivel:'25',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino3', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '24', posicionFinal:'12', avance: '-1', nivel:'26',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino4', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '37', posicionFinal:'49', avance: '+1', nivel:'26',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino5', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '60', posicionFinal:'48', avance: '-1', nivel:'26',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino6', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '84', posicionFinal:'72', avance: '-1', nivel:'26',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino7', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '25', posicionFinal:'36', avance: '+1', nivel:'27',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino8', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '60', posicionFinal:'49', avance: '-1', nivel:'27',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino9', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '73', posicionFinal:'84', avance: '+1', nivel:'27',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino10', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '13', posicionFinal:'25', avance: '+1', nivel:'28',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino11', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '25', posicionFinal:'37', avance: '+1', nivel:'28',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino12', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '48', posicionFinal:'36', avance: '-1', nivel:'28',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino13', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '49', posicionFinal:'61', avance: '+1', nivel:'28',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino14', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '72', posicionFinal:'60', avance: '-1', nivel:'28',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino15', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '84', posicionFinal:'72', avance: '-1', nivel:'28',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino16', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '85', posicionFinal:'97', avance: '+1', nivel:'28',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino17', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '1',  posicionFinal:'13', avance: '+1', nivel:'29',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino18', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '13', posicionFinal:'25', avance: '+1', nivel:'29',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino19', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '25', posicionFinal:'37', avance: '+1', nivel:'29',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino20', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '48', posicionFinal:'36', avance: '-1', nivel:'29',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino21', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '60', posicionFinal:'48', avance: '-1', nivel:'29',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino22', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '61', posicionFinal:'73', avance: '+1', nivel:'29',velocidad:'1200',intervalo:'', },
    { nombre: 'enemigocasino23', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '73', posicionFinal:'85', avance: '+1', nivel:'29',velocidad:'1200',intervalo:'', },
    //---------------------------------------------------------MUNDO ESCUELA----------------------------------------------------------------------------------------------------------------------------
    {nombre:'enemigoescuela',imagen:'../Media/Images/Personajes/JuanmaMovimiento.gif',posicionInicial:'13',posicionFinal:'24',avance:'+1',nivel:'30',},
    {nombre:'enemigoescuela',imagen:'../Media/Images/Personajes/JesusMovimiento.gif',posicionInicial:'72',posicionFinal:'60',avance:'-1',nivel:'30',},
    {nombre:'enemigoescuela',imagen:'../Media/Images/Personajes/JuanmaMovimiento.gif',posicionInicial:'',posicionFinal:'',avance:'-1',nivel:'',},
    {nombre:'enemigoescuela',imagen:'',posicionInicial:'',posicionFinal:'',avance:'',nivel:'',},
    {nombre:'enemigoescuela',imagen:'../Media/Images/Personajes/JuanmaMovimiento.gif',posicionInicial:'',posicionFinal:'',avance:'',nivel:'',},
    {nombre:'enemigoescuela',imagen:'',posicionInicial:'',posicionFinal:'',avance:'',nivel:'',},
    {nombre:'enemigoescuela',imagen:'',posicionInicial:'',posicionFinal:'',avance:'',nivel:'',},
    {nombre:'enemigoescuela',imagen:'',posicionInicial:'',posicionFinal:'',avance:'',nivel:'',},
    {nombre:'enemigoescuela',imagen:'',posicionInicial:'',posicionFinal:'',avance:'',nivel:'',},
    {nombre:'enemigoescuela',imagen:'',posicionInicial:'',posicionFinal:'',avance:'',nivel:'',},
    {nombre:'enemigoescuela',imagen:'',posicionInicial:'',posicionFinal:'',avance:'',nivel:'',},
    {nombre:'enemigoescuela',imagen:'',posicionInicial:'',posicionFinal:'',avance:'',nivel:'',},
    {nombre:'',imagen:'',posicionInicial:'',posicionFinal:'',avance:'',nivel:'',},
  ]
};
var identificadorCiclo=[];

