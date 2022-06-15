//const { json } = require('express/lib/response');
const conn = require('./conn');
const DATABASE = 'tp_integrador';
const CURSOS = 'Cursos';
const objectId = require('mongodb').ObjectId;

async function getCursoId(id){
    const connectiondb = await conn.getConnection();
    const curso = await connectiondb
                        .db(DATABASE)
                        .collection(CURSOS)
                        .find({_id: new objectId(id)})
                        .toArray();    
    return curso;
}

async function agregarCurso(curso){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                        .db(DATABASE)
                        .collection(CURSOS)
                        .insertOne(curso);
    return result;
}

async function actualizarCurso(curso){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                        .db(DATABASE)
                        .collection(CURSOS)   
                        .updateOne(curso);
    return result;
}

async function borrarCurso(id){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                        .db(DATABASE)
                        .collection(CURSOS)
                        .deleteOne(find({_id: new objectId(id)}));
    return result;
}

async function getTodosCursos(){
    const connectiondb = await conn.getConnection();
    const cursos = await connectiondb
                        .db(DATABASE)
                        .collection(CURSOS)
                        .find({})
                        .toArray();    
    return cursos;
}

module.exports = {getCursoId, agregarCurso, actualizarCurso, borrarCurso, getTodosCursos};