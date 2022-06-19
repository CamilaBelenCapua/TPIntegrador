const usuarios = require('../data/Usuarios');

async function getUsuarioByEmail(Email){    
    return usuarios.getUsuarioByEmail(Email);
}

async function getUsuarioById(id){    
    return usuarios.getUsuarioById(id);
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

module.exports = {getUsuarioByEmail, getUsuarioById, agregarAlumno, agregarProfesor, actualizarAlumno, borrarAlumno, getTodosAlumnos};