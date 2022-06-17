var express = require('express');
var router = express.Router();
const controller = require('../controllers/Resultados');

/* GET api/resultados/consultarResultado/:id */
router.get('/resultados/consultarResultado/:id', async (req, res) => {
    try{   
        res.json(await controller.getResultado(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* POST api/resultados/agregarResultado BODY -> DATOS */
router.post('/resultados/agregarResultado', async(req, res) => {
    try{
        res.json(await controller.agregarResultado(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* PUT api/resultados/actualizarResultado BODY -> DATOS */
router.put('/resultados/actualizarResultado', async(req,res)=>{
    try{
        res.json(await controller.actualizarResultado(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* DELETE api/resultados/borrarResultado/:id */
router.delete('/resultados/borrarResultado/:id', async(req,res)=>{
    try{
        res.json(await controller.borrarResultado(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

module.exports = router;