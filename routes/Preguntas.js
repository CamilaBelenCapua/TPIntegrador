var express = require('express');
var router = express.Router();
const controller = require('../controllers/Preguntas');

/* GET api/preguntas/consultarPregunta/:id */
router.get('/preguntas/consultarPregunta/:id', async (req, res) => {
    try{  
        res.json( await controller.getPregunta(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* POST api/preguntas/agregarPregunta BODY -> DATOS */
router.post('/preguntas/agregarPregunta', async(req, res) => {
    try{  
        res.json(await controller.agregarPregunta(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* PUT api/preguntas/actualizarPregunta BODY -> DATOS */
router.put('/preguntas/actualizarPregunta/:id', async(req,res)=>{
    try{  
        res.json(await controller.actualizarPregunta(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* DELETE api/preguntas/borrarPregunta:id */
router.put('/preguntas/borrarPregunta/:id', async(req,res)=>{
    try{  
        res.json(await controller.borrarPregunta(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

module.exports = router;