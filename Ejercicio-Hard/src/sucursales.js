//SUCURSALES
const theaters = require('../data/theaters');

let salasTotales = theaters.reduce(function(acum,sala){
    return acum + sala.total_rooms;
},0);

let listaSucursales = theaters.map(function(sala){
    return{
        nombre: sala.name,
        direccion: sala.address,
        descripcion: sala.description,
    }
});

const sucursales = {
    titulo: 'Nuestras Salas.',
    totalDeSalas: salasTotales,
    listadoDeSalas: listaSucursales,
};
module.exports = {
    sucursales
};