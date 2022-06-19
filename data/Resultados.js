const conn = require('./conn');
const DATABASE = 'tp_integrador';
const RESULTADOS = 'Usuarios';
const objectId = require('mongodb').ObjectId;

async function agregarResultadoAlumno(id, resultado){
        const connectiondb = await conn.getConnection();
        const usuario = await connectiondb
                            .db(DATABASE)
                            .collection(RESULTADOS)
                            .findOne({_id: new objectId(id)});
        
        if(!usuario || !(usuario.rol === 'alumno')){
            throw new Error('No existe alumno para ese id')
        }
        usuario.results.push(resultado)
        const result = await connectiondb
                            .db(DATABASE)
                            .collection(RESULTADOS)
                            .updateOne({_id: new objectId(id)}, {$set: {results: usuario.results}});                        
        return result;
}

module.exports = {agregarResultadoAlumno};