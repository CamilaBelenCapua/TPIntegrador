const express = require('express');
const router = express.Router();
const controller = require('../controllers/Cursos');


/* GET api/cursos/consultarCurso/:id */
router.get('/cursos/consultarCurso/:id ', async (req, res) => {
    try{
        res.json(await controller.getCursoId(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});


/* POST api/cursos/agregarCurso BODY -> DATOS */
router.post('/cursos/agregarCurso', async(req, res) => {
    try{
        res.json(await controller.agregarCurso(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});


/* PUT api/cursos/actualizarCurso BODY -> DATOS */
router.put('/cursos/actualizarCurso', async(req,res)=>{
    try{
        res.json(await controller.actualizarCurso(req.body));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});


/* DELETE api/cursos/borrarCurso/:id */
router.put('/cursos/borrarCurso/:id ', async(req,res)=>{
    try{
        res.json(await controller.borrarCurso(req.params.id));
    }catch(err){
        res.sendStatus(400).json(err)
    }
});

module.exports = router;