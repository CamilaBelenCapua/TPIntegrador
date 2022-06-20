const examenes = require('../data/Examenes');

async function getExamen(id){    
    return examenes.getExamen(id);
}

async function agregarExamen(examen){
    return examenes.agregarExamen(examen);
}

async function actualizarExamen(examen, id){
    return examenes.actualizarExamen(examen, id);
}

async function borrarExamen(id){    
    return examenes.borrarExamen(id);
}

async function getTodosExamenes(){    
    return examenes.getTodosExamenes();
}

module.exports = {getExamen,agregarExamen,actualizarExamen,borrarExamen, getTodosExamenes};