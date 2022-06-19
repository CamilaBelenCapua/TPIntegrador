var express = require('express');
var router = express.Router();
const controller = require('../controllers/Preguntas');

/* PUT api/preguntas/agregarPreguntasExamen/:id BODY -> DATOS */
router.put('/preguntas/agregarPreguntasExamen/:id', async(req, res) => {
    try{
        const preguntas = await controller.agregarPreguntasExamen(req.params.id, req.body);
        res.status(200).json(preguntas);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

module.exports = router;