const conn = require('./conn');
const DATABASE = 'tp_integrador';
const ALUMNOS = 'Alumnos';
const objectId = require('mongodb').ObjectId;
const bcrypt = require('bcrypt');

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
                        .findOne({_id: new objectId(id)});     
    return alumno;
}

async function agregarAlumno(alumno){
    const connectiondb = await conn.getConnection();
    alumno.password = await bcrypt.hash(alumno.password, 8);
    const alumnoNuevo = {
        ...alumno,
        results: [],
        rol: 'alumno'
    }

    const result = await connectiondb
                        .db(DATABASE)
                        .collection(ALUMNOS)
                        .insertOne(alumnoNuevo);
    return result;
}

async function agregarProfesor(profesor){
    const connectiondb = await conn.getConnection();
    profesor.password = await bcrypt.hash(profesor.password, 8);
    const profesorNuevo = {
        ...profesor,
        results: [],
        rol: 'profesor'
    }

    const result = await connectiondb
                        .db(DATABASE)
                        .collection(ALUMNOS)
                        .insertOne(profesorNuevo);
    return result;
}

async function actualizarAlumno(alumno, id){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(ALUMNOS)
                        .updateOne({_id: new objectId(id)}, 
                                    {$set: {name: alumno.name, 
                                            email: alumno.email, 
                                            password: await bcrypt.hash(alumno.password, 8),
                                            phone: alumno.phone}});
    return result;
}

async function borrarAlumno(id){
    const connectiondb = await conn.getConnection();
    let result = false;
    const alumno = await connectiondb
                        .db(DATABASE)
                        .collection(ALUMNOS)
                        .findOne({_id: new objectId(id)});
    
        if(alumno !== null && alumno.rol === alumno){
            deleted = deleteOne({_id: new objectId(id)});
        }

        if(deleted.deletedCount === 1){
            result = true;
        }                             
    return result;
}

async function getTodosAlumnos(){
    const connectiondb = await conn.getConnection();
    const alumnos = await connectiondb
                        .db(DATABASE)
                        .collection(ALUMNOS)
                        .find({})
                        .toArray();    
    return alumnos;
}

module.exports = {getAlumnoEmail, getAlumnoId, agregarAlumno, agregarProfesor, actualizarAlumno, borrarAlumno, getTodosAlumnos};