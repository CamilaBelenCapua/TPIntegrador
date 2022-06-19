const preguntas = require('../data/Preguntas');

async function agregarPreguntasExamen(id, pregunta){
    return preguntas.agregarPreguntasExamen(id, pregunta);
}

module.exports = {agregarPreguntasExamen};