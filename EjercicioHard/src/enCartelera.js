//EN CARTELERA
const movies = require('../data/movies');

const arrayNuevo = movies.map((pelicula) => {
    return {
        titulo:pelicula.title,
        resenia:pelicula.overview,
    };
});

const enCartelera = {
    titulo: '​En Cartelera.',
    totalDePeliculas: movies.lenght,
    listadoDePeliculas:arrayNuevo,
};
module.exports = {
    enCartelera
};