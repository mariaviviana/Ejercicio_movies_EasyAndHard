//ROUTE SYSTEM
const {home} = require('./src/homePage');
const {enCartelera} = require('./src/enCartelera');
const {masVotadas} = require('./src/masVotadas');
const {sucursales} = require('./src/sucursales');
const {contacto} = require('./src/contacto');
const {preguntasFrecuentes} = require('./src/preguntasFrecuentes');

function routers(req,res) {
switch (req.url) {
    // Home
    case '/':
        res.end(JSON.stringify(home));
        break;
    // En cartelera
    case '/en-cartelera':
        res.end(JSON.stringify(enCartelera));
        break;
        //Mas votadas
    case '/mas-votadas':
        res.end(JSON.stringify(masVotadas));
        break;
        //sucursales
    case '/sucursales':
        res.end(JSON.stringify(sucursales));
        break;
        //contacto
    case '/contacto':
        res.end(JSON.stringify(contacto));
        break;
        //preguntas frecuentes
    case '/preguntas-frecuentes':
        res.end(JSON.stringify(preguntasFrecuentes));
        break;
    default:
        res.end('404 not found')
};
}
module.exports = {
    routers
};