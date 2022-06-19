const videos = require('../data/Videos');

async function agregarVideosExamen(id, video){
    return videos.agregarVideosExamen(id, video);
}

module.exports = {agregarVideosExamen};
