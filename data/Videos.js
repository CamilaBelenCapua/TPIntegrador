//const { json } = require('express/lib/response');
const conn = require('./conn');
const DATABASE = 'tp_integrador';
const VIDEOS = 'Videos';
const objectId = require('mongodb').ObjectId;

async function consultarVideo(id){
    const connectiondb = await conn.getConnection();
    const video = await connectiondb
                .db(DATABASE)
                .collection(VIDEOS)
                .find({_id: new objectId(id)})
                .toArray();    
    return video;
}

async function agregarVideo(video){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                .db(DATABASE)
                .collection(VIDEOS)
                .insertOne(video);
    return result;
}

async function actualizarVideo(video){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                .db(DATABASE)
                .collection(VIDEOS)
                .updateOne(video);
    return result;
}

async function borrarVideo(id){
    const clientMongo = await connection.getConnection();
    const result = await clientMongo
                .db(DATABASE)
                .collection(VIDEOS)
                .deleteOne(find({_id: new objectId(id)}));
    return result;
}

module.exports = {consultarVideo, agregarVideo, actualizarVideo, borrarVideo};
