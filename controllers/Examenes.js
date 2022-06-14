const examenes = require('../data/Examenes');

async function getExamen(id){    
    return examenes.getExamen(id);
}

async function agregarExamen(examen){
    return examenes.agregarExamen(examen);
}
async function actualizarExamen(examen){
    return examenes.actualizarExamen(examen);
}
async function borrarExamen(id){    
    return examenes.borrarExamen(id);
}
async function consultarSaldo(id){    
    return examenes.consultarSaldo(id);
}


module.exports = {getExamen, agregarExamen, actualizarExamen, borrarExamen, consultarSaldo};