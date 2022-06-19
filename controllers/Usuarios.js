const usuarios = require('../data/Usuarios');
const jwt = require('jsonwebtoken');

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

async function findByCredential(Email, password){
    return usuarios.findByCredentials(Email, password);
}

async function generateAuthToken(usuarios){
    const token = jwt.sign({_id: usuarios._id}, process.env.SECRET, {expiresIn: '2h'});
    return token;
}

module.exports = {findByCredential, generateAuthToken, getUsuarioByEmail, getUsuarioById, agregarAlumno, 
                    agregarProfesor, actualizarAlumno, borrarAlumno, getTodosAlumnos};