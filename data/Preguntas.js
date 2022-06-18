const conn = require('./conn');
const DATABASE = 'tp_integrador';
const PREGUNTAS = 'Examenes';
const objectId = require('mongodb').ObjectId;

/*
async function getPregunta(id){
    const connectiondb = await conn.getConnection();
    const pregunta = await connectiondb
                    .db(DATABASE)
                    .collection(PREGUNTAS)
                    .findOne({_id: new objectId(id)});  
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
*/

async function agregarPreguntasExamen(id, pregunta){
    console.log('PASO')
    const connectiondb = await conn.getConnection();
    const examen = await connectiondb
                        .db(DATABASE)
                        .collection(PREGUNTAS)
                        .findOne({_id: new objectId(id)});

    examen.preguntas.push(pregunta)
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(PREGUNTAS)
                        .updateOne({_id: new objectId(id)}, {$set: {preguntas: examen.preguntas}});                        
    return result;
}

module.exports = {agregarPreguntasExamen};

