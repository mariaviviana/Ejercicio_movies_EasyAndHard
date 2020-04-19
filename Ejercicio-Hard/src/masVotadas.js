//MAS VOTADAS
const movies = require('../data/movies');

let masVotos = movies.filter(function(pelicula){
    if (pelicula.vote_average >= 7){
        return true;
    }else{
        return false
     }
});

let sumaTotal = masVotos.reduce(function(acum,pelicula){
    return acum + pelicula.vote_average;
}, 0);

let promedio = sumaTotal/masVotos.length;

let arrayMasVotadas = masVotos.map(function(pelicula){
    return{
        titulo: pelicula.title,
        rating: pelicula.vote_average,
        resenia: pelicula.overview,
    }
});

const masVotadas = {
    titulo: '​Más Votadas.',
    totalDePeliculas: masVotos.length,
    ratingPromedio: promedio,
    listadoDePeliculas: arrayMasVotadas,
};
module.exports = {
    masVotadas
};
