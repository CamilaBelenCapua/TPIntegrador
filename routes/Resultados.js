var express = require('express');
var router = express.Router();
const controller = require('../controllers/Resultados');
const auth = require('../middleware/auth');

/* PUT api/resultados/agregarResultadosAlumno/:id BODY -> DATOS */
router.put('/resultados/agregarResultadosAlumno/:id',auth, async(req, res) => {
    try{
        const alumno = await controller.agregarResultadoAlumno(req.params.id, req.body)
        res.status(200).json(alumno);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

module.exports = router;