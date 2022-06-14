const alumnos = require('../data/Alumnos');

async function getAlumnoEmail(Email){    
    return alumnos.getAlumnoEmail(Email);
}

async function getAlumnoId(id){    
    return alumnos.getAlumnoId(id);
}

async function agregarAlumno(alumno){
    return alumnos.agregarAlumno(alumno);
}
async function actualizarAlumno(alumno){
    return alumnos.actualizarAlumno(alumno);
}
async function borrarAlumno(id){    
    return alumnos.borrarAlumno(id);
}

module.exports = {getAlumnoEmail, getAlumnoId, agregarAlumno, actualizarAlumno, borrarAlumno};