var express = require('express');
var router = express.Router();
const controller = require('../controllers/Videos');

/* GET api/videos/consultarVideo/:id */
router.get('/videos/consultarVideo/:id', async (req, res) => {
    try{  
        res.json(await controller.getVideo(req.params.id));}
    catch(err){
        res.sendStatus(400).json(err)
    }
});

/* POST api/videos/agregarVideo BODY -> DATOS */
router.post('/videos/agregarVideo', async(req, res) => {
    try{  
        res.json(await controller.agregarVideo(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* PUT api/videos/actualizarVideo BODY -> DATOS */
router.put('/videos/actualizarVideo/:id', async(req,res)=>{
    try{  
        res.json(await controller.actualizarVideo(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* DELETE api/videos/borrarVideo:id */
router.put('/videos/borrarVideo/:id', async(req,res)=>{
    try{  
        res.json(await controller.borrarVideo(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

module.exports = router;