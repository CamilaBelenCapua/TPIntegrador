const express = require('express');
const router = express.Router();
const controller = require('../controllers/Examenes');

/* GET api/examenes/consultarExamen/:id */
router.get('/examenes/consultarExamen/:id', async (req, res) => {
    try{
        res.json(await controller.getExamen(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* POST api/examenes/agregarExamen BODY -> DATOS */
router.post('/examenes/agregarExamen', async(req, res) => {
    try{
        res.json(await controller.agregarExamen(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* PUT api/examenes/actualizarExamen/:id BODY -> DATOS */
router.put('/examenes/actualizarExamen/:id', async(req,res)=>{
    try{
        res.json(await controller.actualizarExamen(req.body, req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* DELETE api/examenes/borrarExamen/:id */
router.delete('/examenes/borrarExamen/:id', async(req,res)=>{
    try{
        res.json(await controller.borrarExamen(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/// ** APIS ESPECIALES ** ///

/* GET api/examenes/listarExamenes */
router.get('/examenes/listarExamenes', async (req, res) => {    
    try{
        res.json(await controller.getTodosExamenes());
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/// ** APIS ESPECIALES ** ///

/* GET api/examenes/consultarSaldo/:id_Examen */
router.get('/examenes/consultarSaldo/:id', async (req, res) => {
    try{
        res.json(await controller.consultarSaldo(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* GET api/examenes/consultarCursoPago/:idAlumno
	Filtra los exámenes que tengan el idAlumno como el del parámetro
	
PUT api/resultados/actualizarPago/:id_Examen  BODY -> el monto que paga
	Actualiza el monto pago del examen ubicado por el id enviado

PUT api/examenes/actualizarNota/:id_Examen
	Actualiza la nota del Examen */


module.exports = router;