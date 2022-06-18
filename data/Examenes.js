const conn = require('./conn');
const DATABASE = 'tp_integrador';
const EXAMENES = 'Examenes';
const objectId = require('mongodb').ObjectId;

async function getExamen(id){
    const connectiondb = await conn.getConnection();
    const examen = await connectiondb
                        .db(DATABASE)
                        .collection(EXAMENES)
                        .findOne({_id: new objectId(id)});    
    return examen;
}

async function agregarExamen(examen){
    const connectiondb = await conn.getConnection();
    const examenNuevo = {
        ...examen,
        date: new Date(),
        videos: [],
        questions: []
    }

    const result = await connectiondb
                        .db(DATABASE)
                        .collection(EXAMENES)
                        .insertOne(examenNuevo);
    return result;
}

async function actualizarExamen(examen, id){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(EXAMENES)
                        .updateOne({_id: new objectId(id)}, 
                                    {$set: {name: examen.name,
                                            amount: examen.amount}});
    return result;
}

async function borrarExamen(id){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(EXAMENES)
                        .deleteOne({_id: new objectId(id)});
    return result;
}

async function getTodosExamenes(){
    const connectiondb = await conn.getConnection();
    const examenes = await connectiondb
                        .db(DATABASE)
                        .collection(EXAMENES)
                        .find({})
                        .toArray();    
    return examenes;
}

/*

async function consultarSaldo(id){
    const connectiondb = await conn.getConnection();
    const exam = await connectiondb
                .db(DATABASE)
                .collection(EXAMENES)
                .findOne({_id: new objectId(id)});
    
    const estePago = exam.pago ? estePago = exam.pago : estePago = 0;
    const result = exam.cuota - estePago;
    return result;
}
*/

module.exports = {getExamen, agregarExamen, actualizarExamen, borrarExamen, getTodosExamenes};