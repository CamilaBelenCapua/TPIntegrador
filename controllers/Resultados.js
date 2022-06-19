const resultados = require('../data/Resultados');

async function agregarResultadoAlumno(id, resultado){
    return resultados.agregarResultadoAlumno(id, resultado);
}

module.exports = {agregarResultadoAlumno};