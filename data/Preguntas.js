//const { json } = require('express/lib/response');
const conn = require('./conn');
const DATABASE = 'tp_integrador';
const PREGUNTAS = 'Preguntas';
const objectId = require('mongodb').ObjectId;

async function consultarPregunta(id){
    const connectiondb = await conn.getConnection();
    const pregunta = await connectiondb
                .db(DATABASE)
                .collection(PREGUNTAS)
                .find({_id: new objectId(id)})
                .toArray();    
    return pregunta;
}

async function agregarPregunta(pregunta){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                .db(DATABASE)
                .collection(PREGUNTAS)
                .insertOne(pregunta);
    return result;
}

async function actualizarPregunta(pregunta){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                .db(DATABASE)
                .collection(PREGUNTAS)
                .updateOne(pregunta);
    return result;
}

async function borrarPregunta(id){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                .db(DATABASE)
                .collection(PREGUNTAS)
                .deleteOne(find({_id: new objectId(id)}));
    return result;
}

module.exports = {consultarPregunta, agregarPregunta, actualizarPregunta, borrarPregunta};

