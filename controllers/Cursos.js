const cursos = require('../data/Cursos');

async function getCursoId(id){    
    return cursos.getCursoId(id);
}

async function agregarCurso(curso){
    return cursos.agregarCurso(curso);
}
async function actualizarCurso(curso){
    return cursos.actualizarCurso(curso);
}
async function borrarCurso(id){    
    return cursos.borrarCurso(id);
}

module.exports = {getCursoId,agregarCurso,actualizarCurso,borrarCurso};