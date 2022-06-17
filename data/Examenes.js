const conn = require('./conn');
const DATABASE = 'tp_integrador';
const EXAMENES = 'Examenes';
const objectId = require('mongodb').ObjectId;

async function getExamen(id){
    const connectiondb = await conn.getConnection();
    const examen = await connectiondb
                        .db(DATABASE)
                        .collection(EXAMENES)
                        .find({_id: new objectId(id)})
                        .toArray();    
    return examen;
}

async function agregarExamen(examen){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(EXAMENES)
                        .insertOne(examen);
    return result;
}

async function actualizarExamen(examen, id){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(EXAMENES)
                        .updateOne({_id: new objectId(id)}, {$set: {name: examen.name}});
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
    const examen = await connectiondb
                        .db(DATABASE)
                        .collection(EXAMENES)
                        .find({})
                        .toArray();    
    return examen;
}

async function consultarSaldo(id){
    const connectiondb = await conn.getConnection();
    const exam = await connectiondb
                .db(DATABASE)
                .collection(EXAMENES)
                .find({_id: new objectId(id)})
                .toArray();
    const estePago = exam.pago ? estePago = exam.pago : estePago = 0;
    const result = exam.cuota - estePago;
    return result;
}


module.exports = {getExamen, agregarExamen, actualizarExamen, borrarExamen, getTodosExamenes, consultarSaldo};