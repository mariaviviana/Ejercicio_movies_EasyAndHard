//PREGUNTAS FRECUENTES
const faqs = require('../data/faqs');

let preguntasFrecuentes = {
    titulo: '​Preguntas Frecuentes.',
    totalDePreguntas: faqs.length,
    listado: faqs,
};
module.exports = {
    preguntasFrecuentes
};