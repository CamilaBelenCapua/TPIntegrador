const express = require('express');
const router = express.Router();
const controller = require('../controllers/Examenes');

/* GET api/examenes/consultarExamen/:id */
router.get('/examenes/consultarExamen/:id', async (req, res) => {
    try{
        const examen = await controller.getExamen(req.params.id);
        res.status(200).json(examen);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* POST api/examenes/agregarExamen BODY -> DATOS */
router.post('/examenes/agregarExamen', async(req, res) => {
    try{
        const examen = res.json(await controller.agregarExamen(req.body));
        res.status(200).json(examen);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* PUT api/examenes/actualizarExamen/:id BODY -> DATOS */
router.put('/examenes/actualizarExamen/:id', async(req,res)=>{
    try{
        const examen = await controller.actualizarExamen(req.body, req.params.id);
        res.status(200).json(examen);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* DELETE api/examenes/borrarExamen/:id */
router.delete('/examenes/borrarExamen/:id', async(req,res)=>{
    try{
        const examen = await controller.borrarExamen(req.params.id);
        res.status(200).json(examen);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});


/* GET api/examenes/listarExamenes */
router.get('/examenes/listarExamenes', async (req, res) => {    
    try{
        const examenes = await controller.getTodosExamenes();
        res.status(200).json(examenes);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

module.exports = router;