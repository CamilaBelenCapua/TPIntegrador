const conn = require('./conn');
const DATABASE = 'tp_integrador';
const RESULTADOS = 'Alumnos';
const objectId = require('mongodb').ObjectId;

/*
async function getResultado(id){
    const connectiondb = await conn.getConnection();
    const exam = await connectiondb
                        .db(DATABASE)
                        .collection(RESULTADOS)
                        .findOne({_id: new objectId(id)
                        });
    return exam
}
async function agregarResultado(resultado){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                .db(DATABASE)
                .collection(RESULTADOS)
                .insertOne(resultado);
    return result;
}

async function actualizarResultado(resultado){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                .db(DATABASE)
                .collection(RESULTADOS)   
                .updateOne(resultado);
    return result;
}

async function borrarResultado(id){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                .db(DATABASE)
                .collection(RESULTADOS)
                .deleteOne({_id: new objectId(id)});
    return result;
}
*/

async function agregarResultadoAlumno(id, resultado){
        const connectiondb = await conn.getConnection();
        const alumno = await connectiondb
                            .db(DATABASE)
                            .collection(RESULTADOS)
                            .findOne({_id: new objectId(id)});

        alumno.results.push(resultado)
        const result = await connectiondb
                            .db(DATABASE)
                            .collection(RESULTADOS)
                            .updateOne({_id: new objectId(id)}, {$set: {results: alumno.results}});                        
        return result;
}

module.exports = {agregarResultadoAlumno};