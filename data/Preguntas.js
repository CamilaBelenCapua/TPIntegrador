const conn = require('./conn');
const DATABASE = 'tp_integrador';
const PREGUNTAS = 'Examenes';
const objectId = require('mongodb').ObjectId;

async function agregarPreguntasExamen(id, pregunta){
    const connectiondb = await conn.getConnection();
    const examen = await connectiondb
                        .db(DATABASE)
                        .collection(PREGUNTAS)
                        .findOne({_id: new objectId(id)});
                        
    if(!examen){
        throw new Error('No existe examen para ese id')
    }

    examen.questions.push(pregunta)
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(PREGUNTAS)
                        .updateOne({_id: new objectId(id)}, {$set: {questions: examen.questions}});                        
    return result;
}

module.exports = {agregarPreguntasExamen};

