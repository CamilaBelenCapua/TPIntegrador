var express = require('express');
var router = express.Router();
const controller = require('../controllers/Videos');

/* PUT api/videos/agregarVideosExamen/:id BODY -> DATOS */
router.put('/videos/agregarVideosExamen/:id', async(req, res) => {
    try{
        const video = await controller.agregarVideosExamen(req.params.id, req.body);
        res.status(200).json(video);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

module.exports = router;