//const { json } = require('express/lib/response');
const conn = require('./conn');
const DATABASE = 'tp_integrador';
const ALUMNOS = 'Alumnos';
const objectId = require('mongodb').ObjectId;

async function getAlumnoEmail(email){
    const connectiondb = await conn.getConnection();
    const alumno = await connectiondb
                        .db(DATABASE)
                        .collection(ALUMNOS)
                        .find({email: email})
                        .toArray();    
    return alumno;
}

async function getAlumnoId(id){
    const connectiondb = await conn.getConnection();
    const alumno = await connectiondb
                        .db(DATABASE)
                        .collection(ALUMNOS)
                        .find({_id: new objectId(id)})
                        .toArray();    
    return alumno;
}

async function agregarAlumno(alumno){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(ALUMNOS)
                        .insertOne(alumno);
    return result;
}

async function actualizarAlumno(alumno){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(ALUMNOS)   
                        .updateOne(alumno);
    return result;
}

async function borrarAlumno(id){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(ALUMNOS)
                        .deleteOne({_id: new objectId(id)});
    return result;
}

module.exports = {getAlumnoEmail, getAlumnoId, agregarAlumno, actualizarAlumno, borrarAlumno};