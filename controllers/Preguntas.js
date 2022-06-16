const preguntas = require('../data/Preguntas');

async function getPregunta(id){    
    return preguntas.getPregunta(id);
}

async function agregarPregunta(pregunta){
    return preguntas.agregarPregunta(pregunta);
}

async function actualizarPregunta(pregunta){
    return preguntas.actualizarPregunta(pregunta);
}

async function borrarPregunta(id){    
    return preguntas.borrarPregunta(id);
}

module.exports = {getPregunta, agregarPregunta, actualizarPregunta, borrarPregunta};