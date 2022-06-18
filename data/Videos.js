const conn = require('./conn');
const DATABASE = 'tp_integrador';
const VIDEOS = 'Examenes';
const objectId = require('mongodb').ObjectId;

/*
async function getVideo(id){
    const connectiondb = await conn.getConnection();
    const video = await connectiondb
                .db(DATABASE)
                .collection(VIDEOS)
                .find({_id: new objectId(id)})
                .toArray();    
    return video;
}

async function agregarVideo(video){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                .db(DATABASE)
                .collection(VIDEOS)
                .insertOne(video);
    return result;
}

async function actualizarVideo(video){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                .db(DATABASE)
                .collection(VIDEOS)
                .updateOne(video);
    return result;
}

async function borrarVideo(id){
    const connectiondb = await conn.getConnection();
    const result = await connectiondb
                .db(DATABASE)
                .collection(VIDEOS)
                .deleteOne({_id: new objectId(id)});
    return result;
}
*/

async function agregarVideosExamen(id, video){
    const connectiondb = await conn.getConnection();
    const examen = await connectiondb
                        .db(DATABASE)
                        .collection(VIDEOS)
                        .findOne({_id: new objectId(id)});

    examen.videos.push(video)
    const result = await connectiondb
                        .db(DATABASE)
                        .collection(VIDEOS)
                        .updateOne({_id: new objectId(id)}, {$set: {videos: examen.videos}});                        
    return result;
}

module.exports = {agregarVideosExamen};
