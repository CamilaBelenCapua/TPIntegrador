const conn = require('./conn');
const DATABASE = 'tp_integrador';
const VIDEOS = 'Examenes';
const objectId = require('mongodb').ObjectId;


async function agregarVideosExamen(id, video){
    const connectiondb = await conn.getConnection();
    const examen = await connectiondb
                        .db(DATABASE)
                        .collection(VIDEOS)
                        .findOne({_id: new objectId(id)});
    
    if(!examen){
        throw new Error('No existe examen para ese id')
    }

    examen.videos.push(video)
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(VIDEOS)
                        .updateOne({_id: new objectId(id)}, {$set: {videos: examen.videos}});                        
    return result;
}

module.exports = {agregarVideosExamen};
