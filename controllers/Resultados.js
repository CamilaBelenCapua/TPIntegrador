const resultados = require('../data/Resultados');

/*
async function getResultado(id){    
    return resultados.getResultado(id);
}

async function agregarResultado(resultado){
    return resultados.agregarResultado(resultado);
}
async function actualizarResultado(resultado){
    return resultados.actualizarResultado(resultado);
}
async function borrarResultado(id){    
    return resultados.borrarResultado(id);
}
*/

async function agregarResultadoAlumno(id, resultado){
    return resultados.agregarResultadoAlumno(id, resultado);
}


module.exports = {agregarResultadoAlumno};