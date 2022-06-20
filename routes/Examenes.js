const express = require('express');
const router = express.Router();
const controller = require('../controllers/Examenes');
const {auth} = require('../middleware/auth');
const checkRols = require('../middleware/checkRol');

/* GET api/examenes/consultarExamen/:id */
router.get('/examenes/consultarExamen/:id', auth, async (req, res) => {
    try{
        const examen = await controller.getExamen(req.params.id);
        res.status(200).json(examen);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* POST api/examenes/agregarExamen BODY -> DATOS */
router.post('/examenes/agregarExamen',auth,checkRols.checkRols('profesor'), async(req, res) => {
    try{
        const examen = res.json(await controller.agregarExamen(req.body));
        res.status(200).json(examen);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* PUT api/examenes/actualizarExamen/:id BODY -> DATOS */
router.put('/examenes/actualizarExamen/:id',auth,checkRols.checkRols('profesor'), async(req,res)=>{
    try{
        const examen = await controller.actualizarExamen(req.body, req.params.id);
        res.status(200).json(examen);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* DELETE api/examenes/borrarExamen/:id */
router.delete('/examenes/borrarExamen/:id',auth,checkRols.checkRols('profesor'), async(req,res)=>{
    try{
        const examen = await controller.borrarExamen(req.params.id);
        res.status(200).json(examen);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* GET api/examenes/listarExamenes */
router.get('/examenes/listarExamenes',auth,checkRols.checkRols('profesor'), async (req, res) => {    
    try{
        const examenes = await controller.getTodosExamenes();
        res.status(200).json(examenes);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

module.exports = router;