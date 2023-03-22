var texto='';
function vectorizar(parametro){
   
    texto +="'"+parametro+"',"
    document.getElementById('texto').innerHTML = texto
}

function limpiarTexto(){
texto = ""
document.getElementById('texto').innerHTML = texto
}