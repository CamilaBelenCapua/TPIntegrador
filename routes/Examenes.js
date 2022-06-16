var express = require('express');
var router = express.Router();
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

/* PUT api/examenes/actualizarExamen BODY -> DATOS */
router.put('/examenes/actualizarExamen', async(req,res)=>{
    try{
        res.json(await controller.actualizarExamen(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* DELETE api/examenes/borrarExamen:id */
router.delete('/examenes/borrarExamen/:id', async(req,res)=>{
    try{
        res.json(await controller.borrarExamen(req.params.id));
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

/* PUT api/examenes/actualizarNota/:email */

/* PUT api/examenes/actualizarPago/:id_alumno  BODY -> el monto que paga */

module.exports = router;