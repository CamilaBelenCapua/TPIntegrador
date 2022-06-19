const conn = require('./conn');
const DATABASE = 'tp_integrador';
const USUARIOS = 'Usuarios';
const objectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');


async function findByCredentials(email, password){
    const connectiondb = await conn.getConnection();
    const usuario = await connectiondb
                        .db(DATABASE)
                        .collection(USUARIOS)
                        .findOne({email: email});
    if(!usuario){
        throw new Error('Credenciales no validas');
    }

    const isMatch = await bcrypt.compare(password, usuario.password);
    
    if(!isMatch){
        throw new Error('Credenciales no validas');
    }
    return usuario;
}

async function getUsuarioByEmail(email){
    const connectiondb = await conn.getConnection();
    const usuario = await connectiondb
                        .db(DATABASE)
                        .collection(USUARIOS)
                        .find({email: email})
                        .toArray(); 
    return usuario;
}

async function getUsuarioById(id){
    const connectiondb = await conn.getConnection();
    const usuario = await connectiondb
                        .db(DATABASE)
                        .collection(USUARIOS)
                        .findOne({_id: new objectId(id)});   
    return usuario;
}

async function agregarAlumno(alumno){
    const connectiondb = await conn.getConnection();
    alumno.password = await bcrypt.hash(alumno.password, 8);
    const alumnoNuevo = {
        ...alumno,
        rol: 'alumno',
        results: []
    }
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(USUARIOS)
                        .insertOne(alumnoNuevo);
    return result;
}

async function agregarProfesor(profesor){
    const connectiondb = await conn.getConnection();
    profesor.password = await bcrypt.hash(profesor.password, 8);
    const profesorNuevo = {
        ...profesor,
        rol: 'profesor',
        results: []
    }
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(USUARIOS)
                        .insertOne(profesorNuevo);
    return result;
}

async function actualizarAlumno(alumno, id){
    const connectiondb = await conn.getConnection();
    const usuario = await getUsuarioById(id)

    if(!usuario || !(usuario.rol === 'alumno')){
        throw new Error('No existe alumno para ese id')
    }
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(USUARIOS)
                        .updateOne({_id: new objectId(id)}, 
                                    {$set: {name: alumno.name, 
                                            email: alumno.email, 
                                            password: await bcrypt.hash(alumno.password, 8),
                                            phone: alumno.phone}});
    return result;
}

async function borrarAlumno(id){
    const connectiondb = await conn.getConnection();
    const usuario = await getUsuarioById(id)
    if(!usuario || !(usuario.rol === 'alumno')){
        throw new Error('No existe alumno para ese id')
    }
    return await connectiondb
                .db(DATABASE)
                .collection(USUARIOS)
                .deleteOne({_id: new objectId(id)});
}

async function getTodosAlumnos(){
    const connectiondb = await conn.getConnection();
    const usuarios = await connectiondb
                        .db(DATABASE)
                        .collection(USUARIOS)
                        .find({rol: 'alumno'})
                        .toArray();    
    return usuarios;
}

module.exports = {findByCredentials, getUsuarioByEmail, getUsuarioById, agregarAlumno, agregarProfesor, 
                    actualizarAlumno, borrarAlumno, getTodosAlumnos};