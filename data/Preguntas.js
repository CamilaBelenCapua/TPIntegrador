const conn = require('./conn');
const DATABASE = 'tp_integrador';
const PREGUNTAS = 'Preguntas';
const objectId = require('mongodb').ObjectId;

async function getPregunta(id){
    const connectiondb = await conn.getConnection();
    const pregunta = await connectiondb
                    .db(DATABASE)
                    .collection(PREGUNTAS)
                    .find({_id: new objectId(id)})
                    .toArray();    
    return pregunta;
}

async function agregarPregunta(pregunta){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                    .db(DATABASE)
                    .collection(PREGUNTAS)
                    .insertOne(pregunta);
    return result;
}

async function actualizarPregunta(pregunta){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                    .db(DATABASE)
                    .collection(PREGUNTAS)
                    .updateOne(pregunta);
    return result;
}

async function borrarPregunta(id){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                    .db(DATABASE)
                    .collection(PREGUNTAS)
                    .deleteOne({_id: new objectId(id)});
    return result;
}

module.exports = {getPregunta, agregarPregunta, actualizarPregunta, borrarPregunta};

