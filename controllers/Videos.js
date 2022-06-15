const videos = require('../data/Videos');

async function getVideo(id){    
    return videos.getVideo(id);
}

async function agregarVideo(video){
    return videos.agregarVideo(video);
}

async function actualizarVideo(video){
    return videos.actualizarVideo(video);
}

async function borrarVideo(id){    
    return videos.borrarVideo(id);
}

module.exports = {getVideo, agregarVideo, actualizarVideo, borrarVideo};
