var niveles = {
    'personajes': [{ nombre: 'Jesus', imagenParada: '../Media/Images/Personajes/jesus.png', imagenMovimiento: '../Media/Images/Personajes/JesusMovimiento.gif', posicionX: '', posicionY: '' },
    { nombre: 'Juanma', imagenParada: '../Media/Images/Personajes/juanma.png', imagenMovimiento: '../Media/Images/Personajes/JuanmaMovimiento.gif', posicionX: '', posicionY: '' },
    { nombre: 'Rana', imagenParada: '../Media/Images/Personajes/Rana.png', imagenMovimiento: '../Media/Images/Personajes/RanaMovimineto.gif', posicionX: '', posicionY: '' }],

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
    limite:['85','86','87','88','89','92','93','94','95','96',]}
  ],
    //{ nombre:'', nivel:'', imagen:'',limite:[]},
    'enemigos': [
      //-------------------------------------------------------MUNDO BOSQUE----------------------------------------------------------------------------------------
    { nombre: 'enemigobosque1', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial:'37',  posicionFinal:'45', avance: '+1', nivel:'0', velocidad:'600',},
    { nombre: 'enemigobosque2', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '25', posicionFinal:'33', avance: '+1', nivel:'1', velocidad:'400',},
    { nombre: 'enemigobosque3', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '60', posicionFinal:'52', avance: '-1', nivel:'1', velocidad:'700',},
    { nombre: 'enemigobosque4', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '61', posicionFinal:'69', avance: '+1', nivel:'1', velocidad:'600',},
    { nombre: 'enemigobosque6', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '13', posicionFinal:'21', avance: '+1', nivel:'2',velocidad:'700', },
    { nombre: 'enemigobosque7', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '37', posicionFinal:'45', avance: '+1', nivel:'2',velocidad:'500', },
    { nombre: 'enemigobosque8', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '84', posicionFinal:'76', avance: '-1', nivel:'2',velocidad:'500', },
    { nombre: 'enemigobosque9', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '25', posicionFinal:'33', avance: '+1', nivel:'3',velocidad:'600', },
    { nombre: 'enemigobosque10', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '37', posicionFinal:'45', avance: '+1', nivel:'3',velocidad:'400', },
    { nombre: 'enemigobosque11', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '84', posicionFinal:'76', avance: '-1', nivel:'3',velocidad:'800', },
    { nombre: 'enemigobosque12', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '96', posicionFinal:'88', avance: '-1', nivel:'3',velocidad:'200', },
    { nombre: 'enemigobosque13', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '25', posicionFinal:'33', avance: '+1', nivel:'4',velocidad:'600', },
    { nombre: 'enemigobosque14', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '48', posicionFinal:'40', avance: '-1', nivel:'4',velocidad:'400', },
    { nombre: 'enemigobosque15', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '49', posicionFinal:'57', avance: '+1', nivel:'4',velocidad:'500', },
    { nombre: 'enemigobosque16', imagen: '../Media/Images/Enemigos/enemigobosque.gif', posicionInicial: '96', posicionFinal:'88', avance: '-1', nivel:'4',velocidad:'500', },
    //-----------------------------------------------------------------------------MUNDO DESIERTO----------------------------------------------------------------
    { nombre: 'enemigodesierto1', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '48', posicionFinal:'', avance: '-1', nivel:'5',velocidad:'', },
    { nombre: 'enemigodesierto2', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '61', posicionFinal:'', avance: '+1', nivel:'5',velocidad:'', },
    { nombre: 'enemigodesierto3', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '37', posicionFinal:'', avance: '+1', nivel:'6',velocidad:'', },
    { nombre: 'enemigodesierto4', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '49', posicionFinal:'', avance: '+1', nivel:'6',velocidad:'', },
    { nombre: 'enemigodesierto5', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '84', posicionFinal:'', avance: '-1', nivel:'6',velocidad:'', },
    { nombre: 'enemigodesierto6', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '24', posicionFinal:'', avance: '-1', nivel:'7',velocidad:'', },
    { nombre: 'enemigodesierto7', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '25', posicionFinal:'', avance: '+1', nivel:'7',velocidad:'', },
    { nombre: 'enemigodesierto8', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '72', posicionFinal:'', avance: '-1', nivel:'7',velocidad:'', },
    { nombre: 'enemigodesierto9', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '24', posicionFinal:'', avance: '-1', nivel:'8',velocidad:'', },
    { nombre: 'enemigodesierto10', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '36', posicionFinal:'', avance: '-1', nivel:'8',velocidad:'', },
    { nombre: 'enemigodesierto11', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '49', posicionFinal:'', avance: '+1', nivel:'8',velocidad:'', },
    { nombre: 'enemigodesierto12', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '61', posicionFinal:'', avance: '+1', nivel:'8',velocidad:'', },
    { nombre: 'enemigodesierto13', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '85', posicionFinal:'', avance: '+1', nivel:'8',velocidad:'', },
    { nombre: 'enemigodesierto14', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '25', posicionFinal:'', avance: '+1', nivel:'9',velocidad:'', },
    { nombre: 'enemigodesierto15', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '48', posicionFinal:'', avance: '-1', nivel:'9',velocidad:'', },
    { nombre: 'enemigodesierto16', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '49', posicionFinal:'', avance: '+1', nivel:'9',velocidad:'', },
    { nombre: 'enemigodesierto17', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '72', posicionFinal:'', avance: '-1', nivel:'9',velocidad:'', },
    { nombre: 'enemigodesierto18', imagen: '../Media/Images/Enemigos/enemigodesierto.gif', posicionInicial: '73', posicionFinal:'', avance: '+1', nivel:'9',velocidad:'', },
    //--------------------------------------------------------------------------MUNDO CUEVA-----------------------------------------------------------------------
    { nombre: 'enemigocueva1', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '24', posicionFinal:'', avance: '-1', nivel:'10',velocidad:'', },
    { nombre: 'enemigocueva2', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '37', posicionFinal:'', avance: '+1', nivel:'10',velocidad:'', },
    { nombre: 'enemigocueva3', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '72', posicionFinal:'', avance: '-1', nivel:'10',velocidad:'', },
    { nombre: 'enemigocueva4', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '48', posicionFinal:'', avance: '-1', nivel:'11',velocidad:'', },
    { nombre: 'enemigocueva5', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '49', posicionFinal:'', avance: '+1', nivel:'11',velocidad:'', },
    { nombre: 'enemigocueva6', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '37', posicionFinal:'', avance: '+1', nivel:'12',velocidad:'', },
    { nombre: 'enemigocueva7', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '49', posicionFinal:'', avance: '+1', nivel:'12',velocidad:'', },
    { nombre: 'enemigocueva8', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '61', posicionFinal:'', avance: '+1', nivel:'12',velocidad:'', },
    { nombre: 'enemigocueva9', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '24', posicionFinal:'', avance: '-1', nivel:'13',velocidad:'', },
    { nombre: 'enemigocueva10', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '36', posicionFinal:'', avance: '-1', nivel:'13',velocidad:'', },
    { nombre: 'enemigocueva11', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '61', posicionFinal:'', avance: '+1', nivel:'13',velocidad:'', },
    { nombre: 'enemigocueva12', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '73', posicionFinal:'', avance: '+1', nivel:'13',velocidad:'', },
    { nombre: 'enemigocueva13', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '36', posicionFinal:'', avance: '-1', nivel:'14',velocidad:'', },
    { nombre: 'enemigocueva14', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '48', posicionFinal:'', avance: '-1', nivel:'14',velocidad:'', },
    { nombre: 'enemigocueva15', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '72', posicionFinal:'', avance: '-1', nivel:'14',velocidad:'', },
    { nombre: 'enemigocueva16', imagen: '../Media/Images/Enemigos/enemigocueva.gif', posicionInicial: '84', posicionFinal:'', avance: '-1', nivel:'14',velocidad:'', },
    //--------------------------------------------------------------MUNDO LAVA--------------------------------------------------------------------------------
    { nombre: 'enemigolava1', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '37', posicionFinal:'', avance: '+1', nivel:'15',velocidad:'', },
    { nombre: 'enemigolava2', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '60', posicionFinal:'', avance: '-1', nivel:'15',velocidad:'', },
    { nombre: 'enemigolava3', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '73', posicionFinal:'', avance: '+1', nivel:'15',velocidad:'', },
    { nombre: 'enemigolava4', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '25', posicionFinal:'', avance: '+1', nivel:'16',velocidad:'', },
    { nombre: 'enemigolava5', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '48', posicionFinal:'', avance: '-1', nivel:'16',velocidad:'', },
    { nombre: 'enemigolava6', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '49', posicionFinal:'', avance: '+1', nivel:'16',velocidad:'', },
    { nombre: 'enemigolava7', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '36', posicionFinal:'', avance: '-1', nivel:'17',velocidad:'', },
    { nombre: 'enemigolava8', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '48', posicionFinal:'', avance: '-1', nivel:'17',velocidad:'', },
    { nombre: 'enemigolava9', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '61', posicionFinal:'', avance: '+1', nivel:'17',velocidad:'', },
    { nombre: 'enemigolava10', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '73', posicionFinal:'', avance: '+1', nivel:'17',velocidad:'', },
    { nombre: 'enemigolava11', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '13', posicionFinal:'', avance: '+1', nivel:'18',velocidad:'', },
    { nombre: 'enemigolava12', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '37', posicionFinal:'', avance: '+1', nivel:'18',velocidad:'', },
    { nombre: 'enemigolava13', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '72', posicionFinal:'', avance: '-1', nivel:'18',velocidad:'', },
    { nombre: 'enemigolava14', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '37', posicionFinal:'', avance: '+1', nivel:'19',velocidad:'', },
    { nombre: 'enemigolava15', imagen: '../Media/Images/Enemigos/enemigolava.gif', posicionInicial: '61', posicionFinal:'', avance: '+1', nivel:'19',velocidad:'', },
    //------------------------------------------------------------MUNDO CIELO--------------------------------------------------------------
    { nombre: 'enemigocielo1', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '13', posicionFinal:'', avance: '+1', nivel:'20',velocidad:'', },
    { nombre: 'enemigocielo2', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '36', posicionFinal:'', avance: '-1', nivel:'20',velocidad:'', },
    { nombre: 'enemigocielo3', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '72', posicionFinal:'', avance: '-1', nivel:'20',velocidad:'', },
    { nombre: 'enemigocielo4', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '25', posicionFinal:'', avance: '+1', nivel:'21',velocidad:'', },
    { nombre: 'enemigocielo5', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '60', posicionFinal:'', avance: '-1', nivel:'21',velocidad:'', },
    { nombre: 'enemigocielo6', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '61', posicionFinal:'', avance: '+1', nivel:'21',velocidad:'', },
    { nombre: 'enemigocielo7', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '37', posicionFinal:'', avance: '+1', nivel:'22',velocidad:'', },
    { nombre: 'enemigocielo8', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '60', posicionFinal:'', avance: '-1', nivel:'22',velocidad:'', },
    { nombre: 'enemigocielo9', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '48', posicionFinal:'', avance: '-1', nivel:'23',velocidad:'', },
    { nombre: 'enemigocielo10', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '49', posicionFinal:'', avance: '+1', nivel:'23',velocidad:'', },
    { nombre: 'enemigocielo11', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '13', posicionFinal:'', avance: '+1', nivel:'24',velocidad:'', },
    { nombre: 'enemigocielo12', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '48', posicionFinal:'', avance: '-1', nivel:'24',velocidad:'', },
    { nombre: 'enemigocielo13', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '60', posicionFinal:'', avance: '-1', nivel:'24',velocidad:'', },
    { nombre: 'enemigocielo14', imagen: '../Media/Images/Enemigos/enemigocielo.gif', posicionInicial: '73', posicionFinal:'', avance: '+1', nivel:'24',velocidad:'', },
    //-----------------------------------------------------------MUNDO CASINO------------------------------------------------------------------------
    { nombre: 'enemigocasino1', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '25', posicionFinal:'', avance: '+1', nivel:'25',velocidad:'', },
    { nombre: 'enemigocasino2', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '37', posicionFinal:'', avance: '+1', nivel:'25',velocidad:'', },
    { nombre: 'enemigocasino3', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '24', posicionFinal:'', avance: '-1', nivel:'26',velocidad:'', },
    { nombre: 'enemigocasino4', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '37', posicionFinal:'', avance: '+1', nivel:'26',velocidad:'', },
    { nombre: 'enemigocasino5', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '60', posicionFinal:'', avance: '-1', nivel:'26',velocidad:'', },
    { nombre: 'enemigocasino6', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '84', posicionFinal:'', avance: '-1', nivel:'26',velocidad:'', },
    { nombre: 'enemigocasino7', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '25', posicionFinal:'', avance: '+1', nivel:'27',velocidad:'', },
    { nombre: 'enemigocasino8', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '60', posicionFinal:'', avance: '-1', nivel:'27',velocidad:'', },
    { nombre: 'enemigocasino9', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '73', posicionFinal:'', avance: '+1', nivel:'27',velocidad:'', },
    { nombre: 'enemigocasino10', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '13', posicionFinal:'', avance: '+1', nivel:'28',velocidad:'', },
    { nombre: 'enemigocasino11', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '25', posicionFinal:'', avance: '+1', nivel:'28',velocidad:'', },
    { nombre: 'enemigocasino12', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '48', posicionFinal:'', avance: '-1', nivel:'28',velocidad:'', },
    { nombre: 'enemigocasino13', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '49', posicionFinal:'', avance: '+1', nivel:'28',velocidad:'', },
    { nombre: 'enemigocasino14', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '72', posicionFinal:'', avance: '-1', nivel:'28',velocidad:'', },
    { nombre: 'enemigocasino15', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '84', posicionFinal:'', avance: '-1', nivel:'28',velocidad:'', },
    { nombre: 'enemigocasino16', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '85', posicionFinal:'', avance: '+1', nivel:'28',velocidad:'', },
    { nombre: 'enemigocasino17', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '1',  posicionFinal:'', avance: '+1', nivel:'29',velocidad:'', },
    { nombre: 'enemigocasino18', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '13', posicionFinal:'', avance: '+1', nivel:'29',velocidad:'', },
    { nombre: 'enemigocasino19', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '25', posicionFinal:'', avance: '+1', nivel:'29',velocidad:'', },
    { nombre: 'enemigocasino20', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '48', posicionFinal:'', avance: '-1', nivel:'29',velocidad:'', },
    { nombre: 'enemigocasino21', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '60', posicionFinal:'', avance: '-1', nivel:'29',velocidad:'', },
    { nombre: 'enemigocasino22', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '61', posicionFinal:'', avance: '+1', nivel:'29',velocidad:'', },
    { nombre: 'enemigocasino23', imagen: '../Media/Images/Enemigos/enemigocasino.gif', posicionInicial: '73', posicionFinal:'', avance: '+1', nivel:'29',velocidad:'', },
    ]
};
var identificadorCiclo=[];

