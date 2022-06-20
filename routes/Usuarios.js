var express = require('express');
var router = express.Router();
const controller = require('../controllers/Usuarios');
const {auth} = require('../middleware/auth');
const checkRols = require('../middleware/checkRol');

// POST api/usuarios/login
router.post('/usuarios/login', async (req, res) => {
    try {
        const usuario = await controller.findByCredential(req.body.email, req.body.password);
        const token = await controller.generateAuthToken(usuario);
        res.send({usuario, token});    
      } catch (error) {
        res.status(401).send(error.message);
      }
})

/* GET api/usuarios/consultarUsuarioPorMail/:email */
router.get('/usuarios/consultarUsuarioPorMail/:email',auth,checkRols.checkRols('profesor'),async (req, res) => {
    try{   
        const usuario = await controller.getUsuarioByEmail(req.params.email);
        res.status(200).json(usuario);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* GET api/usuarios/consultarUsuario/:id */
router.get('/usuarios/consultarUsuario/:id',auth,checkRols.checkRols('profesor'), async (req, res) => {
    try{
        const usuarios = await controller.getUsuarioById(req.params.id);
        res.status(200).json(usuarios);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* POST api/usuarios/agregarAlumno BODY -> DATOS */
router.post('/usuarios/agregarAlumno',auth,checkRols.checkRols('profesor'), async(req, res) => {
    try{
        const usuario = await controller.agregarAlumno(req.body);
        res.status(200).json(usuario);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* POST api/usuarios/agregarProfesor BODY -> DATOS */
router.post('/usuarios/agregarProfesor',auth,checkRols.checkRols('profesor'), async(req, res) => {
    try{
        const usuario = await controller.agregarProfesor(req.body);
        res.status(200).json(usuario);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* PUT api/usuarios/actualizarAlumno/:id BODY -> DATOS */
router.put('/usuarios/actualizarAlumno/:id',auth,checkRols.checkRols('profesor'), async(req,res)=>{
    try{
        usuario = await controller.actualizarAlumno(req.body, req.params.id);
        res.status(200).json(usuario);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* DELETE api/usuarios/borrarAlumno/:id */
router.delete('/usuarios/borrarAlumno/:id',auth,checkRols.checkRols('profesor'), async(req,res)=>{
    try{
        const usuario = (await controller.borrarAlumno(req.params.id));
        res.status(200).json(usuario);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

/* GET api/usuarios/listarAlumnos */
router.get('/usuarios/listarAlumnos', auth,checkRols.checkRols('profesor'), async (req, res) => {    
    try{
        const usuarios = await controller.getTodosAlumnos()
        res.status(200).json(usuarios);
    }catch(err){
        res.status(400).send('Error ' + err.message)
    }
});

module.exports = router;
