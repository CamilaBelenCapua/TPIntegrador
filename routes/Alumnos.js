var express = require('express');
var router = express.Router();
const controller = require('../controllers/Alumnos');

/* GET api/alumnos/consultarAlumnoPorMail/:email */
router.get('/alumnos/consultarAlumnoPorMail/:email', async (req, res) => {
    try{   
        res.json(await controller.getAlumnoEmail(req.params.email));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* GET api/alumnos/consultarAlumno/:id */
router.get('/alumnos/consultarAlumno/:id', async (req, res) => {
    try{
        res.json(await controller.getAlumnoId(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* POST api/alumnos/agregarAlumno BODY -> DATOS */
router.post('/alumnos/agregarAlumno', async(req, res) => {
    try{
        res.json(await controller.agregarAlumno(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* PUT api/alumnos/actualizarAlumno BODY -> DATOS */
router.put('/alumnos/actualizarAlumno', async(req,res)=>{
    try{
        res.json(await controller.actualizarAlumno(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

/* DELETE api/alumnos/borrarAlumno/:id */
router.delete('/alumnos/borrarAlumno/:id', async(req,res)=>{
    try{
        res.json(await controller.borrarAlumno(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

module.exports = router;
