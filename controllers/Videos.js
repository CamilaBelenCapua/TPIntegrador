const videos = require('../data/Videos');

/*
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
*/

async function agregarVideosExamen(id, video){
    return videos.agregarVideosExamen(id, video);
}

module.exports = {agregarVideosExamen};
