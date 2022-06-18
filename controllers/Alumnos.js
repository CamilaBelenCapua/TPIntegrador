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

async function actualizarAlumno(alumno, id){
    return alumnos.actualizarAlumno(alumno, id);
}

async function borrarAlumno(id){    
    return alumnos.borrarAlumno(id);
}

async function getTodosAlumnos(){    
    return alumnos.getTodosAlumnos();
}

module.exports = {getAlumnoEmail, getAlumnoId, agregarAlumno, actualizarAlumno, borrarAlumno, getTodosAlumnos};