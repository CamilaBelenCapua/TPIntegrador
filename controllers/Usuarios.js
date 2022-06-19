const usuarios = require('../data/Usuarios');

async function getAlumnoEmail(Email){    
    return usuarios.getAlumnoEmail(Email);
}

async function getAlumnoId(id){    
    return usuarios.getAlumnoId(id);
}

async function agregarAlumno(alumno){
    return usuarios.agregarAlumno(alumno);
}

async function agregarProfesor(profesor){
    return usuarios.agregarProfesor(profesor);
}

async function actualizarAlumno(alumno, id){
    return usuarios.actualizarAlumno(alumno, id);
}

async function borrarAlumno(id){    
    return usuarios.borrarAlumno(id);
}

async function getTodosAlumnos(){    
    return usuarios.getTodosAlumnos();
}

module.exports = {getAlumnoEmail, getAlumnoId, agregarAlumno, agregarProfesor, actualizarAlumno, borrarAlumno, getTodosAlumnos};