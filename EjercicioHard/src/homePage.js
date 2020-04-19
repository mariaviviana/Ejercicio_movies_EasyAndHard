//HOME
const movies = require('../data/movies');

let totalPelis = movies.length;

let pelisOrdenadas= movies.sort(function(a, b){
    if(a.title < b.title) { return -1; }
    if(a.title > b.title) { return 1; }
    return 0;
});

const home = {
    titulo:'​Bienvenidos a DH Movies el mejor sitio para encontrar las mejores películas, incluso mucho mejor que Netflix, Cuevana y PopCorn​.',
    totalDePeliculasEnCartelera: totalPelis,
    listadoDePeliculas: pelisOrdenadas,
    pieDePagina: `​Recordá que podés visitar las secciones:
    i. En Cartelera
    ii. Más Votadas
    iii. Sucursales
    iv. Contacto
    v. Preguntas Frecuentes`,
};
module.exports = {
    home
};