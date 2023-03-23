var niveles = {
    'personajes': [{ nombre: 'Jesus', imagenParada: '../Media/Images/Personajes/jesus.png', imagenMovimiento: '', posicionX: '', posicionY: '' },
    { nombre: 'Juanma', imagenParada: '../Media/Images/Personajes/juanma.png', imagenMovimiento: '', posicionX: '', posicionY: '' },
    { nombre: 'Rana', imagenParada: '../Media/Images/Personajes/Rana.png', imagenMovimiento: '../Media/Images/Personajes/RanaMovimineto.gif', posicionX: '', posicionY: '' }],

    'escenarios': [{ 
    //-------------------------------------------------------------------MUNDO LAVA------------------------------------------------------------------------------
    nombre: 'lava1', nivel: '1', imagen: '../Media/Images/MundoLava/mapalava1.png', 
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
    //----------------------------------------------------------------MUNDO DESIERTO----------------------------------------------------------------------------
    { nombre:'desierto1', nivel:'1', imagen:'../Media/Images/MundoDesierto/mapadesierto1.png',
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
    //----------------------------------------------------------------MUNDO BOSQUE----------------------------------------------------------------------------
    { nombre:'bosque1', nivel:'1', imagen:'../Media/Images/MundoBosque/mapabosque1.png',
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
    '20','21','22','23','24','25','26','27','28','29','32','33','34','35','36',
    '49','50','51','52','53','56','57','58','59','60','61','62','63','64','65',
    '68','69','70','71','72','73','74','75','76','77','80','81','82','83','84',
    '85','86','87','88','89','92','93','94','95','96',]},
    { nombre:'bosque2', nivel:'2', imagen:'../Media/Images/MundoBosque/mapabosque2.png',
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
    '20','21','22','23','24','37','38','39','40','41','44','45','46','47','48',
    '73','74','75','76','77','80','81','82','83','84','85','86','87','88','89',
    '92','93','94','95','96',]},
    { nombre:'bosque3', nivel:'3', imagen:'../Media/Images/MundoBosque/mapabosque3.png',
    limite:['1','2','3','4','5','8','9','10','11','12','25','26','27','28','29',
    '32','33','34','35','36','49','50','51','52','53','56','57','58','59','60',
    '61','62','63','64','65','68','69','70','71','72','85','86','87','88','89',
    '92','93','94','95','96',]},
    { nombre:'bosque4', nivel:'4', imagen:'../Media/Images/MundoBosque/mapabosque4.png',
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
    '20','21','22','23','24','49','50','51','52','53','56','57','58','59','60',
    '61','62','63','64','65','68','69','70','71','72',]},
    { nombre:'bosque5', nivel:'5', imagen:'../Media/Images/MundoBosque/mapabosque5.png',
    limite:['1','2','3','4','5','8','9','10','11','12','13','14','15','16','17',
    '20','21','22','23','24','61','62','63','64','65','68','69','70','71','72',
    '73','74','75','76','77','80','81','82','83','84',]},
    { nombre:'', nivel:'', imagen:'',limite:[]},
    ],

    'enemigos': [{ nombre: '', imagen: '', posicionX: '', posicionY: ''  },
    { nombre: '', imagen: '', posicionX: '', posicionY: '' },
    { nombre: '', imagen: '', posicionX: '', posicionY: ''  },]
}
