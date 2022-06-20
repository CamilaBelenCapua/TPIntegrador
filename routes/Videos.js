var express = require('express');
var router = express.Router();
const controller = require('../controllers/Videos');
const {auth} = require('../middleware/auth');
const checkRols = require('../middleware/checkRol');

/* PUT api/videos/agregarVideosExamen/:id BODY -> DATOS */
router.put('/videos/agregarVideosExamen/:id',auth,checkRols.checkRols('profesor'), async(req, res) => {
    try{
        const video = await controller.agregarVideosExamen(req.params.id, req.body);
        res.status(200).json(video);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

module.exports = router;