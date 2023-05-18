function dificultad(min,max){
    localStorage.setItem('dificultadMin', min);
    localStorage.setItem('dificultadMax', max);
    location.href = '../HTML/Mapa.html'
}